// pages/Contact.js
import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';
import PageLayout from '../components/PageLayout';
import SEO from '../components/SEO';
import { faEnvelopeOpen, faPhoneSquare, faLocation, faPaperPlane, faSpinner, faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Button from '../components/Button';
import emailjs from '@emailjs/browser';

const props = {
    title: "Get in",
    highlightTitle: "Touch",
    bgTitle: "Contact"
}

const FormField = ({ type = "text", name, placeholder, className, value, onChange, error, fullWidth = false }) => {
    return (
        <div className={`w-full ${type === "textarea" || fullWidth ? '' : 'md:w-1/2'} px-4 mb-6`}>
            {type === "textarea" ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`w-full bg-mutedText text-white py-3 px-6 border ${error ? 'border-red-500' : 'border-mutedText'} rounded-3xl h-40 placeholder:uppercase ${className} focus:outline-none focus:border-primary transition-colors`}
                    required
                ></textarea>
            ) : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`w-full bg-mutedText text-white py-3 px-6 border ${error ? 'border-red-500' : 'border-mutedText'} rounded-full placeholder:uppercase ${className} focus:outline-none focus:border-primary transition-colors`}
                    required
                />
            )}
            {error && (
                <p className="text-red-500 text-sm mt-2 px-2">{error}</p>
            )}
        </div>
    );
};

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

    // EmailJS Configuration
    const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    const socialIcons = [
        { name: 'Facebook', icon: faFacebook, link: 'https://www.facebook.com/yuviinsane/' },
        { name: 'Linkedin', icon: faLinkedin, link: 'https://www.linkedin.com/in/yuvaraj-guru/' },
        { name: 'Github', icon: faGithub, link: 'https://github.com/yuviguru' },
        { name: 'Location', icon: faLocation, link: 'https://www.google.com/maps/place/27%2F10,+RK+Nagar,+Meenambal+Nagar,+Korukkupet,+Old+Washermanpet,+Chennai,+Tamil+Nadu+600021/@13.1195214,80.2792012,20z/data=!4m6!3m5!1s0x3a526f7d006a56e3:0xd8377ab413e71dec!8m2!3d13.1194386!4d80.2794216!16s%2Fg%2F11f4qjjffd?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D' },
    ];

    const contactFormFields = [
        { name: "name", type: "text", placeholder: "Your Name", className: "" },
        { name: "email", type: "email", placeholder: "Your Email", className: "" },
        { name: "subject", type: "text", placeholder: "Your Subject", className: "", fullWidth: true },
        { name: "message", type: "textarea", placeholder: "Your Message", className: "h-40 rounded-3xl" },
    ];

    // Form validation
    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        setSubmitStatus(null);

        try {
            // Check if EmailJS is configured
            if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
                console.warn('EmailJS not configured. Simulating email send...');
                // Simulate API call for demo purposes
                await new Promise(resolve => setTimeout(resolve, 2000));
                setSubmitStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                return;
            }

            // Initialize EmailJS
            emailjs.init(EMAILJS_PUBLIC_KEY);

            // Send email using EmailJS
            const result = await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_email: 'k.yuvarajguru@gmail.com', // Your email
                }
            );

            console.log('Email sent successfully:', result);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    // Dynamic button text and icon based on state
    const getButtonProps = () => {
        if (isLoading) {
            return {
                text: "Sending...",
                icon: faSpinner,
                className: "animate-spin"
            };
        }
        return {
            text: "Send Message",
            icon: faPaperPlane
        };
    };

    const SendButton = getButtonProps();
    return (
        <PageLayout>
            <SEO
                title="Contact Yuvaraj Guru - Get in Touch for Project Collaboration"
                description="Contact Yuvaraj Guru for freelance projects, full-stack development opportunities, React/Vue.js consulting, or collaboration. Available for new projects and creative ideas."
                keywords="Contact Yuvaraj Guru, Hire Full Stack Developer, React Developer for Hire, Vue.js Consultant, Freelance Developer Contact, Project Collaboration"
                url="https://yuvarajguru.dev/contact"
                type="website"
            />
            <PageTitle {...props}></PageTitle>
            <div className="max-w-6xl mx-auto text-typography mt-8 pb-20">
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
                                        <a rel="noreferrer" target="_blank" href={icon.link} className="flex w-11 h-11 items-center justify-center bg-mutedText rounded-full p-2 text-activeText transition duration-300 hover:bg-primary">
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
                                {contactFormFields.map((field, index) => (
                                    <FormField
                                        key={index}
                                        {...field}
                                        value={formData[field.name]}
                                        onChange={handleChange}
                                        error={errors[field.name]}
                                    />
                                ))}
                                <div className="w-full px-4">
                                    <Button
                                        {...SendButton}
                                        disabled={isLoading}
                                        className={`${isLoading ? 'opacity-70 cursor-not-allowed' : ''} ${SendButton.className || ''}`}
                                    />
                                </div>
                            </div>

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <div className="w-full px-4 mt-6">
                                    <div className="flex items-center gap-3 p-4 bg-green-900/30 border border-green-500 rounded-lg text-green-400">
                                        <FontAwesomeIcon icon={faCheckCircle} size="lg" />
                                        <div>
                                            <h4 className="font-semibold">Message Sent Successfully!</h4>
                                            <p className="text-sm opacity-90">Thank you for reaching out. I'll get back to you soon!</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="w-full px-4 mt-6">
                                    <div className="flex items-center gap-3 p-4 bg-red-900/30 border border-red-500 rounded-lg text-red-400">
                                        <FontAwesomeIcon icon={faExclamationTriangle} size="lg" />
                                        <div>
                                            <h4 className="font-semibold">Failed to Send Message</h4>
                                            <p className="text-sm opacity-90">Something went wrong. Please try again or contact me directly at k.yuvarajguru@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* EmailJS Configuration Notice (for development) */}
                            {(!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) && (
                                <div className="w-full px-4 mt-6">
                                    <div className="flex items-center gap-3 p-4 bg-yellow-900/30 border border-yellow-500 rounded-lg text-yellow-400">
                                        <FontAwesomeIcon icon={faExclamationTriangle} size="lg" />
                                        <div>
                                            <h4 className="font-semibold">Demo Mode</h4>
                                            <p className="text-sm opacity-90">EmailJS not configured. Form will simulate sending for demo purposes.</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
