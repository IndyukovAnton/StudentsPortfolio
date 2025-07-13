import "../assets/css/components/lessonsMenu.css"

const lessons = {
	options: [
		{
			link: "add-work",
			title: "Предложить работу"
		},
		{
			link: "tests",
			title: "Тесты"
		},
		{
			link: "0",
			title: "Интересные"
		},
	],
	html: [
		{
			id: 1,
			title: "Введение в Web. Знакомство с HTML"
		},
		{
			id: 2,
			title: "Теги стилизации текста"
		},
		{
			id: 3,
			title: "Фотографии и ссылки. Блочные и строчные теги"
		},
		{
			id: 4,
			title: "Списки. Нумерованные, Маркированный, Выпадающий, список определений"
		},
		{
			id: 5,
			title: "Работа с текстом"
		},
		{
			id: 6,
			title: "Работа с путями, многостраничный сайт, якоря"
		},
		{
			id: 7,
			title: "Вставка объектов"
		},
		{
			id: 8,
			title: "Формы"
		},
		{
			id: 9,
			title: "Семантическая вёрстка"
		},
		{
			id: 10,
			title: "Метаданные и элементы тега head"
		},
	],
	css: [
		{
			id: 11,
			title: "Знакомство с CSS"
		},
		{
			id: 12,
			title: "Стилизация текста"
		},
		{
			id: 13,
			title: "Отступы. Рамки и тень. @import"
		},
		{
			id: 14,
			title: "Стилизация списков, курсора и обнуляющие стили. Работа с фоном."
		},
		{
			id: 15,
			title: "Псевдоэлементы и псевдоклассы"
		},
		{
			id: 16,
			title: "Позиционирование, display, overflow, z-index"
		},
		{
			id: 17,
			title: "Анимации, transition, transform, переменные CSS"
		},
		{
			id: 18,
			title: "Flex"
		},
		{
			id: 19,
			title: "Grid"
		},
		{
			id: 20,
			title: "Адаптивность"
		},
	],
	js: [
		{
			id: 21,
			title: "Знакомство с JavaScript"
		},
		{
			id: 22,
			title: "Работа с консолью, модальные окна"
		},
		{
			id: 23,
			title: "Условные конструкции. Тернарный оператор. Switch"
		},
		{
			id: 24,
			title: "Массивы"
		},
		{
			id: 25,
			title: "Циклы"
		},
		{
			id: 26,
			title: "Функции"
		},
		{
			id: 27,
			title: "Обработка исключений. Объекты. Строковые методы"
		},
		{
			id: 28,
			title: "DOM. data-атрибуты"
		},
		{
			id: 29,
			title: "Отслеживание событий. Модуль Math"
		},
		{
			id: 30,
			title: "import и export. Классы"
		},
		{
			id: 31,
			title: "Сетевые запросы. Fetch"
		},
		{
			id: 32,
			title: "Итоговые проекты"
		},
	]
}

export default function LessonsMenu() {
	return (
		<aside className="lessons">
			<h2 className="lessons__title">Темы</h2>
			
			<ol className="lessons__list">
				{lessons['options'].map((option, index) => {
					return (
						<li key={"optionMenuItem_"+index} className="lessons__item">
							<a className="lessons__item__link" href={"/"+option.link}>{option.title}</a>
						</li>
					)
				})}

				<li className="lessons__part-title">HTML</li>

				{lessons['html'].map((lesson, index) => {
					return (
						<li key={"lessonMenuItem_"+index} className="lessons__item">
							<a className="lessons__item__link" href={"/"+lesson.id}>{lesson.title}</a>
						</li>
					)
				})}

				<li className="lessons__part-title">CSS</li>

				{lessons['css'].map((lesson, index) => {
					return (
						<li key={"lessonMenuItem_"+index} className="lessons__item">
							<a className="lessons__item__link" href={"/"+lesson.id}>{lesson.title}</a>
						</li>
					)
				})}

				<li className="lessons__part-title">JavaScript</li>

				{lessons['js'].map((lesson, index) => {
					return (
						<li key={"lessonMenuItem_"+index} className="lessons__item">
							<a className="lessons__item__link" href={"/"+lesson.id}>{lesson.title}</a>
						</li>
					)
				})}
			</ol>
		</aside>
	)
}