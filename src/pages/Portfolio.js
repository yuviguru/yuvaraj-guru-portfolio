import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTitle from '../components/PageTitle';
import PageLayout from '../components/PageLayout';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import FadeIn from '../components/motion/FadeIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faReact, faVuejs, faNodeJs, faPhp, faLaravel } from '@fortawesome/free-brands-svg-icons';

const props = {
    title: "My",
    highlightTitle: "Portfolio",
    bgTitle: "works"
}

// Generate a deterministic gradient from project title (cached)
const gradientCache = {};
const generateGradient = (title) => {
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

// Professional projects (anonymized for NDA compliance)
const professionalProjects = [
    {
        id: 1,
        title: "European Loyalty Program Expansion",
        category: "Enterprise",
        period: "2024-Present",
        company: "Global Technology Consulting",
        description: "Leading loyalty program expansion across European countries for a global clothing retailer. Architecting scalable solutions to handle multi-country customer engagement and reward systems.",
        technologies: ["Vue 3", "Node.js", "GraphQL", "Harness", "Microservices"],
        achievements: [
            "Successfully expanding loyalty program to multiple European markets",
            "Architecting scalable multi-country customer engagement solutions",
            "Leading technical implementation for global clothing retailer",
        ],
        type: "professional",
        industry: "E-commerce",
        role: "Lead Software Engineer"
    },
    {
        id: 2,
        title: "Hackathon Management Platform",
        category: "Products",
        period: "2021-2024",
        company: "Software Corporation",
        description: "Led architectural discussions and development of comprehensive hackathon platform enabling users to create, conduct, and manage hackathons effortlessly with integrated authentication and theming.",
        technologies: ["React", "Redux", "Keycloak", "GraphQL", "CSS Variables"],
        achievements: [
            "Led complete architectural design and implementation",
            "Integrated Keycloak authentication with GraphQL for secure access",
            "Implemented dynamic theme customization using CSS variables",
        ],
        type: "professional",
        industry: "Platform",
        role: "Lead Software Engineer"
    },
    {
        id: 3,
        title: "Advanced E-commerce Search & Filtering",
        category: "Enterprise",
        period: "2021-2024",
        company: "Software Corporation",
        description: "Transformed single-facet product search into intelligent multi-facet filtering system without backend changes. Implemented product comparison and advanced caching strategies for high-traffic retail application.",
        technologies: ["React", "Redis", "Search Optimization", "Caching Strategy"],
        achievements: [
            "Reduced server requests by 20% through intelligent filtering conversion",
            "Implemented multi-facet search without any backend modifications",
            "Designed Redis caching strategy handling thousands of requests per second",
        ],
        type: "professional",
        industry: "E-commerce",
        role: "Lead Software Engineer"
    },
    {
        id: 4,
        title: "Quote & Returns Management System",
        category: "Enterprise",
        period: "2021-2024",
        company: "Software Corporation",
        description: "Developed comprehensive quote and return features for retail application, streamlining bulk order requests and product returns with seamless integration into existing e-commerce ecosystem.",
        technologies: ["React", "API Integration", "Database Design", "Workflow Management"],
        achievements: [
            "Streamlined bulk order quote request process",
            "Simplified product return workflow for customers",
            "Reduced manual processing time for customer service teams",
        ],
        type: "professional",
        industry: "E-commerce",
        role: "Lead Software Engineer"
    },
    {
        id: 5,
        title: "Legacy Flash Application Modernization",
        category: "Architecture",
        period: "2020-2021",
        company: "Digital Solutions",
        description: "Created innovative Electron wrapper solution to extend life of 30+ business-critical Flash applications during Adobe discontinuation, while developing Vue.js replacements and micro-frontend architecture.",
        technologies: ["Electron", "Vue.js", "Single SPA", "Micro Frontends", "VUEX"],
        achievements: [
            "Saved 30+ critical business applications from obsolescence",
            "Integrated micro frontends using Single SPA for component reusability",
            "Enabled seamless transition to modern technology stack",
        ],
        type: "professional",
        industry: "Enterprise",
        role: "Associate - Projects"
    },
    {
        id: 6,
        title: "Pandemic Digital Communication Platform",
        category: "Products",
        period: "2020-2021",
        company: "Digital Solutions",
        description: "Automated digital postcard creation for insurance company during pandemic, enabling efficient customer communication when traditional methods were limited.",
        technologies: ["Vue.js", "Automation", "Digital Asset Creation", "API Integration"],
        achievements: [
            "Automated customer communication during critical pandemic period",
            "Reduced manual design and creation time by 80%",
            "Delivered solution when traditional communication methods were restricted",
        ],
        type: "professional",
        industry: "Insurance",
        role: "Associate - Projects"
    },
    {
        id: 7,
        title: "Resort Interactive Booking Platform",
        category: "Products",
        period: "2018-2019",
        company: "Technology Solutions",
        description: "Developed intelligent resort management system with SVG-based interactive mapping, room suggestion algorithms, and coordinate-based booking for enhanced guest experience.",
        technologies: ["Node.js", "Vue.js", "SVG Editor", "Geolocation", "Algorithm Design"],
        achievements: [
            "Created intelligent room suggestion service using Node.js",
            "Developed SVG editor integration for interactive resort mapping",
            "Implemented coordinate-based room booking system",
        ],
        type: "professional",
        industry: "Hospitality",
        role: "Software Development Engineer"
    },
    {
        id: 8,
        title: "Healthcare Management Dashboard",
        category: "Products",
        period: "2016-2018",
        company: "Software Solutions",
        description: "Built comprehensive healthcare institute management system with interactive dashboard for appointments, case files, and analytics. Implemented ERP integration and mobile notifications.",
        technologies: ["PHP", "Laravel", "HTML/CSS", "QAD ERP", "Firebase"],
        achievements: [
            "Built interactive dashboard for healthcare institute management",
            "Integrated QAD ERP system using Laravel queues for data synchronization",
            "Added Firebase push notifications for mobile employee management",
        ],
        type: "professional",
        industry: "Healthcare",
        role: "Software Development Engineer"
    },
    {
        id: 9,
        title: "Multi-Business Website Modernization",
        category: "Architecture",
        period: "2016-2018",
        company: "Software Solutions",
        description: "Revamped websites for 10+ businesses to align with global platforms and modern frameworks, improving their digital presence and user experience.",
        technologies: ["Modern Frameworks", "Responsive Design", "Global Platform Integration"],
        achievements: [
            "Successfully modernized 10+ business websites",
            "Aligned client websites with their global platform standards",
            "Implemented modern frameworks for improved performance",
        ],
        type: "professional",
        industry: "Web Development",
        role: "Software Development Engineer"
    }
];

// Personal/Side projects
const personalProjects = [
    {
        id: 10,
        title: "AI-Enhanced Portfolio Website",
        category: "Personal",
        period: "2024",
        description: "Modern, responsive portfolio website built with React and enhanced with AI-powered development workflows. Features design system showcase, smooth animations, and end-to-end product engineering.",
        technologies: ["React", "Tailwind CSS", "Framer Motion", "Design Systems"],
        achievements: [
            "Leveraged AI tools for 40% faster development",
            "Built design system showcase with live component demos",
            "Implemented smooth page transitions and micro-interactions"
        ],
        type: "personal",
        githubLink: "https://github.com/yuviguru/yuvaraj-guru-portfolio",
        liveLink: "https://yuvarajguru.dev",
        role: "Frontend Architect & Product Engineer"
    }
];

// Combine all projects
const allProjects = [...professionalProjects, ...personalProjects];

// Technology icons mapping
const techIcons = {
    "React": faReact,
    "Vue.js": faVuejs,
    "Vue 3": faVuejs,
    "Node.js": faNodeJs,
    "PHP": faPhp,
    "Laravel": faLaravel,
};

// Consolidated categories (reduced from 11 to 5)
const categories = [
    "All",
    "Enterprise",
    "Products",
    "Architecture",
    "Personal"
];

const ProjectCard = React.memo(({ project, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="group"
        >
            <div className="h-full bg-surface rounded-xl overflow-hidden border border-borderLight hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                {/* Gradient Thumbnail */}
                <div
                    className="h-32 relative overflow-hidden"
                    style={{ background: generateGradient(project.title) }}
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white/20 text-6xl font-heading font-bold select-none">
                            {project.title.charAt(0)}
                        </span>
                    </div>
                    {/* Period badge */}
                    <div className="absolute top-3 right-3">
                        <span className="px-3 py-1 bg-black/30 backdrop-blur-sm text-white text-xs rounded-full font-mono">
                            {project.period}
                        </span>
                    </div>
                    {/* Links */}
                    <div className="absolute top-3 left-3 flex gap-2">
                        {project.githubLink && (
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                                className="w-8 h-8 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                                <FontAwesomeIcon icon={faGithub} className="text-white text-sm" />
                            </a>
                        )}
                        {project.liveLink && (
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                                className="w-8 h-8 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                                <FontAwesomeIcon icon={faExternalLinkAlt} className="text-white text-sm" />
                            </a>
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className="p-5">
                    {/* Title & Category */}
                    <div className="mb-3">
                        <div className="flex items-start justify-between gap-2 mb-2">
                            <h3 className="text-lg font-heading font-bold text-typography leading-tight group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-0.5 bg-primary/15 text-primary text-xs rounded-full font-medium">
                                {project.category}
                            </span>
                            {project.industry && (
                                <span className="px-2 py-0.5 bg-accent/15 text-accent text-xs rounded-full font-medium">
                                    {project.industry}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Role & Company */}
                    {project.company && (
                        <p className="text-sm text-typography-muted mb-3">
                            <span className="font-medium text-typography">{project.role}</span>
                            <span className="mx-1">at</span>
                            {project.company}
                        </p>
                    )}

                    {/* Description */}
                    <p className="text-sm text-typography opacity-80 mb-4 leading-relaxed line-clamp-3">
                        {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.slice(0, 5).map((tech, idx) => (
                            <span key={idx} className="inline-flex items-center gap-1 px-2 py-0.5 bg-surface-hover rounded-md text-xs text-typography font-mono">
                                {techIcons[tech] && <FontAwesomeIcon icon={techIcons[tech]} className="text-primary text-[10px]" />}
                                {tech}
                            </span>
                        ))}
                        {project.technologies.length > 5 && (
                            <span className="px-2 py-0.5 text-xs text-typography-muted">
                                +{project.technologies.length - 5} more
                            </span>
                        )}
                    </div>

                    {/* Expandable Achievements */}
                    <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                        >
                            <div className="pt-3 border-t border-borderLight">
                                <h4 className="text-xs font-semibold text-typography-muted mb-2 uppercase tracking-wider">Key Impact</h4>
                                <ul className="space-y-1.5">
                                    {project.achievements.map((achievement, idx) => (
                                        <li key={idx} className="text-sm text-typography flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    )}
                    </AnimatePresence>

                    {/* Toggle button */}
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mt-3 inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary-light transition-colors font-medium"
                    >
                        {isExpanded ? 'Show less' : 'View achievements'}
                        <motion.span
                            animate={{ rotate: isExpanded ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
                        </motion.span>
                    </button>
                </div>
            </div>
        </motion.div>
    );
});

export default function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProjects = React.useMemo(() => {
        if (selectedCategory === "All") {
            return allProjects;
        }
        return allProjects.filter(project => project.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <PageTransition>
        <PageLayout containerSize="wide">
            <SEO
                title="Portfolio - Yuvaraj Guru | Frontend Architect & Product Engineer"
                description="Explore Yuvaraj Guru's portfolio featuring 12+ professional projects in e-commerce, platform development, performance optimization, and more. 10+ years of expertise in React, Vue.js, Node.js."
                keywords="Yuvaraj Guru Portfolio, Professional Projects, React Projects, Vue.js Applications, E-commerce Development, Platform Development, Software Engineer Portfolio"
                url="https://yuvarajguru.dev/portfolio"
                type="website"
            />
            <PageTitle {...props} />

            <div className="pb-20">
                {/* Introduction */}
                <FadeIn>
                <div className="text-center mb-12">
                    <p className="text-lg text-typography max-w-3xl mx-auto leading-relaxed opacity-80">
                        A showcase of my professional work spanning 10+ years across diverse industries.
                        Due to NDA agreements, specific client details are anonymized while preserving
                        the technical depth and real-world impact.
                    </p>
                </div>
                </FadeIn>

                {/* Category Filter */}
                <FadeIn delay={0.1}>
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedCategory === category
                                ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                : 'bg-surface text-typography border border-borderLight hover:border-primary/40'
                                }`}
                        >
                            {category}
                            {selectedCategory === category && (
                                <span className="ml-1.5 text-white/70">
                                    ({category === "All" ? allProjects.length : filteredProjects.length})
                                </span>
                            )}
                        </motion.button>
                    ))}
                </div>
                </FadeIn>

                {/* Stats Row */}
                <FadeIn delay={0.15}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
                    {[
                        { label: "Projects", value: `${professionalProjects.length + 3}+` },
                        { label: "Industries", value: "8+" },
                        { label: "Technologies", value: "15+" },
                        { label: "Years", value: "10+" },
                    ].map((stat, i) => (
                        <div key={i} className="text-center p-3 bg-surface rounded-xl border border-borderLight">
                            <div className="text-xl font-heading font-bold text-primary">{stat.value}</div>
                            <div className="text-xs text-typography-muted uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
                </FadeIn>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <AnimatePresence mode="wait">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                    </AnimatePresence>
                </div>

                {/* No Results */}
                <AnimatePresence>
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-center py-12"
                    >
                        <p className="text-typography text-lg mb-4">No projects found in this category.</p>
                        <button
                            onClick={() => setSelectedCategory("All")}
                            className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
                        >
                            Show All Projects
                        </button>
                    </motion.div>
                )}
                </AnimatePresence>

                {/* NDA Note */}
                <FadeIn delay={0.2}>
                <div className="mt-12 p-6 bg-surface rounded-xl border border-borderLight">
                    <h3 className="text-base font-heading font-semibold text-typography mb-2">About These Projects</h3>
                    <p className="text-sm text-typography opacity-70 leading-relaxed">
                        Professional projects are anonymized to respect Non-Disclosure Agreements.
                        Technical challenges, solutions, and achievements are accurate representations of real work.
                        For detailed technical discussions, feel free to <a href="/contact" className="text-primary hover:text-primary-light transition-colors underline">get in touch</a>.
                    </p>
                </div>
                </FadeIn>
            </div>
        </PageLayout>
        </PageTransition>
    );
}
