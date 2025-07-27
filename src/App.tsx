import "./assets/css/App.css"

import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import lessonsData from "./assets/data/lessons.json"

import { LayoutPage } from "./components/layoutPage"
import { HomePage } from "./pages/pageHome"
import { NotFoundPage } from "./pages/pageNotFound"


function App() {

	const origLessons = JSON.parse(JSON.stringify(lessonsData))
	const [lessons, setLessons] = useState(origLessons)
	const [searchValue, setSearchValue] = useState('')

	function filteringLessons(event) {
		setSearchValue(event.target.value)
		
		const searchValue = event.target.value.trim().toLowerCase()

		if (!searchValue) {
			setLessons(origLessons)
			return
		}

		const searched = {}

		for (const lesson_id of Object.keys(lessons)) {
			const filteredProjects = []

			lessons[lesson_id].forEach(project => {
					const author = project.author?.toLowerCase() || ''
					const comment = project.comment?.toLowerCase() || ''

					if (author.includes(searchValue) || comment.includes(searchValue)) {
							filteredProjects.push(project)
					}
			})

			if (filteredProjects.length > 0) {
					searched[lesson_id] = filteredProjects
			}
		}

		setLessons(searched)
	}

	return (
		<>
			<Routes>
				<Route path="/" element={ <LayoutPage searchValue={searchValue} actionFunc={filteringLessons}/>}>
					<Route index element={ <HomePage lessons={lessons}/>}></Route>
					<Route path="*" element={ <NotFoundPage />}></Route>
				</Route>
			</Routes>
		</>
	)
}

export default App