const button = document.querySelector('.open__lessons')
const lessons = document.querySelector('.lessons')

button.addEventListener('click', ()=> {
	if (lessons.classList.contains('open')) {
		lessons.classList.remove('open')
		lessons.classList.add('close')
	} else {
		lessons.classList.add('open')
		lessons.classList.remove('close')
	}	
})