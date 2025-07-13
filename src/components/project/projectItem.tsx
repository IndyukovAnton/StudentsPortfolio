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
			<a href={project.link} target="_blank" className="project__link">
				<img src={project.photoURL} alt="project__photo" className="project__photo" />
			</a>
			<div className="project__info">
			<h3 className="project__author">{project.author}</h3>

			<TagList tags={project.tags}/>
			<p className="project__comment">{project.comment}</p>
			</div>
		</div>
	)
}