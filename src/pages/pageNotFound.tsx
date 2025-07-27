import { Link } from "react-router-dom"
import '../assets/css/components/pageNotFound.css'

const NotFoundPage = () => {
	return (
		<div className="not-found">
			<div className="container">
				<p className="not-found__header">404</p>
				<p className="not-found__description">Страница не найдена</p>
				<Link to="/" className="not-found__btn-back">Вернуться на главную</Link>
			</div>
		</div>
	)
}

export { NotFoundPage }