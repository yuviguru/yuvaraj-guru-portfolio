import React from 'react';
import profileImage from '../assets/images/yuvaraj-headshot-no-bg.png';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useTranslations } from '../hooks/useTranslations';
import { Link } from "react-router-dom";
import Button from '../components/Button';



export default function Home() {
    const translations = useTranslations();

    const MoreAboutMeButton = {
        text: translations?.buttonText,
        icon: faArrowRight
    }

    return (
        <div className="relative min-h-screen w-full flex justify-center items-center overflow-hidden">
            <div className="flex items-center justify-center text-left mx-auto w-full h-full px-4 sm:px-6 lg:px-8">
                {/* Desktop Background Image */}
                <img
                    className="hidden lg:block fixed h-[calc(100vh)] left-0 object-cover object-center bg-none w-auto max-w-[45%]"
                    src={profileImage}
                    alt="Background"
                />

                {/* Content Container */}
                <div className="w-full lg:ml-[35%] lg:w-2/3 xl:ml-[33.33%] xl:w-2/3">
                    <div className="max-w-[550px] mx-auto px-4 sm:px-0">
                        {/* Mobile Profile Image */}
                        <img
                            src={profileImage}
                            className="lg:hidden rounded-full h-52 sm:h-60 md:h-[290px] mx-auto mb-6 sm:mb-8"
                            alt="Profile"
                        />

                        {/* Heading */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold uppercase text-primary relative leading-tight mb-4 sm:mb-5 text-center lg:text-left">
                            {translations?.heading}
                            <span className="block text-typography text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl mt-1 sm:mt-2">
                                {translations?.subheading}
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-4 mb-6 sm:mb-8 text-base sm:text-lg lg:text-base xl:text-lg text-typography leading-relaxed text-center lg:text-left">
                            {translations?.description}
                        </p>

                        {/* Button */}
                        <div className="flex justify-center lg:justify-start">
                            <Link to="/about" className="no-underline">
                                <Button {...MoreAboutMeButton}></Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
