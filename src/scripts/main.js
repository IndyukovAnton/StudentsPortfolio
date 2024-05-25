import {Lessons} from '../data/lessons.js';
import {search} from './search.js';

const postsContainer = document.querySelector('.main__content');
const mainTitle = document.querySelector('.main__title');

function createPost(author, comment, photoURL, link) {

	if (!photoURL) {
		photoURL = './src/images/dummy.png';
	}

	const postHTML = `
	<div class="post">
		<a href="${link}" target="_blank" class="post__link"><img src="${photoURL}" alt="post__photo" class="post__photo"></a>
		<div class="post__info">
		<h3 class="post__author">${author}</h3>
		<p class="post__comment">${comment}</p>
		</div>
		</div>
		`.trim();

	postsContainer.insertAdjacentHTML('beforeend', postHTML);
}

const lessonsContainer = document.querySelector('.lessons');

function loadPosts(posts) {
	postsContainer.innerHTML = '';
	posts.forEach((post) => {
		createPost(post.author, post.comment, post.photoURL, post.link);
	});
}

// function loadFormAddWork() {
// 	postsContainer.innerHTML = '';
// 	return `
// 	<form action="#" class="add-work">
// 		<input type="text" placeholder='Автор' class='input__author input_field'>
// 		<input type="text" placeholder='Комментарий' class='input__comment input_field'>
// 		<div class="input__photo-wrapper input__wrapper">
// 			<span>Добавьте фото</span>
// 			<input type="file" style="display: none" id="getPhoto" class='input__photo'>
// 			<button onclick="document.getElementById('getPhoto').click()">Выберите обложку</button>
// 		</div>
// 		<div class="input__file-wrapper input__wrapper">
// 			<span>Добавьте проект</span>
// 			<input type="file" style="display: none" id="getFile" class='input__file'>
// 			<button onclick="document.getElementById('getFile').click()">Выберите файл</button>
// 		</div>
		
// 	</form>
// 	`
// }

function loadFormAddWorkDummy() {
	postsContainer.innerHTML = '';
	return `
		<h2 style="text-align: center; font-size: 40px">Скоро...</h2>
	`
}

lessonsContainer.addEventListener('click', (e) => {
	if (e.target.classList.contains('lessons__item__link')) {
		e.preventDefault();

		mainTitle.textContent = e.target.textContent;

		lessonsContainer.classList.remove('open');
		lessonsContainer.classList.add('close');

		const path = e.target.href.split('/')
		let page = path[path.length - 1]

		if (page == 'add-work') {
			postsContainer.insertAdjacentHTML('beforeend', loadFormAddWorkDummy());
		} else {
			loadPosts(Lessons[page])
		}
	}
});


const searchField = document.querySelector('.search');

searchField.addEventListener('input', (e)=> {
	loadPosts(search(Lessons, e.currentTarget.value))
})