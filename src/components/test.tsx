import { Tests } from '/src/data/tests/testsManager.js';

const testsWrapper = document.querySelector('.tests__wrapper');

class Test {
	constructor(id, author, title, description, languages, duration, level, score, data) {
		self.id = id
		self.author = author
		self.title = title
		self.description = description
		self.languages = languages
		self.duration = duration
		self.level = level
		self.score = score
		self.data = data
	}
}
const TestsData = []

function translateLevel(level) {
	switch (level) {
		case 'easy':
			return 'Лёгкий'
		case 'medium':
			return 'Средний'
		case 'hard':
			return 'Сложный'
	}
}

function createTestCards(author) {
	const testElements = []

	for (let test of author.tests) {
		const element = `
			<div class="test__card__wrapper ${test.level}" data-test-number='${test.id}'>
				<h2 class="test__card__title">${test.title}</h2>
				<div class="languages">
					${test.languages.map(language => `<span class='test__card__language badge'>${language}</span>`).join(' ')}
				</div>
				<p class="test__card__description">${test.description}</p>
				<ul class="test__card__info">
					<li class="test__card__author"><b>Автор:</b> ${author.author}</li>
					<li class="test__card__duration"><b>Время:</b> ${test.duration} минут</li>
					<li class="test__card__mode"><b>Сложность:</b>  ${translateLevel(test.level)}</li>
					<li class="test__card__score"><b>Баллы:</b>  ${test.score}</li>
				</ul>
			</div>
		`
		testElements.push(element)
	}

	return testElements
}

function drawTestsCards(authors) {
	authors.forEach(author => {
		testsWrapper.insertAdjacentHTML('beforeend', (createTestCards(author)))
	})
}

drawTestsCards(Tests)

function createModalWindow(test) {
	const element = `
		<div class="modalWindowTest">
			<h3 class="question">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem eaque eligendi ea incidunt</h3>
			<ul class="answers">
				<li class="answer answer_1">Hello 1</li>
				<li class="answer answer_2">Hello 2</li>
				<li class="answer answer_3">Hello 3</li>
				<li class="answer answer_4">Hello 4</li>
			</ul>
			<button class="next-question button">Следующий вопрос</button>
			<button class="finish-test button">Закончить</button>
		</div>
	`

	return element
}

function finishTest(event) {
	event.currentTarget.parentElement.remove()
	document.body.classList.remove('hidden')
}

function openTest(event) {
	if (event.currentTarget.classList.contains('test__card__wrapper')) {
		document.body.insertAdjacentHTML('beforeend', (createModalWindow()))
		document.body.classList.add('hidden')
		document.querySelector('.finish-test').addEventListener('click', finishTest)
	}
}

for (let test of document.querySelectorAll('.test__card__wrapper')) {
	test.addEventListener('click', openTest)
}

