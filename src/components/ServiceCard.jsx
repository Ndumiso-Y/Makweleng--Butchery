
export default function ServiceCard({title, desc, badge}){
  return (
    <div className="card hover:shadow-lg transition-shadow">
      {badge && <span className="inline-block text-xs font-bold bg-amber px-3 py-1 rounded-full mb-3">{badge}</span>}
      <h3 className="mb-2">{title}</h3>
      <p className="text-grayx-600">{desc}</p>
    </div>
  )
}
