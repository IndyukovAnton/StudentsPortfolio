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

function switchTest(curseId = 0) {
	console.log(curseId)
}

const settings = document.querySelector('.settings')

settings.querySelectorAll('.settings__choose__curse').forEach(curse => {
	curse.addEventListener('click', (e)=> {
		switchTest(e.target.dataset.curseId)
	})
})