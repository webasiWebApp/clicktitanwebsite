import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import AiSeo from './pages/AiSeo';
import AiPpc from './pages/AiPpc';
import AiLsa from './pages/AiLsa';
import AiWebsite from './pages/AiWebsite';
import AiFacebook from './pages/AiFacebook';
import AiScheduling from './pages/AiScheduling';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermOfUse from './pages/TermOfUse';
import CaseStudiesMore from './pages/CaseStudyMore';

import ScrollToTop from './components/ScrollToTop';

// 
// npm run deploy
// git add .
// git commit -m "first commit"
// git push -u origin gh-pages

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:id" element={<CaseStudiesMore />} />
            <Route path="/services/ai-seo" element={<AiSeo />} />
            <Route path="/services/ai-ppc" element={<AiPpc />} />
            <Route path="/services/ai-lsa" element={<AiLsa />} />
            <Route path="/services/ai-website" element={<AiWebsite />} />
            <Route path="/services/ai-facebook" element={<AiFacebook />} />
            <Route path="/services/ai-scheduling" element={<AiScheduling />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/termofuse" element={<TermOfUse />} />
           
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;