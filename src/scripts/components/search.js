export const search = (works, query) => {
	let searched = []

	for (let i = 0; i <= 32; i++) {
		works[i].forEach(work => {

			const author = work.author || ''
			const comment = work.comment || ''

			if (author.toLowerCase().includes(query.toLowerCase()) || comment.toLowerCase().includes(query.toLowerCase())) {
				searched.push(work)
			}
		})
	}

	return searched
}