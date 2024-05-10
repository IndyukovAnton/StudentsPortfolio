import {Lessons} from '../data/lessons.js';
import {search} from './search.js';

const postsContainer = document.querySelector('.main__posts');
const mainTitle = document.querySelector('.main__title');

function createPost(author, comment, photoURL, link) {
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

lessonsContainer.addEventListener('click', (e) => {
	if (e.target.classList.contains('lessons__item__link')) {
		e.preventDefault();

		mainTitle.textContent = e.target.textContent;

		lessonsContainer.classList.remove('open');
		lessonsContainer.classList.add('close');

		let postData = Lessons[e.target.href.split('/')[3]];
		loadPosts(postData)
	}
});


const searchField = document.querySelector('.search');

searchField.addEventListener('input', (e)=> {
	loadPosts(search(Lessons, e.currentTarget.value))
})