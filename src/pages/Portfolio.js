import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';
import SEO from '../components/SEO';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faReact, faVuejs, faNodeJs, faPhp, faLaravel } from '@fortawesome/free-brands-svg-icons';

const props = {
    title: "My",
    highlightTitle: "Portfolio",
    bgTitle: "works"
}

// Professional projects (anonymized for NDA compliance)
const professionalProjects = [
    {
        id: 1,
        title: "European Loyalty Program Expansion",
        category: "E-commerce",
        period: "2024-Present",
        company: "Global Technology Consulting",
        description: "Leading loyalty program expansion across European countries for a global clothing retailer. Architecting scalable solutions to handle multi-country customer engagement and reward systems.",
        technologies: ["Vue 3", "Node.js", "GraphQL", "Harness", "Microservices"],
        achievements: [
            "Successfully expanding loyalty program to multiple European markets",
            "Architecting scalable multi-country customer engagement solutions",
            "Leading technical implementation for global clothing retailer",
            "Managing complex international compliance and localization requirements"
        ],
        type: "professional",
        industry: "E-commerce",
        teamSize: "8-12 developers",
        role: "Lead Software Engineer"
    },
    {
        id: 2,
        title: "Hackathon Management Platform",
        category: "Platform Development",
        period: "2021-2024",
        company: "Software Corporation",
        description: "Led architectural discussions and development of comprehensive hackathon platform enabling users to create, conduct, and manage hackathons effortlessly with integrated authentication and theming.",
        technologies: ["React", "Redux", "Keycloak", "GraphQL", "CSS Variables", "JavaScript"],
        achievements: [
            "Led complete architectural design and implementation",
            "Integrated Keycloak authentication with GraphQL for secure access",
            "Implemented dynamic theme customization using CSS variables",
            "Created comprehensive hackathon lifecycle management system",
            "Delivered platform enabling effortless hackathon creation and management"
        ],
        type: "professional",
        industry: "Platform",
        teamSize: "6-8 developers",
        role: "Lead Software Engineer"
    },
    {
        id: 3,
        title: "Advanced E-commerce Search & Filtering",
        category: "Performance Optimization",
        period: "2021-2024",
        company: "Software Corporation",
        description: "Transformed single-facet product search into intelligent multi-facet filtering system without backend changes. Implemented product comparison and advanced caching strategies for high-traffic retail application.",
        technologies: ["React", "Redis", "Search Optimization", "Caching Strategy"],
        achievements: [
            "Reduced server requests by 20% through intelligent filtering conversion",
            "Implemented multi-facet search without any backend modifications",
            "Built comprehensive product comparison functionality",
            "Designed Redis caching strategy handling thousands of requests per second",
            "Improved application response time during peak traffic periods",
            "Enhanced user experience with faster, more accurate search results"
        ],
        type: "professional",
        industry: "E-commerce",
        teamSize: "5-8 developers",
        role: "Lead Software Engineer"
    },
    {
        id: 4,
        title: "Quote & Returns Management System",
        category: "E-commerce Features",
        period: "2021-2024",
        company: "Software Corporation",
        description: "Developed comprehensive quote and return features for retail application, streamlining bulk order requests and product returns with seamless integration into existing e-commerce ecosystem.",
        technologies: ["React", "API Integration", "Database Design", "Workflow Management"],
        achievements: [
            "Streamlined bulk order quote request process",
            "Simplified product return workflow for customers",
            "Integrated seamlessly with existing order management system",
            "Reduced manual processing time for customer service teams",
            "Improved customer satisfaction through self-service capabilities"
        ],
        type: "professional",
        industry: "E-commerce",
        teamSize: "4-6 developers",
        role: "Lead Software Engineer"
    },
    {
        id: 5,
        title: "Legacy Flash Application Modernization",
        category: "Legacy Modernization",
        period: "2020-2021",
        company: "Digital Solutions",
        description: "Created innovative Electron wrapper solution to extend life of 30+ business-critical Flash applications during Adobe discontinuation, while developing Vue.js replacements and micro-frontend architecture.",
        technologies: ["Electron", "Vue.js", "Single SPA", "Micro Frontends", "VUEX"],
        achievements: [
            "Saved 30+ critical business applications from obsolescence",
            "Prevented business disruption during Adobe Flash discontinuation",
            "Integrated micro frontends using Single SPA for component reusability",
            "Improved developer experience through independent development workflows",
            "Implemented custom configuration service for multi-environment deployment",
            "Enabled seamless transition to modern technology stack"
        ],
        type: "professional",
        industry: "Enterprise",
        teamSize: "6-10 developers",
        role: "Associate - Projects"
    },
    {
        id: 6,
        title: "Pandemic Digital Communication Platform",
        category: "Process Automation",
        period: "2020-2021",
        company: "Digital Solutions",
        description: "Automated digital postcard creation for insurance company during pandemic, enabling efficient customer communication when traditional methods were limited.",
        technologies: ["Vue.js", "Automation", "Digital Asset Creation", "API Integration"],
        achievements: [
            "Automated customer communication during critical pandemic period",
            "Reduced manual design and creation time by 80%",
            "Enabled insurance company to maintain customer engagement",
            "Delivered solution when traditional communication methods were restricted",
            "Provided scalable digital communication infrastructure"
        ],
        type: "professional",
        industry: "Insurance",
        teamSize: "4-5 developers",
        role: "Associate - Projects"
    },
    {
        id: 7,
        title: "Resort Interactive Booking Platform",
        category: "Hospitality",
        period: "2018-2019",
        company: "Technology Solutions",
        description: "Developed intelligent resort management system with SVG-based interactive mapping, room suggestion algorithms, and coordinate-based booking for enhanced guest experience.",
        technologies: ["Node.js", "Vue.js", "SVG Editor", "Geolocation", "Algorithm Design"],
        achievements: [
            "Created intelligent room suggestion service using Node.js",
            "Developed SVG editor integration for interactive resort mapping",
            "Implemented coordinate-based room booking system",
            "Built algorithm prioritizing rooms closer to admin office",
            "Enabled customers to book rooms interactively using visual maps",
            "Conducted training workshops for entry-level developers"
        ],
        type: "professional",
        industry: "Hospitality",
        teamSize: "15-20 developers",
        role: "Software Development Engineer"
    },
    {
        id: 8,
        title: "Healthcare Management Dashboard",
        category: "Healthcare",
        period: "2016-2018",
        company: "Software Solutions",
        description: "Built comprehensive healthcare institute management system with interactive dashboard for appointments, case files, and analytics. Implemented ERP integration and mobile notifications.",
        technologies: ["PHP", "Laravel", "HTML/CSS", "QAD ERP", "Firebase", "Queue Management"],
        achievements: [
            "Built interactive dashboard for healthcare institute management",
            "Implemented appointment and case file management system",
            "Integrated QAD ERP system using Laravel queues for data synchronization",
            "Added Firebase push notifications for mobile employee management",
            "Provided valuable insights through comprehensive analytics",
            "Modernized healthcare administration workflows"
        ],
        type: "professional",
        industry: "Healthcare",
        teamSize: "3-5 developers",
        role: "Software Development Engineer"
    },
    {
        id: 9,
        title: "Multi-Business Website Modernization",
        category: "Web Development",
        period: "2016-2018",
        company: "Software Solutions",
        description: "Revamped websites for 10+ businesses to align with global platforms and modern frameworks, improving their digital presence and user experience.",
        technologies: ["Modern Frameworks", "Responsive Design", "Global Platform Integration"],
        achievements: [
            "Successfully modernized 10+ business websites",
            "Aligned client websites with their global platform standards",
            "Implemented modern frameworks for improved performance",
            "Enhanced user experience across diverse business verticals",
            "Delivered scalable and maintainable web solutions",
            "Improved businesses' digital presence and competitiveness"
        ],
        type: "professional",
        industry: "Web Development",
        teamSize: "2-4 developers",
        role: "Software Development Engineer"
    }
];

// Personal/Side projects (can show full details)
const personalProjects = [
    {
        id: 10, // Fixed: Changed from 7 to 10 to avoid conflict
        title: "AI-Enhanced Portfolio Website",
        category: "Personal",
        period: "2024",
        description: "Modern, responsive portfolio website built with React and enhanced with AI-powered development workflows. Features multi-language support and dark/light themes.",
        technologies: ["React", "Tailwind CSS", "GitHub Copilot", "Responsive Design"],
        achievements: [
            "Leveraged AI tools for 40% faster development",
            "Implemented modern design patterns",
            "Built with accessibility best practices"
        ],
        type: "personal",
        githubLink: "https://github.com/yuviguru/yuvaraj-guru-portfolio",
        liveLink: "https://yuvarajguru.dev",
        role: "Full Stack Developer"
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
    // Note: Add more icons as needed from FontAwesome
};

// Project categories for filtering - Updated to match exact project categories
const categories = [
    "All",
    "E-commerce",
    "Platform Development",
    "Performance Optimization",
    "E-commerce Features",
    "Legacy Modernization", // Fixed: Changed from "Modernization"
    "Process Automation",
    "Hospitality",
    "Healthcare",
    "Web Development",
    "Personal"
];

const ProjectCard = ({ project }) => {
    return (
        <div className="bg-bgLight rounded-lg p-6 mb-6 hover:transform hover:scale-105 transition-all duration-300 border border-borderLight">
            {/* Project Header */}
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-bold text-typography mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                        <span className="px-3 py-1 bg-primary text-white text-xs rounded-full">{project.category}</span>
                        <span className="px-3 py-1 bg-mutedText text-activeText text-xs rounded-full">{project.period}</span>
                        {project.industry && (
                            <span className="px-3 py-1 bg-borderLight text-typography text-xs rounded-full">{project.industry}</span>
                        )}
                    </div>
                </div>
                <div className="flex gap-2">
                    {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                            className="w-10 h-10 bg-mutedText rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                            <FontAwesomeIcon icon={faGithub} className="text-activeText" />
                        </a>
                    )}
                    {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                            className="w-10 h-10 bg-mutedText rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                            <FontAwesomeIcon icon={faExternalLinkAlt} className="text-activeText" />
                        </a>
                    )}
                </div>
            </div>

            {/* Company and Role */}
            {project.company && (
                <div className="mb-3 text-sm text-typography opacity-80">
                    <span className="font-semibold">{project.role}</span> at {project.company}
                    {project.teamSize && <span className="ml-2">• Team: {project.teamSize}</span>}
                </div>
            )}

            {/* Description */}
            <p className="text-typography mb-4 leading-relaxed">{project.description}</p>

            {/* Technologies */}
            <div className="mb-4">
                <h4 className="text-sm font-semibold text-typography mb-2 uppercase tracking-wide">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="flex items-center gap-1 px-3 py-1 bg-background border border-borderLight rounded-full text-sm text-typography">
                            {techIcons[tech] && <FontAwesomeIcon icon={techIcons[tech]} className="text-primary" />}
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Achievements */}
            <div>
                <h4 className="text-sm font-semibold text-typography mb-2 uppercase tracking-wide">Key Achievements</h4>
                <ul className="space-y-1">
                    {project.achievements.map((achievement, index) => (
                        <li key={index} className="text-sm text-typography flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Improved filtering logic with debugging
    const filteredProjects = React.useMemo(() => {
        if (selectedCategory === "All") {
            return allProjects;
        }

        const filtered = allProjects.filter(project => {
            // Exact match filtering
            return project.category === selectedCategory;
        });

        // Debug log to help identify issues
        console.log(`Filtering by: "${selectedCategory}"`);
        console.log(`Found ${filtered.length} projects`);
        console.log('Available categories in projects:', [...new Set(allProjects.map(p => p.category))]);

        return filtered;
    }, [selectedCategory]);

    return (
        <>
            <SEO
                title="Portfolio - Yuvaraj Guru's Professional Projects & Work Showcase"
                description="Explore Yuvaraj Guru's portfolio featuring 12+ professional projects in e-commerce, platform development, performance optimization, and more. 10+ years of expertise in React, Vue.js, Node.js."
                keywords="Yuvaraj Guru Portfolio, Professional Projects, React Projects, Vue.js Applications, E-commerce Development, Platform Development, Software Engineer Portfolio"
                url="https://yuvarajguru.dev/portfolio"
                type="website"
            />
            <PageTitle {...props} />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                {/* Introduction */}
                <div className="text-center mb-12">
                    <p className="text-lg text-typography max-w-4xl mx-auto leading-relaxed">
                        Here's a showcase of my professional work spanning 10 years across various industries.
                        Due to NDA agreements, specific client details are anonymized, but the technical challenges,
                        solutions, and achievements represent real-world impact.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedCategory === category
                                ? 'bg-primary text-white'
                                : 'bg-mutedText text-activeText hover:bg-borderLight'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    <div className="text-center p-4 bg-bgLight rounded-lg border border-borderLight">
                        <div className="text-2xl font-bold text-primary mb-1">{professionalProjects.length + 3}+</div>
                        <div className="text-sm text-typography">Professional Projects</div>
                    </div>
                    <div className="text-center p-4 bg-bgLight rounded-lg border border-borderLight">
                        <div className="text-2xl font-bold text-primary mb-1">8+</div>
                        <div className="text-sm text-typography">Industries</div>
                    </div>
                    <div className="text-center p-4 bg-bgLight rounded-lg border border-borderLight">
                        <div className="text-2xl font-bold text-primary mb-1">15+</div>
                        <div className="text-sm text-typography">Technologies</div>
                    </div>
                    <div className="text-center p-4 bg-bgLight rounded-lg border border-borderLight">
                        <div className="text-2xl font-bold text-primary mb-1">10+</div>
                        <div className="text-sm text-typography">Years Experience</div>
                    </div>
                </div>

                {/* Filter Results Info */}
                <div className="text-center mb-6">
                    <p className="text-typography">
                        Showing <span className="font-semibold text-primary">{filteredProjects.length}</span> projects
                        {selectedCategory !== "All" && (
                            <span> in <span className="font-semibold text-primary">{selectedCategory}</span></span>
                        )}
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* No Results Message */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-typography text-lg">No projects found in this category.</p>
                        <button
                            onClick={() => setSelectedCategory("All")}
                            className="mt-4 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                        >
                            Show All Projects
                        </button>
                    </div>
                )}

                {/* Note about NDAs */}
                <div className="mt-12 p-6 bg-bgLight border border-borderLight rounded-lg">
                    <h3 className="text-lg font-semibold text-typography mb-3">Note on Professional Projects</h3>
                    <p className="text-typography leading-relaxed">
                        All professional projects shown above are anonymized to respect Non-Disclosure Agreements (NDAs)
                        with clients and employers. The technical challenges, solutions, and achievements are accurate
                        representations of real work, but specific client names, proprietary features, and business details
                        have been generalized. For detailed technical discussions about any of these projects,
                        please feel free to contact me.
                    </p>
                </div>
            </div>
        </>
    );
}
