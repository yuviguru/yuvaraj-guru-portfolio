import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faExternalLinkAlt,
    faLock,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import {
    faGithub,
    faReact,
    faVuejs,
    faNodeJs,
    faPhp,
    faLaravel,
    faPython,
} from '@fortawesome/free-brands-svg-icons';
import { DEMO_REGISTRY } from './MiniDemos';

// ─── Gradient cache ────────────────────────────────────────────────────────
export const gradientCache = {};
export const generateGradient = (title) => {
    if (gradientCache[title]) return gradientCache[title];
    let hash = 0;
    for (let i = 0; i < title.length; i++) {
        hash = title.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue1 = Math.abs(hash % 360);
    const hue2 = (hue1 + 40 + Math.abs((hash >> 8) % 60)) % 360;
    const result = `linear-gradient(135deg, hsl(${hue1}, 60%, 25%) 0%, hsl(${hue2}, 70%, 15%) 100%)`;
    gradientCache[title] = result;
    return result;
};

// ─── Tech icons ────────────────────────────────────────────────────────────
export const techIcons = {
    React:     faReact,
    'Vue.js':  faVuejs,
    'Vue 3':   faVuejs,
    'Node.js': faNodeJs,
    PHP:       faPhp,
    Laravel:   faLaravel,
    Python:    faPython,
};

// ─── Status badge ──────────────────────────────────────────────────────────
function StatusBadge({ status }) {
    if (status === 'live') return null;
    return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-accent/15 text-accent text-[10px] rounded-full font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse inline-block" />
            In Progress
        </span>
    );
}

// ─── Card header demo — always-visible, no tab required ───────────────────
function CardHeaderDemo({ project, DemoComponent }) {
    const { demoType, liveLink, githubLink, technologies } = project;

    // Corporate / NDA concept demo
    if (demoType === 'concept') {
        return (
            <div className="absolute inset-x-2 top-2 bottom-7 rounded-xl bg-black/30 backdrop-blur-sm overflow-hidden flex items-center justify-center px-2">
                {DemoComponent
                    ? <DemoComponent />
                    : <p className="text-xs text-white/40 text-center">Demo coming soon</p>
                }
            </div>
        );
    }

    // Personal / Open Source — mini demo if available, otherwise live CTA
    if (demoType === 'live') {
        if (DemoComponent) {
            return (
                <div className="absolute inset-x-2 top-2 bottom-7 rounded-xl bg-black/30 backdrop-blur-sm overflow-hidden flex items-center justify-center px-2">
                    <DemoComponent />
                </div>
            );
        }

        const href = liveLink || githubLink || null;
        const icon = liveLink ? faExternalLinkAlt : faGithub;
        const label = liveLink ? 'View Live' : githubLink ? 'View Code' : 'Coming Soon';

        return (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                {/* Decorative grid */}
                <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage:
                            'repeating-linear-gradient(0deg, rgba(255,255,255,0.5) 0px, transparent 1px, transparent 24px),' +
                            'repeating-linear-gradient(90deg, rgba(255,255,255,0.5) 0px, transparent 1px, transparent 24px)',
                    }}
                />
                {/* Primary CTA */}
                {href ? (
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 inline-flex items-center gap-2 px-5 py-2.5 bg-white/90 text-gray-900 rounded-xl text-sm font-semibold hover:bg-white transition-colors shadow-lg"
                    >
                        <FontAwesomeIcon icon={icon} className="text-xs" />
                        {label}
                    </a>
                ) : (
                    <span className="relative z-10 inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 text-white/70 rounded-xl text-sm font-medium">
                        {label}
                    </span>
                )}
                {/* Tech micro-pills */}
                <div className="relative z-10 flex gap-1.5 flex-wrap justify-center px-4">
                    {technologies.slice(0, 3).map((tech, i) => (
                        <span
                            key={i}
                            className="text-[9px] text-white/60 font-mono bg-white/10 px-2 py-0.5 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        );
    }

    // In Progress — mini demo if available, otherwise spinner + progress bar
    if (demoType === 'wip') {
        if (DemoComponent) {
            return (
                <div className="absolute inset-x-2 top-2 bottom-7 rounded-xl bg-black/30 backdrop-blur-sm overflow-hidden flex items-center justify-center px-2">
                    <DemoComponent />
                </div>
            );
        }

        return (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                >
                    <FontAwesomeIcon icon={faSpinner} className="text-white text-2xl" />
                </motion.div>
                <p className="text-xs text-white/70">In active development</p>
                <div className="w-3/4 bg-white/20 rounded-full h-1.5 overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '45%' }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                        className="h-full bg-white/80 rounded-full"
                    />
                </div>
                <p className="text-[9px] text-white/40">~45% complete</p>
            </div>
        );
    }

    return null;
}

// ─── Hover achievements overlay ────────────────────────────────────────────
function HoverAchievementsOverlay({ project }) {
    return (
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-surface/[0.97] backdrop-blur-md border-t border-primary/20 p-5 z-20">
            <h4 className="text-xs font-semibold text-typography-muted uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <span className="w-1 h-3 rounded-full bg-primary inline-block" />
                Key Achievements
            </h4>
            <ul className="space-y-2">
                {project.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-sm text-typography flex items-start gap-2 leading-snug">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        {achievement}
                    </li>
                ))}
            </ul>
        </div>
    );
}

// ─── Main ProjectCard ──────────────────────────────────────────────────────
const ProjectCard = React.memo(function ProjectCard({ project, index, onProjectClick }) {
    const DemoComponent = DEMO_REGISTRY[project.demoComponentKey] || null;
    // Concept demos need more vertical space for Framer Motion animations
    const headerHeight = project.demoType === 'concept' ? 'h-44' : 'h-36';

    const handleCardClick = (e) => {
        // Don't open modal when clicking links
        if (e.target.closest('a')) return;
        onProjectClick?.(project);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.45, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group cursor-pointer"
            onClick={handleCardClick}
        >
            <div className="relative h-full bg-surface rounded-xl overflow-hidden border border-borderLight hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 flex flex-col">

                {/* ── Gradient header — demo lives here ── */}
                <div
                    className={`${headerHeight} relative overflow-hidden flex-shrink-0`}
                    style={{ background: generateGradient(project.title) }}
                >
                    {/* Always-visible demo (concept / live CTA / wip spinner) */}
                    <CardHeaderDemo project={project} DemoComponent={DemoComponent} />

                    {/* Period badge */}
                    <div className="absolute top-3 right-3 z-10">
                        <span className="px-3 py-1 bg-black/30 backdrop-blur-sm text-white text-xs rounded-full font-mono">
                            {project.period}
                        </span>
                    </div>

                    {/* Quick-action icons (github / live / lock) */}
                    <div className="absolute top-3 left-3 flex gap-2 z-10">
                        {project.githubLink && (
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                            >
                                <FontAwesomeIcon icon={faGithub} className="text-white text-sm" />
                            </a>
                        )}
                        {project.liveLink && (
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                            >
                                <FontAwesomeIcon icon={faExternalLinkAlt} className="text-white text-sm" />
                            </a>
                        )}
                        {project.ndaProtected && !project.githubLink && !project.liveLink && (
                            <span className="w-8 h-8 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                                <FontAwesomeIcon icon={faLock} className="text-white/60 text-xs" />
                            </span>
                        )}
                    </div>

                    {/* NDA strip — bottom edge of header */}
                    {project.ndaProtected && (
                        <div className="absolute bottom-0 inset-x-0 py-1 px-3 bg-black/50 backdrop-blur-sm flex items-center gap-1.5 z-10">
                            <FontAwesomeIcon icon={faLock} className="text-[8px] text-white/40" />
                            <span className="text-[9px] text-white/40 font-medium">NDA Protected</span>
                        </div>
                    )}
                </div>

                {/* ── Card body ── */}
                <div className="p-5 flex flex-col flex-1">
                    {/* Title & badges */}
                    <div className="mb-3">
                        <h3 className="text-base font-heading font-bold text-typography leading-snug group-hover:text-primary transition-colors mb-2">
                            {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-1.5">
                            <span className="px-2 py-0.5 bg-primary/15 text-primary text-xs rounded-full font-medium">
                                {project.category}
                            </span>
                            {project.industry && (
                                <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs rounded-full font-medium">
                                    {project.industry}
                                </span>
                            )}
                            <StatusBadge status={project.status} />
                        </div>
                    </div>

                    {/* Role & Company */}
                    {project.company && (
                        <p className="text-xs text-typography-muted mb-2">
                            <span className="font-medium text-typography">{project.role}</span>
                            <span className="mx-1">at</span>
                            {project.company}
                        </p>
                    )}

                    {/* Impact headline */}
                    {project.impactHeadline && (
                        <p className="text-xs font-semibold text-accent mb-2 leading-snug">
                            {project.impactHeadline}
                        </p>
                    )}

                    {/* Description */}
                    <p className="text-sm text-typography opacity-75 mb-3 leading-relaxed line-clamp-2">
                        {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.technologies.slice(0, 4).map((tech, idx) => (
                            <span
                                key={idx}
                                className="inline-flex items-center gap-1 px-2 py-0.5 bg-surface-hover rounded-md text-xs text-typography font-mono"
                            >
                                {techIcons[tech] && (
                                    <FontAwesomeIcon icon={techIcons[tech]} className="text-primary text-[10px]" />
                                )}
                                {tech}
                            </span>
                        ))}
                        {project.technologies.length > 4 && (
                            <span className="px-2 py-0.5 text-xs text-typography-muted">
                                +{project.technologies.length - 4} more
                            </span>
                        )}
                    </div>

                    {/* Hover hint — pushes to bottom */}
                    <div className="mt-auto pt-3 border-t border-borderLight">
                        <p className="text-[10px] text-typography-muted flex items-center gap-1 select-none">
                            <span>Click for full details</span>
                            <span className="text-[8px]">→</span>
                        </p>
                    </div>
                </div>

                {/* Achievements overlay — slides up on group-hover */}
                <HoverAchievementsOverlay project={project} />
            </div>
        </motion.div>
    );
});

export default ProjectCard;
