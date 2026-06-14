import { Link } from 'react-router-dom'
import { chapters } from '../data/chapters'

const statusLabels = {
  active: 'Active',
  planned: 'Planned',
  draft: 'Draft',
}

export default function ChaptersPage() {
  return (
    <div className="page narrow-page">
      <header className="page-header">
        <p className="eyebrow">Long-form MDX</p>
        <h1>Chapters</h1>
        <p className="lede">
          Each chapter is a self-contained note page with equations, conceptual checkpoints, and
          links back into the study map.
        </p>
      </header>
      <div className="article-list">
        {chapters.map((chapter) => (
          <Link className="article-row large" key={chapter.slug} to={chapter.route}>
            <span>
              {chapter.section} · {chapter.readingTime}
            </span>
            <strong>{chapter.title}</strong>
            <small>{chapter.subtitle}</small>
            <em>{statusLabels[chapter.status]}</em>
          </Link>
        ))}
      </div>
    </div>
  )
}
