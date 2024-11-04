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
        total: "8"
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
            <h3 className="uppercase text-2xl pb-6 text-typography font-bold">{title}</h3>
            <div className="flex justify-between">
                <div className="basis-1/2 space-y-5 text-typography ">
                    {Object.entries(details.left).map(([key, value]) => (
                        <div key={key}><span className="opacity-80">{key} </span><span className="font-semibold">{value}</span></div>
                    ))}
                </div>
                <div className="basis-1/2 space-y-5 text-typography ">
                    {Object.entries(details.right).map(([key, value]) => (
                        <div key={key}><span className="opacity-80">{key} </span><span className="font-semibold">{value}</span></div>
                    ))}
                </div>
            </div>
        </>
    );
}
const CircularProgressBar = ({ percentage, label }) => {
    return (
        <div className="w-1/4 mb-12">
            <div className="relative w-28 h-28 mx-auto">
                {/* Percentage Label */}
                <span className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-typography z-10">
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
                <div className="absolute top-[0.5rem] left-[0.5rem] w-24 h-24 bg-background rounded-full"></div>
            </div>
            <h6 className="uppercase font-sans text-center mt-6 text-typography">
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
            <div className="flex flex-row w-10/12 mx-auto">
                <div className="basis-1/2">
                    <PersonalInfo {...PersonalData}></PersonalInfo>

                    <a className="mt-10 inline-block " href={YuvarajCV} download="Yuvaraj_Guru_CV.pdf">
                        <Button {...DownloadCVButton}></Button>
                    </a>
                </div>
                <div className="basis-1/2">
                    <div className="flex flex-wrap">
                        {keyHighlights.map((highlight, index) => (
                            <div className="w-1/2 px-4" key={index}>
                                <div className="pt-5 pr-8 pb-6 pl-10 border border-borderLight rounded mb-6">
                                    <h3 className="relative inline-block font-bold text-6xl text-primary leading-tight after:content-['+'] after:absolute after:-right-6 after:text-4xl after:font-light after:top-0">{highlight.total}</h3>
                                    <p className="relative text-sm uppercase pl-11 font-medium text-typography">{highlight.textTop} <span className="block">{highlight.textBottom}</span></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Seperator />
            <div className="w-8/12 mx-auto">
                <h3 className="uppercase text-2xl pb-12 text-typography font-bold text-center">my skills</h3>
                <div className="flex w-full flex-wrap">
                    {Object.entries(skills).map(([skill, percent]) => (
                        <CircularProgressBar percentage={percent} label={skill} key={skill} />
                    ))}
                </div>
            </div>
            <Seperator />
            <div className="w-8/12 mx-auto">
                <h3 className="uppercase text-2xl pb-12 text-typography font-bold text-center">experience & education</h3>
                <div className="flex flex-col sm:flex-row pb-40">
                    <div className="w-full">
                        <ul>
                            {careerHistory.map((history, index) => (
                                <li key={index} className="relative pr-10 pl-16 mb-16 after:absolute after:top-0 after:left-5 after:bg-borderLight after:w-[1px] after:h-full" >
                                    <div className="bg-primary w-10 h-10 absolute left-0 leading-40 text-center z-10 rounded-full text-typography content-center">
                                        <FontAwesomeIcon icon={index === careerHistory.length - 1 ? faGraduationCap : faBriefcase} size="lg" />
                                    </div>
                                    <span className="text-typography text-xs py-1 px-6 inline-block mb-2 rounded-full font-semibold bg-mutedText opacity-80 uppercase">{history.duration}</span>
                                    <h5 className="uppercase text-lg mt-3 mb-3 text-typography">
                                        {history.position}
                                        <span className="opacity-80 font-semibold text-sm relative pl-7 before:absolute before:w-3 before:h-[3px] before:bg-typography before:left-2 before:top-2 before:opacity-80">{history.company}</span>
                                    </h5>
                                    <p className="text-typography text-sm">{history.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
