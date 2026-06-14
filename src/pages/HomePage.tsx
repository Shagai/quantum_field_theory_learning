import { Link } from 'react-router-dom'
import { HomeQftMapFigure, RelativisticBridgeFigure } from '../components/InteractiveFigures'
import { activeChapter, chapters } from '../data/chapters'
import { topics } from '../data/topics'

export default function HomePage() {
  const seededTopics = topics.filter((topic) => topic.status === 'seeded').slice(0, 6)
  const nextTopics = topics.filter((topic) => topic.status === 'next' || topic.status === 'planned').slice(0, 4)

  return (
    <div className="page">
      <section className="home-intro">
        <div className="intro-copy">
          <p className="eyebrow">Personal research notebook</p>
          <h1>Quantum Field Theory, built from states and symmetries toward fields.</h1>
          <p className="lede">
            A chapter-based notebook for learning QFT with long-form notes, rendered equations,
            compact study maps, and interactive diagrams that keep the formalism tied to physical
            interpretation.
          </p>
          <div className="action-row">
            <Link className="button primary" to={activeChapter.route}>
              Read chapter 1
            </Link>
            <Link className="button" to="/topics">
              Browse the map
            </Link>
          </div>
        </div>
        <HomeQftMapFigure />
      </section>

      <section className="reader-section">
        <div className="section-heading">
          <p className="eyebrow">Start here</p>
          <h2>Learning path</h2>
          <p>Build the language of quantum states, then impose relativity and watch fields become natural.</p>
        </div>
        <div className="learning-path">
          {seededTopics.map((topic, index) => (
            <article className="topic-card" key={topic.slug}>
              <span className="step-number">{index + 1}</span>
              <p className="card-kicker">{topic.layer}</p>
              <h3>{topic.title}</h3>
              <p>{topic.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wide-section">
        <RelativisticBridgeFigure />
      </section>

      <section className="reader-section split-section">
        <div>
          <div className="section-heading compact">
            <p className="eyebrow">Chapters</p>
            <h2>Notebook chapters</h2>
          </div>
          <div className="article-list">
            {chapters.map((chapter) => (
              <Link className="article-row" key={chapter.slug} to={chapter.route}>
                <span>
                  {chapter.section} · {chapter.readingTime}
                </span>
                <strong>{chapter.title}</strong>
                <small>{chapter.subtitle}</small>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="section-heading compact">
            <p className="eyebrow">Current chapter</p>
            <h2>Relativistic Quantum Mechanics</h2>
          </div>
          <div className="progress-panel">
            <span className="status-pill active">Active</span>
            <h3>{activeChapter.title}</h3>
            <p>{activeChapter.summary}</p>
            <Link className="text-link" to={activeChapter.route}>
              Open first chapter
            </Link>
          </div>
        </div>
      </section>

      <section className="reader-section">
        <div className="section-heading">
          <p className="eyebrow">Queue</p>
          <h2>Next concepts to deepen</h2>
        </div>
        <div className="compact-grid">
          {nextTopics.map((topic) => (
            <article className="mini-card" key={topic.slug}>
              <strong>{topic.title}</strong>
              <p>{topic.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
