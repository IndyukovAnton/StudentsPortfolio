import { Notification } from "./notifications.js"


function showPhotoPreview(file) {
	let reader = new FileReader()

	reader.readAsDataURL(file)
	reader.onload = () => {
		project_photo_preview.src = reader.result
		project_photo_preview.classList.add('visible')

		const title = project_photo_wrapper.querySelector('label')
		title.textContent = "Фото добавлено!"
	}
}


function showFileInfo(file) {
	let reader = new FileReader()
	reader.readAsArrayBuffer(file)

	reader.onload = () => {
		project_file_info.innerHTML = `
		<p>Название: ${file.name}</p>
		<p>Размер: ${file.size} байт</p>
		<p>Тип: ${file.type}</p>
		`
	}
}


async function request(url, data) {
	return await fetch(url, {
		method: 'POST',
		body: data
	})
}


function getToken() {
	const _token = document.querySelector('.token').value
	return _token
}

const project_photo_wrapper = document.querySelector('.input__photo-wrapper')
const project_file_wrapper = document.querySelector('.input__file-wrapper')

const project_photo_preview = document.querySelector('.photo__preview');
const project_file_info = document.querySelector('.file__info');
const button_add_project_photo = document.querySelector('.input__photo ')

button_add_project_photo.addEventListener('change', (e)=> {
	showPhotoPreview(e.target.files[0])
})

const addProjectForm = document.querySelector('.add-work')

const file_methods = document.querySelectorAll('.file_method')
const project_link = document.querySelector('.input__link')
const project_file = document.querySelector('.input__file')

file_methods.forEach(file_method => {
	file_method.addEventListener('change', switchMethodAddProject)
})

function switchMethodAddProject(e) {
	if (e.target.value == 'link') {
		project_link.style.display = 'block'
		project_link.name = 'project'
		project_file.style.display = 'none'
		project_file.name = ''
		project_file_info.style.display = 'none'
	} else {
		project_link.style.display = 'none'
		project_link.name = ''
		project_file.style.display = 'flex'
		project_file.name = 'project'
		project_file_info.style.display = 'block'
	}
}


function checkProjectFile(file) {
	return file.name.split('.').pop() != 'zip'
}

function formateProjectCaption(projectData) {
	const date = new Date()

	let caption;

	if (projectData.get('project_method') == 'link') {
		caption = `
		Автор: ${projectData.get('author')}\n
		Комментарий: ${projectData.get('comment')}\n
		Тема: ${projectData.get("theme")}\n
		Дата: ${date}\n
		Ссылка: ${projectData.get("project")}\n
		`
	} else {
		caption = `
		Автор: ${projectData.get('author')}\n
		Комментарий: ${projectData.get('comment')}\n
		Тема: ${projectData.get("theme")}\n
		Дата: ${date}\n
		`
	}

	return caption.trim()
}


async function sendProject(projectData) {
	const url = `https://api.telegram.org/bot${getToken()}`

	const caption = formateProjectCaption(projectData)

	projectData.append('caption', caption)
	await request(url + '/sendPhoto', projectData)


	if (projectData.get('project_method') != 'link') {
		const projectFileData = new FormData()
		projectFileData.append('chat_id', '5810063883')
		projectFileData.append('document', projectData.get('project'))
		await request(url + '/sendDocument', projectFileData)
	}
	(new Notification('Успешно', 'Ваш проект отправлен', 'success')).show()
}


project_file.addEventListener('change', (e)=> {
	if (checkProjectFile(e.target.files[0])) {
		(new Notification('Ошибка формата', 'Проект должен быть в формате zip', 'warning')).show()
		e.target.value = ''
		return
	}

	if (e.target.files[0].size / 1_000_000 > 20) {
		(new Notification('Недопустимый размер файла', 'Проект должен быть меньше 20 МБ', 'warning')).show()
		e.target.value = ''
		return
	}

	showFileInfo(e.target.files[0])

	const title = project_file_wrapper.querySelector('label')
	title.textContent = "Файл добавлен!"
})


addProjectForm.addEventListener('submit', (e)=> {
	e.preventDefault()
	const formData = new FormData(addProjectForm);
	formData.append('chat_id', '5810063883')
	sendProject(formData)
}) 