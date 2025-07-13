import "../assets/css/components/search.css"

export default function Search({value, onChange}) {
	return <input type="search" className="search" placeholder="поиск" autoComplete="given-name" value={value} onChange={onChange}/>
}