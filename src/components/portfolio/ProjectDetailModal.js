import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faExternalLinkAlt,
    faLock,
    faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { generateGradient, techIcons } from './ProjectCard';
import { DEMO_REGISTRY } from './MiniDemos';

// ─── Status badge (reused from ProjectCard) ─────────────────────────────────
function StatusBadge({ status }) {
    if (status === 'live') return null;
    return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-accent/15 text-accent text-xs rounded-full font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse inline-block" />
            In Progress
        </span>
    );
}

// ─── Main Modal ─────────────────────────────────────────────────────────────
export default function ProjectDetailModal({ project, onClose }) {
    const DemoComponent = DEMO_REGISTRY[project.demoComponentKey] || null;

    // Lock body scroll & handle Escape
    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const handleKey = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKey);

        return () => {
            document.body.style.overflow = prev;
            window.removeEventListener('keydown', handleKey);
        };
    }, [onClose]);

    return (
        <>
            {/* ── Backdrop ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* ── Modal container (centered, scrollable) ── */}
            <div
                className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto py-8 px-4 sm:py-12"
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                    className="relative w-full max-w-2xl bg-surface rounded-2xl border border-borderLight shadow-2xl shadow-primary/10 overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* ── Close button ── */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-20 w-8 h-8 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/60 transition-colors"
                    >
                        <FontAwesomeIcon icon={faTimes} className="text-white text-sm" />
                    </button>

                    {/* ── Gradient header with demo ── */}
                    <div
                        className="relative h-52 sm:h-60 overflow-hidden"
                        style={{ background: generateGradient(project.title) }}
                    >
                        {/* Mini-demo */}
                        {DemoComponent && (
                            <div className="absolute inset-x-3 top-3 bottom-10 rounded-xl bg-black/30 backdrop-blur-sm overflow-hidden flex items-center justify-center px-3">
                                <DemoComponent />
                            </div>
                        )}

                        {/* Period badge */}
                        <div className="absolute top-4 left-4 z-10">
                            <span className="px-3 py-1 bg-black/30 backdrop-blur-sm text-white text-xs rounded-full font-mono">
                                {project.period}
                            </span>
                        </div>

                        {/* Action icons */}
                        <div className="absolute top-4 right-14 flex gap-2 z-10">
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
                        </div>

                        {/* NDA strip */}
                        {project.ndaProtected && (
                            <div className="absolute bottom-0 inset-x-0 py-1.5 px-4 bg-black/50 backdrop-blur-sm flex items-center gap-1.5 z-10">
                                <FontAwesomeIcon icon={faLock} className="text-[9px] text-white/40" />
                                <span className="text-[10px] text-white/40 font-medium">NDA Protected</span>
                            </div>
                        )}
                    </div>

                    {/* ── Body ── */}
                    <div className="p-6 sm:p-8 space-y-5">
                        {/* Title & badges */}
                        <div>
                            <h2 className="text-xl sm:text-2xl font-heading font-bold text-typography leading-snug mb-3">
                                {project.title}
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2.5 py-1 bg-primary/15 text-primary text-xs rounded-full font-medium">
                                    {project.category}
                                </span>
                                {project.industry && (
                                    <span className="px-2.5 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium">
                                        {project.industry}
                                    </span>
                                )}
                                <StatusBadge status={project.status} />
                            </div>
                        </div>

                        {/* Role & Company */}
                        {project.company && (
                            <p className="text-sm text-typography-muted">
                                <span className="font-medium text-typography">{project.role}</span>
                                <span className="mx-1.5">at</span>
                                {project.company}
                            </p>
                        )}
                        {!project.company && project.role && (
                            <p className="text-sm text-typography-muted">
                                <span className="font-medium text-typography">{project.role}</span>
                            </p>
                        )}

                        {/* Impact headline */}
                        {project.impactHeadline && (
                            <p className="text-sm font-semibold text-accent leading-snug">
                                {project.impactHeadline}
                            </p>
                        )}

                        {/* Full description */}
                        <div>
                            <h3 className="text-xs font-semibold text-typography-muted uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                <span className="w-1 h-3 rounded-full bg-primary inline-block" />
                                About
                            </h3>
                            <p className="text-sm text-typography opacity-80 leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        {/* All technologies */}
                        <div>
                            <h3 className="text-xs font-semibold text-typography-muted uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                <span className="w-1 h-3 rounded-full bg-primary inline-block" />
                                Technologies
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-hover rounded-lg text-xs text-typography font-mono border border-borderLight"
                                    >
                                        {techIcons[tech] && (
                                            <FontAwesomeIcon icon={techIcons[tech]} className="text-primary text-xs" />
                                        )}
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* All achievements */}
                        <div>
                            <h3 className="text-xs font-semibold text-typography-muted uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                <span className="w-1 h-3 rounded-full bg-primary inline-block" />
                                Key Achievements
                            </h3>
                            <ul className="space-y-2">
                                {project.achievements.map((achievement, idx) => (
                                    <li key={idx} className="text-sm text-typography flex items-start gap-2 leading-snug">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                                        {achievement}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Footer actions */}
                        <div className="flex flex-wrap gap-3 pt-3 border-t border-borderLight">
                            {project.liveLink && (
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary-dark transition-colors"
                                >
                                    <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                                    View Live
                                </a>
                            )}
                            {project.githubLink && (
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-hover text-typography border border-borderLight rounded-xl text-sm font-medium hover:border-primary/40 transition-colors"
                                >
                                    <FontAwesomeIcon icon={faGithub} className="text-sm" />
                                    View Code
                                </a>
                            )}
                            <button
                                onClick={onClose}
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-hover text-typography-muted border border-borderLight rounded-xl text-sm font-medium hover:border-primary/40 transition-colors ml-auto"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
}
