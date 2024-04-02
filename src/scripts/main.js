import { Lessons } from "../data/lessons.js";

const mainContainer = document.querySelector('.main__container')
const mainTitle = document.querySelector('.main__title')

const lessonsContainer = document.querySelector('.lessons')

function createPost(author, comment, photoURL, link) {
	const postHTML = `
	<div class="post">
		<a href="${link}" target="_blank" class="post__link"><img src="${photoURL}" alt="post__photo" class="post__photo"></a>
		<div class="post__info">
			<h3 class="post__author">${author}</h3>
			<p class="post__comment">${comment}</p>
		</div>
	</div>
	`.trim()

	mainContainer.insertAdjacentHTML('beforeend', postHTML)
}

document.addEventListener('DOMContentLoaded', ()=> {
	// for (let i = 0; i < 5; i++) {
	// 	createPost('None', "None", "https://utilisator.ru/media/k2/items/cache/22c02097e4438bd2f2f3fe4a6a3ab0e1_M.jpg", "https://utilisator.ru/media/k2/items/cache/22c02097e4438bd2f2f3fe4a6a3ab0e1_M.jpg")
	// }
})

lessonsContainer.addEventListener('click', (e)=> {
	if (e.target.classList.contains('lessons__item__link')) {
		e.preventDefault();

		lessons.classList.remove('open')
		lessons.style.display = 'none'

		mainTitle.textContent = e.target.textContent

		let postData = Lessons[e.target.href.split('/')[3]]
		postData.forEach(post => {
			createPost(post.author, post.comment, post.photoURL, post.link)
		})

	}
})