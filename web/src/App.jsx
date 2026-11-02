
import { Routes, Route, Navigate } from 'react-router'

import Welcome from './pages/Welcome'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/inicio" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
