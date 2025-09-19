// pages/About.js
import React from 'react';
import PageTitle from '../components/PageTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import Button from '../components/Button';
import YuvarajCV from "../assets/Yuvaraj_Guru_CV.pdf";
import Seperator from '../components/Seperator';

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
                const dob = new Date("1994-05-26"); // Replace with dynamic value if needed
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
    {
        textTop: "years of",
        textBottom: "experience",
        total: "10"
    },
    {
        textTop: "Completed",
        textBottom: "Projects",
        total: "35"
    },
    {
        textTop: "Happy",
        textBottom: "Customers",
        total: "25"
    },
    {
        textTop: "Freshers",
        textBottom: "Mentored",
        total: "48"
    }
];

const skills = {
    html: 90,
    "css/sass": 80,
    javascript: 88,
    react: 85,
    vue: 86,
    Node: 72,
    jquery: 89,
    php: 71,
    laravel: 77,
    mysql: 60,
    mongodb: 40,
    "AI Tools": 85,
    "GitHub Copilot": 90,
    "AI Workflows": 80,
    "Hybris/Wordpress": 55,

}
const careerHistory = [
    {
        duration: "October 2024- Present",
        position: "Xebia",
        company: "Senior Consultant",
        description: "At Xebia, I have the exciting opportunity to work on expanding a global clothing retailer’s loyalty program across several European countries. Using Vue 3, Node.js, GraphQL, and Harness, I am deeply involved in building scalable solutions that enhance customer engagement across new markets. This project is a rewarding challenge, allowing me to collaborate with a talented team and make a tangible impact on the company’s growth while focusing on delivering seamless and efficient user experiences."
    },
    {
        duration: "July 2021- October 2024",
        position: "Lead software engineer",
        company: "Virtusa Corporation",
        description: "My time at Virtusa was a period of significant growth, both personally and professionally. I led the development of a hackathon platform using React and Redux, making it simple for users to create, manage, and run their own hackathons. Integrating Keycloak for authentication and working with GraphQL allowed me to ensure secure, scalable solutions. One of my proudest achievements was transforming a single-facet product search into a multi-facet filtering system without any back-end changes, which improved performance and reduced server load by 20%. I also developed features like quote management and product returns, while implementing a Redis caching strategy that optimized performance during high-traffic periods. It was fulfilling to see how these efforts directly improved both the user experience and system efficiency."
    },
    {
        duration: "January 2020- May 2021",
        position: "Associate - Projects",
        company: "Cognizant Solutions",
        description: "At Cognizant, I was able to creatively solve problems during the pandemic, such as automating the creation of digital postcards for an insurance client using Vue.js, which helped their communication efforts during a critical time. I also extended the life of 30+ business-critical applications by creating an Electron wrapper to run legacy Flash apps, buying time to modernize those systems after Adobe ended support. Additionally, I introduced micro frontends to a Vue.js application using Single SPA, improving developer productivity by enabling independent development and reuse of components across projects. These experiences honed my ability to adapt to new challenges and deliver thoughtful, user-focused solutions."
    },
    {
        duration: "August 2018 - November 2019",
        position: "Software Development Engineer",
        company: "Colan Infotech",
        description: "At Colan Infotech, I worked on creating a suggestion engine for a resort booking platform using Node.js. The service helped resort admins efficiently manage guest check-ins by suggesting alternative rooms based on occupancy, making the process smoother and more flexible. I also integrated an SVG editor into a Vue.js app, allowing users to interact with resort maps, view room details, and make bookings directly from the map interface—something that really enhanced the customer experience. Additionally, I enjoyed mentoring junior developers, conducting workshops to help them ramp up their skills and gain confidence in their projects."
    },
    {
        duration: "April 2016- July 2018",
        position: "Software Development Engineer",
        company: "Trenmax Software Solutions",
        description: "Early in my career at Trenmax, I built an interactive dashboard for a health institute that allowed them to manage appointments and case files more effectively. I also redesigned websites for over 10 businesses, helping them adopt modern frameworks and stay competitive in their industries. One of my most impactful projects was integrating data synchronization with a QAD system using Laravel queues, along with setting up Firebase push notifications for an employee management mobile app. It was rewarding to see how these changes helped streamline workflows and improve communication for internal teams."
    },
    {
        duration: "2011-2015",
        position: "Bachelor Of Engineering (B.E)",
        company: "DMI College Of Engineering",
        description: "Although I didn’t study computer science, my engineering background has given me a strong technical foundation that I continue to rely on in my software development career. It has taught me to think critically, approach problems with a structured mindset, and adapt quickly to new challenges. These skills have been invaluable throughout my journey as a software engineer, helping me tackle complex projects with confidence and precision."
    }
];

function PersonalInfo({ title, details }) {
    return (
        <>
            <h3 className="uppercase text-xl sm:text-2xl pb-4 sm:pb-6 text-typography font-bold">{title}</h3>
            <div className="flex flex-col sm:flex-row lg:justify-between gap-4 sm:gap-6 lg:gap-0">
                <div className="sm:basis-1/2 lg:basis-1/2 space-y-3 sm:space-y-5 text-typography">
                    {Object.entries(details.left).map(([key, value]) => (
                        <div key={key} className="text-base sm:text-sm md:text-base">
                            <span className="opacity-80">{key} </span>
                            <span className="font-semibold">{value}</span>
                        </div>
                    ))}
                </div>
                <div className="sm:basis-1/2 lg:basis-1/2 space-y-3 sm:space-y-5 text-typography">
                    {Object.entries(details.right).map(([key, value]) => (
                        <div key={key} className="text-base sm:text-sm md:text-base">
                            <span className="opacity-80">{key} </span>
                            <span className="font-semibold">{value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
const CircularProgressBar = ({ percentage, label }) => {
    return (
        <div className="w-1/2 sm:w-1/3 lg:w-1/4 xl:w-1/6 mb-8 sm:mb-12 px-2">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto">
                {/* Percentage Label */}
                <span className="absolute inset-0 flex items-center justify-center text-lg sm:text-xl lg:text-2xl font-semibold text-typography z-10">
                    {percentage}%
                </span>

                {/* Circular Progress */}
                <div
                    className="absolute w-full h-full rounded-full bg-borderLight"
                    style={{
                        background: `conic-gradient(#ffb400 ${percentage * 3.6}deg, #2b2a2a 0deg)`, // Adjust colors and dynamic progress
                    }}
                ></div>

                {/* Inner Circle for hollow effect */}
                <div className="absolute top-[0.35rem] left-[0.35rem] sm:top-[0.4rem] sm:left-[0.4rem] lg:top-[0.5rem] lg:left-[0.5rem] w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-background rounded-full"></div>
            </div>
            <h6 className="uppercase font-sans text-center mt-3 sm:mt-4 lg:mt-6 text-typography text-xs sm:text-sm lg:text-base">
                {label}
            </h6>
        </div>
    );
};
export default function About() {
    const DownloadCVButton = {
        text: "Download CV",
        icon: faDownload
    }
    return (
        <>
            <PageTitle {...props}></PageTitle>

            {/* Personal Info and Highlights Section */}
            <div className="flex flex-col lg:flex-row w-11/12 lg:w-10/12 xl:w-10/12 mx-auto gap-8 lg:gap-0 px-4 sm:px-6 lg:px-0">
                {/* Personal Information */}
                <div className="lg:basis-1/2 lg:pr-8">
                    <PersonalInfo {...PersonalData}></PersonalInfo>

                    <div className="mt-6 sm:mt-8 lg:mt-10">
                        <a href={YuvarajCV} download="Yuvaraj_Guru_CV.pdf">
                            <Button {...DownloadCVButton}></Button>
                        </a>
                    </div>
                </div>

                {/* Key Highlights */}
                <div className="lg:basis-1/2 lg:pl-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        {keyHighlights.map((highlight, index) => (
                            <div key={index}>
                                <div className="pt-4 sm:pt-5 pr-4 sm:pr-8 pb-4 sm:pb-6 pl-[25%] sm:pl-10 border border-borderLight rounded mb-4 sm:mb-6">
                                    <h3 className="relative inline-block font-bold text-4xl sm:text-5xl lg:text-6xl text-primary leading-tight after:content-['+'] after:absolute after:-right-4 sm:after:-right-6 after:text-2xl sm:after:text-4xl after:font-light after:top-0">
                                        {highlight.total}
                                    </h3>
                                    <p className="relative text-xs sm:text-sm uppercase pl-8 sm:pl-11 font-medium text-typography mt-2">
                                        {highlight.textTop}
                                        <span className="block">{highlight.textBottom}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Seperator />

            {/* Skills Section */}
            <div className="w-11/12 sm:w-10/12 lg:w-8/12 mx-auto px-4 sm:px-6 lg:px-0">
                <h3 className="uppercase text-xl sm:text-2xl pb-8 sm:pb-12 text-typography font-bold text-center">my skills</h3>
                <div className="flex w-full flex-wrap justify-center">
                    {Object.entries(skills).map(([skill, percent]) => (
                        <CircularProgressBar percentage={percent} label={skill} key={skill} />
                    ))}
                </div>
            </div>

            <Seperator />

            {/* Experience & Education Section */}
            <div className="w-11/12 sm:w-10/12 lg:w-8/12 mx-auto px-4 sm:px-6 lg:px-0">
                <h3 className="uppercase text-xl sm:text-2xl pb-8 sm:pb-12 text-typography font-bold text-center">experience & education</h3>
                <div className="flex flex-col pb-20 sm:pb-40">
                    <div className="w-full">
                        <ul>
                            {careerHistory.map((history, index) => (
                                <li key={index} className="relative pr-4 sm:pr-10 pl-12 sm:pl-16 mb-12 sm:mb-16 after:absolute after:top-0 after:left-4 sm:after:left-5 after:bg-borderLight after:w-[1px] after:h-full">
                                    <div className="bg-primary w-8 h-8 sm:w-10 sm:h-10 absolute left-0 leading-40 text-center z-10 rounded-full text-typography content-center">
                                        <FontAwesomeIcon
                                            icon={index === careerHistory.length - 1 ? faGraduationCap : faBriefcase}
                                            size="sm"
                                            className="sm:text-lg"
                                        />
                                    </div>
                                    <span className="text-typography text-xs py-1 px-3 sm:px-6 inline-block mb-2 rounded-full font-semibold bg-mutedText opacity-80 uppercase">
                                        {history.duration}
                                    </span>
                                    <h5 className="uppercase text-base sm:text-lg mt-2 sm:mt-3 mb-2 sm:mb-3 text-typography">
                                        {history.position}
                                        <span className="opacity-80 font-semibold text-sm relative pl-4 sm:pl-7 before:absolute before:w-2 sm:before:w-3 before:h-[2px] sm:before:h-[3px] before:bg-typography before:left-1 sm:before:left-2 before:top-2 before:opacity-80 block sm:inline mt-1 sm:mt-0">
                                            {history.company}
                                        </span>
                                    </h5>
                                    <p className="text-typography text-sm sm:text-base leading-relaxed">{history.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
