const button = document.querySelector('.open__lessons')
const lessons = document.querySelector('.lessons')

button.addEventListener('click', ()=> {
	if (lessons.classList.contains('open')) {
		lessons.classList.remove('open')
		lessons.style.display = 'none'
	} else {
		lessons.classList.add('open')
		lessons.style.display = 'block'
		lessons.style.left = '0';
		lessons.style.overflowY = "scroll";
	}	
})