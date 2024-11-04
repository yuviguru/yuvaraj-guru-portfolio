// pages/About.js
import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';
import { faEnvelopeOpen, faPhoneSquare, faLocation, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Button from '../components/Button';

const props = {
    title: "Get in",
    highlightTitle: "Touch",
    bgTitle: "Contact"
}

const FormField = ({ type = "text", name, placeholder, className }) => {
    return (
        <div className={`w-full ${type === "textarea" ? '' : 'md:w-1/3'} px-4 mb-6`}>
            {type === "textarea" ? (
                <textarea
                    name={name}
                    placeholder={placeholder}
                    className={`w-full bg-mutedText text-white py-3 px-6 border border-mutedText rounded-3xl h-40 placeholder:uppercase ${className}`}
                ></textarea>
            ) : (
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    className={`w-full bg-mutedText text-white py-3 px-6 border border-mutedText rounded-full placeholder:uppercase ${className}`}
                />
            )}
        </div>
    );
};

export default function Contact() {
    const [message, setMessage] = useState('');

    const socialIcons = [
        { name: 'Facebook', icon: faFacebook, link: 'https://www.facebook.com/yuviinsane/' },
        { name: 'Linkedin', icon: faLinkedin, link: 'https://www.linkedin.com/in/yuvaraj-guru/' },
        { name: 'Github', icon: faGithub, link: 'https://github.com/yuviguru' },
        { name: 'Location', icon: faLocation, link: 'https://www.google.com/maps/place/27%2F10,+RK+Nagar,+Meenambal+Nagar,+Korukkupet,+Old+Washermanpet,+Chennai,+Tamil+Nadu+600021/@13.1195214,80.2792012,20z/data=!4m6!3m5!1s0x3a526f7d006a56e3:0xd8377ab413e71dec!8m2!3d13.1194386!4d80.2794216!16s%2Fg%2F11f4qjjffd?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D' },
    ];

    const contactFormFields = [
        { name: "name", type: "text", placeholder: "Your Name", className: "" },
        { name: "email", type: "email", placeholder: "Your Email", className: "" },
        { name: "subject", type: "text", placeholder: "Your Subject", className: "" },
        { name: "message", type: "textarea", placeholder: "Your Message", className: "h-40 rounded-3xl" },
    ]

    const SendButtonButton = {
        text: "Send Message",
        icon: faPaperPlane
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        setMessage('Your message has been sent!');
    };
    return (
        <>
            <PageTitle {...props}></PageTitle>
            <div className="max-w-6xl mx-auto text-typography mt-8">
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/3 w-full px-8">
                        <h3 className="text-2xl mb-4 font-bold uppercase">Don't be shy!</h3>
                        <p className="mb-6 text-md">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>

                        <div className="relative mb-4">
                            <FontAwesomeIcon icon={faEnvelopeOpen} className="absolute left-0 top-1/2 transform -translate-y-1/2  text-primary" size="2xl" />
                            <div className="pl-12">
                                <span className="block opacity-80 uppercase text-xs">Mail me</span>
                                <span>k.yuvarajguru@gmail.com</span>
                            </div>
                        </div>

                        <div className="relative mb-4">
                            <FontAwesomeIcon className="absolute left-0 top-1/2 transform -translate-y-1/2 text-primary" icon={faPhoneSquare} size="2xl" />
                            <div className="pl-12">
                                <span className="block opacity-80 uppercase text-xs">Call me</span>
                                <span>+91 8668138534</span>
                            </div>
                        </div>

                        <ul className="flex space-x-4 pt-4 mb-12">
                            {
                                socialIcons.map((icon, index) => (
                                    <li key={index}>
                                        <a target="_blank" href={icon.link} className="flex w-11 h-11 items-center justify-center bg-mutedText rounded-full p-2 text-activeText transition duration-300 hover:bg-primary">
                                            <FontAwesomeIcon className="" icon={icon.icon} size="lg" />
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="lg:w-2/3 w-full px-8">
                        <form id="contactform" className="contactform" onSubmit={handleSubmit}>
                            <div className="flex flex-wrap">
                                {contactFormFields.map((fields, index) => (

                                    <FormField {...fields} key={index} />
                                ))}
                                <div className="w-full px-4">
                                    <Button {...SendButtonButton}></Button>
                                </div>
                            </div>
                            {message && (
                                <div className="w-full px-4 mt-6">
                                    {message}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
