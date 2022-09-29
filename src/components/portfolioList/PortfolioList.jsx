import "./portfolioList.scss"

export default function portfolioList({title, active, id, setSelected }) {
  return (
    <div className={"portfolioList " + (active && "active")} onClick={()=>setSelected(id)}>{title}</div>
  )
}
