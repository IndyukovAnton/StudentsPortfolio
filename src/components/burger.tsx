export default function Burger() {
	const button = <button onClick={()=> {
		// const lessons = props.lessons

		console.log('Menu')

		// if (lessons.classList.contains('open')) {
		// 	lessons.classList.remove('open')
		// 	lessons.classList.add('close')
		// } else {
		// 	lessons.classList.add('open')
		// 	lessons.classList.remove('close')
		// }	
	}} className="open__lessons"></button>
	
	return button
}