import { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { Header } from './site/sections/Header';
import { Hero } from './site/sections/Hero';
import { TrustStrip } from './site/sections/TrustStrip';
import { WhySection } from './site/sections/WhySection';
import { ProcessSection } from './site/sections/ProcessSection';
import { UseCases } from './site/sections/UseCases';
import { CaseStudies } from './site/sections/CaseStudies';
import { Services } from './site/sections/Services';
import { Pricing } from './site/sections/Pricing';
import { About } from './site/sections/About';
import { Faq } from './site/sections/Faq';
import { BlogTeaser } from './site/sections/BlogTeaser';
import { Contact } from './site/sections/Contact';
import { Footer } from './site/sections/Footer';
import { ProjectOverlay, ResumeOverlay } from './site/sections/Overlays';
import { scrollToHash, scrollToTop, startSmoothScroll } from './site/lib/scroll';
import WhatsAppButton from './components/layout/WhatsAppButton';

// three.js is most of the bundle: load the stage after first paint, with the
// same CSS gradient standing in until it arrives.
const BackgroundStage = lazy(() => import('./site/three/BackgroundStage'));

// Blog routes carry the long article text; only fetch them when visited.
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

/** Mount the 3D stage once the browser is idle, so text and layout paint first. */
const DeferredStage = () => {
    const [ready, setReady] = useState(false);
    useEffect(() => {
        const go = () => setReady(true);
        if ('requestIdleCallback' in window) {
            const id = window.requestIdleCallback(go, { timeout: 1200 });
            return () => window.cancelIdleCallback(id);
        }
        const id = setTimeout(go, 300);
        return () => clearTimeout(id);
    }, []);
    const fallback = <div className="stage" aria-hidden="true" />;
    return ready ? (
        <Suspense fallback={fallback}>
            <BackgroundStage />
        </Suspense>
    ) : (
        fallback
    );
};

const ScrollManager = () => {
    const { pathname, hash } = useLocation();
    useEffect(() => {
        if (hash) setTimeout(() => scrollToHash(hash), 120);
        else scrollToTop(true);
    }, [pathname, hash]);
    return null;
};

/**
 * The single-page portfolio. Dark sections are transparent over the fixed 3D
 * stage (their `data-stage` picks the set behind them); light `.sheet`s slide
 * over it on rounded corners.
 */
const HomePage = ({ onOpenProject, onEnquire, preselected }) => (
    <main id="main-content">
        <Hero />
        <TrustStrip />
        <WhySection />
        <ProcessSection />
        <UseCases onOpenProject={onOpenProject} onEnquire={onEnquire} />
        <section className="sheet">
            <CaseStudies onOpenProject={onOpenProject} />
            <Services onEnquire={onEnquire} />
        </section>
        <Pricing onEnquire={onEnquire} />
        <section className="sheet">
            <About />
            <Faq />
            <BlogTeaser />
            <Contact preselected={preselected} />
        </section>
    </main>
);

function App() {
    const [project, setProject] = useState(null);
    const [resumeOpen, setResumeOpen] = useState(false);
    const [preselected, setPreselected] = useState('');

    useEffect(() => startSmoothScroll(), []);

    const enquire = useCallback((service) => {
        setPreselected(service);
        scrollToHash('#contact');
    }, []);

    return (
        <Router>
            <ScrollManager />
            <DeferredStage />
            <div className="site">
                <WhatsAppButton />
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={<HomePage onOpenProject={setProject} onEnquire={enquire} preselected={preselected} />}
                    />
                    <Route path="/blog" element={<Suspense fallback={<main className="min-h-screen" />}><Blog /></Suspense>} />
                    <Route path="/blog/:slug" element={<Suspense fallback={<main className="min-h-screen" />}><BlogPost /></Suspense>} />
                </Routes>
                <Footer onOpenResume={() => setResumeOpen(true)} />
            </div>

            <ProjectOverlay project={project} onClose={() => setProject(null)} onOpen={setProject} onEnquire={enquire} />
            <ResumeOverlay open={resumeOpen} onClose={() => setResumeOpen(false)} />
        </Router>
    );
}

export default App;
