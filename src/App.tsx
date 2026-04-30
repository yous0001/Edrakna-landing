import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ScrollToHash } from './components/layout/ScrollToHash'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'
import { JsonLdSite } from './seo/JsonLd'

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <JsonLdSite />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
