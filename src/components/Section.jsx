
export default function Section({ id, title, eyebrow, children, bg='white', subtitle }){
  const bgClass = bg==='gray' ? 'bg-grayx-50' : bg==='amber' ? 'bg-amber' : bg==='dark' ? 'bg-grayx-700 text-white' : 'bg-white'
  return (
    <section id={id} className={`${bgClass} py-16`}>
      <div className="container-pad">
        {eyebrow && <p className="text-amber font-semibold mb-2">{eyebrow}</p>}
        {title && <h2 className="mb-2">{title}</h2>}
        {subtitle && <p className="text-grayx-600 max-w-2xl mb-6">{subtitle}</p>}
        <div>{children}</div>
      </div>
    </section>
  )
}
