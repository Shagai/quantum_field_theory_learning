import { Navigate, Route, Routes } from 'react-router-dom'
import RelativisticQuantumMechanics from './articles/relativistic-quantum-mechanics.mdx'
import Layout from './components/Layout'
import ChaptersPage from './pages/ChaptersPage'
import HomePage from './pages/HomePage'
import TopicsPage from './pages/TopicsPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="chapters" element={<ChaptersPage />} />
        <Route path="chapters/relativistic-quantum-mechanics" element={<RelativisticQuantumMechanics />} />
        <Route path="topics" element={<TopicsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
