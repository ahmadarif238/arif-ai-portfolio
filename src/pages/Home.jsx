import React from 'react';
import Hero from '../components/sections/Hero';
import Stats from '../components/sections/Stats';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import SkillsPreview from '../components/sections/SkillsPreview';
import Workflow from '../components/sections/Workflow';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
    return (
        <div className="flex flex-col bg-[#0B0F19]">
            <Hero />

            {/* Transparent sections to show global gradient */}
            <section className="bg-transparent py-8 border-y border-white/5">
                <Stats />
            </section>

            <section className="bg-transparent py-24">
                <FeaturedProjects />
            </section>

            <section className="bg-transparent py-24 border-y border-white/5 relative">
                {/* Background Glow for Workflow */}
                <div className="absolute inset-0 bg-purple-900/10 blur-[100px] -z-10" />
                <Workflow />
            </section>

            <section className="bg-transparent py-24">
                <SkillsPreview />
            </section>

            {/* High Contrast CTA */}
            <section className="py-24 relative overflow-hidden text-center border-t border-white/10">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0f0728] to-[#030014] -z-10" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-purple-500/5 blur-[100px] -z-10" />

                <div className="container mx-auto px-6 max-w-4xl relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 font-display">
                        Ready to scale your vision?
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        I build systems that drive growth. Let's discuss how we can work together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="text-lg h-14 px-10 rounded-full shadow-xl shadow-purple-500/25 bg-purple-600 hover:bg-purple-700 transition-all" asChild>
                            <Link to="/contact">
                                Let's Talk <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg h-14 px-10 rounded-full border-white/10 hover:bg-white/5 backdrop-blur-sm" asChild>
                            <Link to="/projects">
                                View Projects
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
