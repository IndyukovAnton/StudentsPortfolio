import '../../assets/css/components/tag/tagList.css'
import { TagItem } from "./tagItem"

export default function TagList(props: {tags: string[]}) {
	if (!props.tags.length) { return }

	return (
		<ul className="tags">
			{

				props.tags.map((tag, index)=> {
					if (!(["interesting", "modified"].includes(tag))) {
						throw "Value error, correctly value \"interesting\" or \"modified\""
					}
					return <TagItem key={"tag_"+index} tag={tag}/>
				})
			}
		</ul>
	)
}