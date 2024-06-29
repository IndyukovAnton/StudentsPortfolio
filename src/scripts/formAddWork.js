function showPhotoPreview(file) {
	let reader = new FileReader()

	reader.readAsDataURL(file)
	reader.onload = () => {
		project_photo_preview.src = reader.result

		const title = project_photo_wrapper.querySelector('label')
		title.textContent = "Фото добавлено!"
	}

	reader.error= () => {
		alert('Не удалось загрузить фото')
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

	reader.error= () => {
		alert('Не удалось загрузить файл')
	}
}


const project_photo_wrapper = document.querySelector('.input__photo-wrapper')
const project_file_wrapper = document.querySelector('.input__file-wrapper')

const project_photo_preview = document.querySelector('.photo__preview');
const project_file_info = document.querySelector('.file__info');
const button_add_project_photo = document.querySelector('.input__photo ')
const button_add_project_file = document.querySelector('.input__file')
const addProjectForm = document.querySelector('.add-work')

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

async function sendProject(projectData) {
	const _token = getToken()

	const url = `https://api.telegram.org/bot${_token}`

	const date = new Date()

	const caption = `
	Автор: ${projectData.get('author')}\n
	Комментарий: ${projectData.get('comment')}\n
	Тема: ${projectData.get("theme")}\n
	Дата: ${date}\n
	`

	projectData.append('caption', caption)
	await request(url + '/sendPhoto', projectData)

	const projectFileData = new FormData()
	projectFileData.append('chat_id', '5810063883')
	projectFileData.append('document', projectData.get('file'))
	await request(url + '/sendDocument', projectFileData)

	alert('Ваш проект был успешно отправлен')
}

button_add_project_photo.addEventListener('change', (e)=> {
	showPhotoPreview(e.target.files[0])
})

function checkProjectFile(file) {
	return file.name.split('.').pop() != 'zip'
}

button_add_project_file.addEventListener('change', (e)=> {
	if (checkProjectFile(e.target.files[0])) {
		alert('Проект должен быть в формате zip')
		e.target.value = ''
		return
	}

	if (e.target.files[0].size / 1_000_000 > 20) {
		alert('Проект должен быть меньше 20 МБ')
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