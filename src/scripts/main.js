import {Lessons} from '../data/lessons.js';
import {search} from './components/search.js';

const postsContainer = document.querySelector('.main__content');
const mainTitle = document.querySelector('.main__title');

const tags_symbols = {
	"interesting": "⭐",
	"modified": "🔄"
}

function createPost(author, comment, photoURL, link, tags) {

	if (!photoURL) {
		photoURL = './src/images/dummy.png';
	}

	if (!comment) {
		comment = '"Без комментария"'
	}

	

	if (!tags || !tags.length) {
		tags = ''
	} else {

		const _tags = []

		for (let tag of tags) {
			_tags.push(`<li class='post__tags-item' title='${tag}'>${tags_symbols[tag]}</li>`)
		}

		tags = _tags.join('')
	}

	const postHTML = `
	<div class="post">
		<a href="${link}" target="_blank" class="post__link"><img src="${photoURL}" alt="post__photo" class="post__photo"></a>
		<div class="post__info">
		<h3 class="post__author">${author}</h3>
		<ul class="post__tags">${tags}</ul>
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
		createPost(post.author, post.comment, post.photoURL, post.link, post.tags);
	});
}

function loadAllPosts(posts) {
	postsContainer.innerHTML = '';

	for (let post_id of Object.keys(posts)) {
		posts[post_id].forEach((post) => {
			createPost(post.author, post.comment, post.photoURL, post.link, post.tags);
		});
	}
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
			location.href = './src/pages/AddWork/index.html'
			return
		}

		if (page == "tests") {
			location.href = './src/pages/Tests/index.html'
			return
		}

		loadPosts(Lessons[page])
	}
});

const searchField = document.querySelector('.search');

searchField.addEventListener('input', (e)=> {
	loadPosts(search(Lessons, e.currentTarget.value))
})


document.addEventListener('DOMContentLoaded', (e)=> {
	loadAllPosts(Lessons)
})