import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ScrollToHash } from './components/layout/ScrollToHash'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { HelpCenterPage } from './pages/HelpCenterPage'
import { HomePage } from './pages/HomePage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import { ServicesPage } from './pages/ServicesPage'
import { StudentSuccessPage } from './pages/StudentSuccessPage'
import { TermsPage } from './pages/TermsPage'
import { JsonLdSite } from './seo/JsonLd'

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <JsonLdSite />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/student-success" element={<StudentSuccessPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsPage />} />
        <Route path="/help-center" element={<HelpCenterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
