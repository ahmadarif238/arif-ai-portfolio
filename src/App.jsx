import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { Header } from './genz/components/Header';
import { Hero } from './genz/components/Hero';
import { MarqueeTicker } from './genz/components/MarqueeTicker';
import { SelectedWorks } from './genz/components/SelectedWorks';
import { ServicesSection } from './genz/components/ServicesSection';
import { ProcessSection } from './genz/components/ProcessSection';
import { AboutSection } from './genz/components/AboutSection';
import { TechStackSection } from './genz/components/TechStackSection';
import { PricingSection } from './genz/components/PricingSection';
import { FaqSection } from './genz/components/FaqSection';
import { ContactSection } from './genz/components/ContactSection';
import { Footer } from './genz/components/Footer';
import { ProjectModal } from './genz/components/ProjectModal';
import { ResumeModal } from './genz/components/ResumeModal';
import { ScrollTopButton } from './genz/components/ScrollTopButton';
import WhatsAppButton from './components/layout/WhatsAppButton';

import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

/** The single-page portfolio: every section in the order the design lays them out. */
const HomePage = ({ onOpenResumeModal, onSelectProject, preselectedService, onPreselectService }) => (
    <main id="main-content" className="pt-20">
        <Hero />
        <MarqueeTicker />
        <SelectedWorks onSelectProject={onSelectProject} />
        <ServicesSection onSelectServiceForContact={onPreselectService} />
        <ProcessSection />
        <AboutSection onOpenResumeModal={onOpenResumeModal} />
        <TechStackSection />
        <PricingSection onSelectTierForContact={onPreselectService} />
        <FaqSection />
        <ContactSection selectedServiceOrTier={preselectedService} />
    </main>
);

function App() {
    // Night / Day theme, matching the design's toggle
    const [isDayMode, setIsDayMode] = useState(false);

    const [selectedProject, setSelectedProject] = useState(null);
    const [resumeModalOpen, setResumeModalOpen] = useState(false);
    const [preselectedContactService, setPreselectedContactService] = useState('');

    useEffect(() => {
        const root = document.documentElement;
        const body = document.body;
        if (isDayMode) {
            root.classList.add('theme-day');
            body.classList.add('theme-day');
        } else {
            root.classList.remove('theme-day');
            body.classList.remove('theme-day');
        }
    }, [isDayMode]);

    const handleSelectServiceForContact = (title) => {
        setPreselectedContactService(title);
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Router>
            <ScrollToTop />
            <div className="min-h-screen bg-[#0b1220] text-[#94a9c9] selection:bg-[#0bd1d1] selection:text-[#0b1220] transition-colors duration-300">
                <Header
                    isDayMode={isDayMode}
                    onToggleTheme={() => setIsDayMode((prev) => !prev)}
                    onOpenResumeModal={() => setResumeModalOpen(true)}
                />

                <Routes>
                    <Route
                        path="/"
                        element={
                            <HomePage
                                onOpenResumeModal={() => setResumeModalOpen(true)}
                                onSelectProject={setSelectedProject}
                                preselectedService={preselectedContactService}
                                onPreselectService={handleSelectServiceForContact}
                            />
                        }
                    />
                    <Route path="/blog" element={<main className="pt-20"><Blog /></main>} />
                    <Route path="/blog/:slug" element={<main className="pt-20"><BlogPost /></main>} />
                </Routes>

                <Footer />

                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
                <ResumeModal isOpen={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />

                <ScrollTopButton />
                <WhatsAppButton />
            </div>
        </Router>
    );
}

export default App;
