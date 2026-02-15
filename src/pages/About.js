// pages/About.js
import React from 'react';
import PageTitle from '../components/PageTitle';
import PageLayout from '../components/PageLayout';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import FadeIn from '../components/motion/FadeIn';
import { StaggerContainer, StaggerItem } from '../components/motion/StaggerChildren';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import Button from '../components/Button';
import YuvarajCV from "../assets/Yuvaraj_Guru_CV.pdf";
import Separator from '../components/Separator';

const props = {
    title: "about",
    highlightTitle: "me",
    bgTitle: "resume"
}

const PersonalData = {
    title: "personal infos",
    details: {
        left: {
            "First Name:": "Yuvaraj Guru",
            "Last Name:": "K",
            "Age:": (function () {
                const dob = new Date("1994-05-26");
                const diffMs = Date.now() - dob.getTime();
                const ageDt = new Date(diffMs);
                return `${Math.abs(ageDt.getUTCFullYear() - 1970)} Years`;
            })(),
            "Nationality:": "Indian",
            "Freelance:": "Available",
        },
        right: {
            "Location:": "Chennai - India",
            "Phone:": "+91-8668138534",
            "Email:": "k.yuvarajguru@gmail.com",
            "Slack:": "k.yuvarajguru@gmail.com",
            "Languages:": "English, Tamil",
        }
    }
};

const keyHighlights = [
    { textTop: "years of", textBottom: "experience", total: "10" },
    { textTop: "Completed", textBottom: "Projects", total: "35" },
    { textTop: "Happy", textBottom: "Customers", total: "25" },
    { textTop: "Developers", textBottom: "Mentored", total: "48" }
];

// Modern skill categories
const skillCategories = [
    {
        name: "Frontend",
        skills: [
            { name: "React", level: "expert" },
            { name: "Vue.js", level: "expert" },
            { name: "JavaScript", level: "expert" },
            { name: "TypeScript", level: "advanced" },
            { name: "CSS/Sass", level: "expert" },
            { name: "Tailwind CSS", level: "expert" },
            { name: "Framer Motion", level: "advanced" },
            { name: "HTML5", level: "expert" },
        ]
    },
    {
        name: "Design & Systems",
        skills: [
            { name: "Figma", level: "advanced" },
            { name: "Design Systems", level: "advanced" },
            { name: "CSS Architecture", level: "expert" },
            { name: "Responsive Design", level: "expert" },
            { name: "Accessibility", level: "advanced" },
            { name: "UI/UX Principles", level: "advanced" },
        ]
    },
    {
        name: "Backend & Tools",
        skills: [
            { name: "Node.js", level: "advanced" },
            { name: "GraphQL", level: "advanced" },
            { name: "PHP/Laravel", level: "intermediate" },
            { name: "MySQL", level: "intermediate" },
            { name: "Redis", level: "intermediate" },
            { name: "MongoDB", level: "intermediate" },
        ]
    },
    {
        name: "Workflow & AI",
        skills: [
            { name: "GitHub Copilot", level: "expert" },
            { name: "AI Workflows", level: "advanced" },
            { name: "Git/CI/CD", level: "advanced" },
            { name: "Micro Frontends", level: "advanced" },
            { name: "Electron", level: "intermediate" },
        ]
    }
];

const levelColors = {
    expert: 'bg-primary text-white',
    advanced: 'bg-accent text-white',
    intermediate: 'bg-navPillsBg text-typography',
};

const careerHistory = [
    {
        duration: "October 2024 - Present",
        position: "Senior Consultant",
        company: "Xebia",
        description: "Leading loyalty program expansion across European countries for a global clothing retailer. Architecting scalable solutions using Vue 3, Node.js, GraphQL, and Harness to enhance customer engagement across new markets."
    },
    {
        duration: "July 2021 - October 2024",
        position: "Lead Software Engineer",
        company: "Virtusa Corporation",
        description: "Led development of a hackathon platform using React and Redux. Transformed single-facet search into multi-facet filtering without backend changes, reducing server load by 20%. Implemented Redis caching strategy for high-traffic periods."
    },
    {
        duration: "January 2020 - May 2021",
        position: "Associate - Projects",
        company: "Cognizant Solutions",
        description: "Extended life of 30+ Flash applications via Electron wrapper during Adobe discontinuation. Introduced micro frontends with Single SPA, improving developer productivity. Automated digital postcard creation for insurance client."
    },
    {
        duration: "August 2018 - November 2019",
        position: "Software Development Engineer",
        company: "Colan Infotech",
        description: "Created intelligent room suggestion engine for resort platform using Node.js. Integrated SVG editor for interactive resort mapping and coordinate-based booking. Mentored junior developers through workshops."
    },
    {
        duration: "April 2016 - July 2018",
        position: "Software Development Engineer",
        company: "Trenmax Software Solutions",
        description: "Built healthcare management dashboard for appointments and case files. Redesigned 10+ business websites with modern frameworks. Integrated QAD ERP system using Laravel queues."
    },
    {
        duration: "2011 - 2015",
        position: "Bachelor Of Engineering (B.E)",
        company: "DMI College Of Engineering",
        description: "Engineering background providing strong technical foundation in critical thinking, structured problem-solving, and rapid adaptation to new challenges."
    }
];

function PersonalInfo({ title, details }) {
    return (
        <FadeIn>
            <h3 className="uppercase text-xl sm:text-2xl pb-4 sm:pb-6 text-typography font-heading font-bold">{title}</h3>
            <div className="flex flex-col sm:flex-row lg:justify-between gap-4 sm:gap-6 lg:gap-0">
                <div className="sm:basis-1/2 lg:basis-1/2 space-y-3 sm:space-y-5 text-typography">
                    {Object.entries(details.left).map(([key, value]) => (
                        <div key={key} className="text-base sm:text-sm md:text-base">
                            <span className="text-typography-muted">{key} </span>
                            <span className="font-semibold">{value}</span>
                        </div>
                    ))}
                </div>
                <div className="sm:basis-1/2 lg:basis-1/2 space-y-3 sm:space-y-5 text-typography">
                    {Object.entries(details.right).map(([key, value]) => (
                        <div key={key} className="text-base sm:text-sm md:text-base">
                            <span className="text-typography-muted">{key} </span>
                            <span className="font-semibold">{value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </FadeIn>
    );
}

function SkillTag({ skill }) {
    return (
        <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-transform hover:scale-105 cursor-default ${levelColors[skill.level]}`}>
            {skill.name}
            {skill.level === 'expert' && (
                <span className="w-1.5 h-1.5 bg-white rounded-full opacity-80" />
            )}
        </span>
    );
}

export default function About() {
    const DownloadCVButton = {
        text: "Download CV",
        icon: faDownload
    }
    return (
        <PageTransition>
            <PageLayout containerSize="wide">
                <SEO
                    title="About Yuvaraj Guru - Frontend Architect & Product Engineer with 10+ Years Experience"
                    description="Learn about Yuvaraj Guru's 10+ years journey building end-to-end products. Expertise in React, Vue.js, AI integrations, workflow automations, and team leadership."
                    keywords="About Yuvaraj Guru, Frontend Architect, Product Engineer, AI Integration, Workflow Automation, React Expert"
                    url="https://yuvarajguru.dev/about"
                    type="profile"
                />
                <PageTitle {...props} />

                {/* Personal Info and Highlights Section */}
                <div className="flex flex-col lg:flex-row w-full lg:w-11/12 xl:w-10/12 mx-auto gap-8 lg:gap-12 mb-16">
                    <div className="lg:basis-1/2">
                        <PersonalInfo {...PersonalData} />
                        <FadeIn delay={0.2}>
                            <div className="mt-6 sm:mt-8 lg:mt-10">
                                <a href={YuvarajCV} download="Yuvaraj_Guru_CV.pdf">
                                    <Button {...DownloadCVButton} />
                                </a>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Key Highlights */}
                    <div className="lg:basis-1/2">
                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            {keyHighlights.map((highlight, index) => (
                                <StaggerItem key={index}>
                                    <div className="pt-4 sm:pt-5 pr-4 sm:pr-8 pb-4 sm:pb-6 pl-[25%] sm:pl-10 border border-borderLight rounded-xl bg-surface hover:border-primary transition-colors duration-200">
                                        <h3 className="relative inline-block font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-primary leading-tight after:content-['+'] after:absolute after:-right-4 sm:after:-right-6 after:text-2xl sm:after:text-4xl after:font-light after:top-0">
                                            {highlight.total}
                                        </h3>
                                        <p className="relative text-xs sm:text-sm uppercase pl-8 sm:pl-11 font-medium text-typography mt-2">
                                            {highlight.textTop}
                                            <span className="block">{highlight.textBottom}</span>
                                        </p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>

                <Separator />

                {/* Skills Section - Modern Tags */}
                <div className="w-full lg:w-10/12 mx-auto mb-16">
                    <FadeIn>
                        <h3 className="uppercase text-xl sm:text-2xl pb-4 text-typography font-heading font-bold text-center">my skills</h3>
                        <p className="text-center text-typography-muted mb-10 text-sm">
                            <span className="inline-flex items-center gap-2 mr-4"><span className="w-2 h-2 bg-primary rounded-full" /> Expert</span>
                            <span className="inline-flex items-center gap-2 mr-4"><span className="w-2 h-2 bg-accent rounded-full" /> Advanced</span>
                            <span className="inline-flex items-center gap-2"><span className="w-2 h-2 bg-navPillsBg rounded-full" /> Intermediate</span>
                        </p>
                    </FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {skillCategories.map((category, catIndex) => (
                            <FadeIn key={category.name} delay={catIndex * 0.1}>
                                <div className="p-6 bg-surface border border-borderLight rounded-xl">
                                    <h4 className="font-heading font-semibold text-primary text-sm uppercase tracking-wider mb-4">{category.name}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <SkillTag key={skill.name} skill={skill} />
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>

                <Separator />

                {/* Experience & Education Section */}
                <div className="w-full lg:w-10/12 mx-auto mb-20">
                    <FadeIn>
                        <h3 className="uppercase text-xl sm:text-2xl pb-8 sm:pb-12 text-typography font-heading font-bold text-center">experience & education</h3>
                    </FadeIn>
                    <div className="flex flex-col">
                        <div className="w-full">
                            <ul>
                                {careerHistory.map((history, index) => (
                                    <FadeIn key={index} delay={index * 0.08}>
                                        <li className="relative pr-4 sm:pr-10 pl-12 sm:pl-16 mb-12 sm:mb-16 after:absolute after:top-0 after:left-4 sm:after:left-5 after:bg-borderLight after:w-[1px] after:h-full">
                                            <div className="bg-primary w-8 h-8 sm:w-10 sm:h-10 absolute left-0 leading-40 text-center z-10 rounded-full text-white flex items-center justify-center">
                                                <FontAwesomeIcon
                                                    icon={index === careerHistory.length - 1 ? faGraduationCap : faBriefcase}
                                                    size="sm"
                                                    className="sm:text-lg"
                                                />
                                            </div>
                                            <span className="text-typography text-xs py-1 px-3 sm:px-6 inline-block mb-2 rounded-full font-semibold bg-navPillsBg uppercase">
                                                {history.duration}
                                            </span>
                                            <h5 className="uppercase text-base sm:text-lg mt-2 sm:mt-3 mb-2 sm:mb-3 text-typography font-heading font-semibold">
                                                {history.position}
                                                <span className="text-typography-muted font-medium text-sm relative pl-4 sm:pl-7 before:absolute before:w-2 sm:before:w-3 before:h-[2px] sm:before:h-[3px] before:bg-typography-muted before:left-1 sm:before:left-2 before:top-2 block sm:inline mt-1 sm:mt-0">
                                                    {history.company}
                                                </span>
                                            </h5>
                                            <p className="text-typography-muted text-sm sm:text-base leading-relaxed">{history.description}</p>
                                        </li>
                                    </FadeIn>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </PageLayout>
        </PageTransition>
    );
}
