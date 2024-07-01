export class Notification {
	// types: success, warning, error
	constructor(title, description, type = 'success') {
		this.title = title
		this.description = description
		this.type = type
		this.container = document.querySelector('.notification')
		this.duration = 3000
	}

	show() {
		this.container.innerHTML = `
			<h3>${this.title}</h3>
			<p>${this.description}</p>
		`
		this.container.classList.add(this.type)
		this.container.classList.add("show")

		setTimeout(() => {
			this.hide()
		}, this.duration)
	}

	hide() {
		this.container.innerHTML = ''
		this.container.classList.remove("show")
		this.container.classList.remove(this.type)
	}
}