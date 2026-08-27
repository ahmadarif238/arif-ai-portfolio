import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ProjectIcon from './ProjectIcons';
import { cn } from '../../lib/utils';

/**
 * Editorial work card. No photography in this portfolio, so the "hero image"
 * is a tonal panel with a blueprint grid and the project's own glyph — it
 * scales on hover the way the reference cards' imagery does.
 */
const ProjectCard = ({ project, className, height = 'h-[460px] lg:h-[560px]', index = 0 }) => {
    // The type chip and the lead tech are often the same word — don't repeat it.
    const tags = [project.type, ...project.techStack]
        .filter((t, i, all) => all.indexOf(t) === i)
        .slice(0, 2);

    return (
        <motion.article
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.25, 1, 0.5, 1] }}
            className={cn('group relative', className)}
        >
            <Link
                to={`/projects/${project.id}`}
                className={cn(
                    'relative block w-full overflow-hidden border border-border bg-elev-1',
                    'transition-colors duration-300 hover:border-primary/45',
                    height
                )}
            >
                {/* Tonal "artwork" */}
                <div className="absolute inset-0 grid-lines opacity-40 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.09] via-transparent to-transparent" />

                {/* Glyph lives in the upper half so the text block below stays clean */}
                <div className="absolute inset-x-0 top-0 flex h-[52%] items-center justify-center">
                    <ProjectIcon
                        projectId={project.id}
                        className="h-28 w-28 text-primary/70 transition-all duration-700 group-hover:scale-110 group-hover:text-primary lg:h-36 lg:w-36"
                    />
                </div>

                {/* Primary hairline on hover, per the design system's card spec */}
                <span className="absolute inset-x-0 top-0 z-20 h-px scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />

                {/* Legibility scrim */}
                <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-background via-background/90 to-transparent p-7 lg:p-10">
                    <div className="mb-4 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span key={tag} className="chip">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h3 className="headline mb-2 text-[26px] transition-colors duration-300 group-hover:text-primary lg:text-[38px]">
                        {project.title}
                    </h3>

                    <p className="max-w-md text-[15px] leading-relaxed text-muted line-clamp-3">
                        {project.tagline}. {project.description.split('. ')[0]}.
                    </p>

                    {project.metrics?.length > 0 && (
                        <div className="mt-6 flex flex-wrap gap-6 border-t border-border pt-5">
                            {project.metrics.slice(0, 3).map((m) => (
                                <div key={m.label} className="flex flex-col">
                                    <span className="font-display text-[22px] font-semibold text-primary">
                                        {m.value}
                                    </span>
                                    <span className="mt-0.5 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                                        {m.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Corner affordance */}
                <span className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center border border-border bg-background/60 text-muted backdrop-blur transition-all duration-300 group-hover:border-primary group-hover:text-primary">
                    <ArrowUpRight className="h-4 w-4" />
                </span>
            </Link>
        </motion.article>
    );
};

export default ProjectCard;
