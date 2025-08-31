import { Link } from "react-router-dom";

import "../../assets/css/components/project/projectItem.css";

import TagList from "../tag/tagList";

export type Project = {
	author: string
	comment: string
	photoURL: string
	link: string
	tags: []
}

export function ProjectItem(project: Project) {

	return (
		<div className="project">
			<Link to={project.link} target="_blank" className="project__link">
				<img src={project.photoURL || "../../src/assets/images/dummy.png"} alt="project__photo" className="project__photo" />
			</Link>

			<div className="project__info">
			
			<Link to={project.link} target="_blank" className="project__link">
				<h3 className="project__author">{project.author}</h3>
			</Link>

			<TagList tags={project.tags}/>
			
			<p className="project__comment">{project.comment}</p>
			</div>
		</div>
	)
}