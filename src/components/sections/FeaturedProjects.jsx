import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';

const FeaturedProjects = () => {
    const featured = projects.slice(0, 3);

    return (
        <section id="featured" className="shell section-y">
            {/* Asymmetric section head */}
            <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end lg:mb-24">
                <div className="max-w-2xl space-y-4">
                    <span className="eyebrow block">Selected Works</span>
                    <h2 className="headline text-[44px] leading-none lg:text-[72px]">
                        Systems that <br />
                        <span className="font-light italic text-outline">ship</span>
                    </h2>
                </div>

                <Link
                    to="/projects"
                    className="group inline-flex items-center gap-2 font-sans text-[13px] font-semibold uppercase tracking-[0.2em] text-muted transition-colors hover:text-primary"
                >
                    View Complete Archive
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>

            {/* Offset editorial grid, mirroring the reference layout */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
                <ProjectCard project={featured[0]} index={0} />
                <ProjectCard project={featured[1]} index={1} className="md:mt-20 lg:mt-28" />
                <ProjectCard project={featured[2]} index={2} className="md:-mt-20 lg:-mt-28" />
            </div>
        </section>
    );
};

export default FeaturedProjects;
