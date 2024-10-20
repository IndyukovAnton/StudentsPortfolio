export const search = (works, query) => {
	let searched = []

	for (let work_id of Object.keys(works)) {
		works[work_id].forEach(work => {

			const author = work.author || ''
			const comment = work.comment || ''

			if (author.toLowerCase().includes(query.toLowerCase()) || comment.toLowerCase().includes(query.toLowerCase())) {
				searched.push(work)
			}
		})
	}

	return searched
}