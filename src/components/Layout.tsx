import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Chapters', to: '/chapters' },
  { label: 'Topics', to: '/topics' },
]

export default function Layout() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <NavLink className="brand" to="/" aria-label="QFT Learning Notebook home">
          <span className="brand-mark">QFT</span>
          <span>
            <strong>QFT Learning Notebook</strong>
            <small>Fields, symmetries, particles, and calculations</small>
          </span>
        </NavLink>
        <nav className="top-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'nav-link is-active' : 'nav-link')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="site-footer">
        <span>Static MDX knowledge base.</span>
        <span>Notes grow chapter by chapter from first principles.</span>
      </footer>
    </div>
  )
}
