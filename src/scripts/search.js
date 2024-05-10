export const search = (works, query) => {
	let searched = []

	for (let i = 1; i <= 32; i++) {
		works[i].forEach(work => {
			if (work.author.toLowerCase().includes(query.toLowerCase()) || work.comment.toLowerCase().includes(query.toLowerCase())) {
				searched.push(work)
			}
		})
	}

	return searched
}