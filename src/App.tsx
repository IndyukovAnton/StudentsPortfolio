import "./assets/css/App.css"

import { useState } from "react"

import Header from "./components/header"
import LessonsMenu from "./components/lessonsMenu"
import Footer from "./components/footer"
import ProjectList from "./components/project/projectList"
import Search from "./components/search"
import Burger from "./components/burger"
import NotificationsWrapper from "./components/notification/notificationWrapper"

import lessonsData from "./assets/data/lessons.json"


function App() {

	const origLessons = JSON.parse(JSON.stringify(lessonsData))
	const [searchValue, setSearchValue] = useState('')
	const [lessons, setLessons] = useState(origLessons)

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
			<Header>
				<Search value={searchValue} onChange={filteringLessons}/>
				<NotificationsWrapper />
				<Burger />
			</Header>

			<LessonsMenu />

			<main className="main">
				<section className="main__container container">
					<h1 className="main__title">Работы учеников</h1>
					<div className="main__info">
						<p className="main__text">
							Здесь вы можете посмотреть работы учеников по нужной теме и подчеркнуть детали для своих.
						</p>
						<p className="main__text">
							Для поиска конкретной работы, просто напишите имя автора в поле поиска или название работы.
						</p>
					</div>
					<ProjectList lessons={lessons}/>
				</section>
			</main>

			<Footer />
		</>
	)
}

export default App