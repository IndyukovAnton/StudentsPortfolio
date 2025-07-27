import ProjectList from "../components/project/projectList"

const HomePage = (props={lessons}) => {
	return (
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
				<ProjectList lessons={props.lessons}/>
			</section>
		</main>
	)
}

export { HomePage }