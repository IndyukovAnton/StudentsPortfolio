class Test {
	constructor(curseId, title, description, questions) {
		this.curseId = curseId
		this.title = title
		this.description = description
		this.questions = questions
	}

	draw() {
		console.log(this.curseId)
	}
}

const testLinks = ['./TaylerDerden/test.1.html']

document.querySelectorAll('.test__card__wrapper').forEach(testCard => {
	testCard.addEventListener('click', (e)=> {
			document.location.href = testLinks[e.currentTarget.dataset.testNumber]
	})
})