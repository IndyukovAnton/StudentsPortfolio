import '../../assets/css/components/tag/tagItem.css'

const tags_symbols: any = {
	"interesting": "⭐",
	"modified": "🔄",
}


export function TagItem(props: {tag: string}) {
	return <li className="tag" title={props.tag}>{tags_symbols[props.tag]}</li>
}