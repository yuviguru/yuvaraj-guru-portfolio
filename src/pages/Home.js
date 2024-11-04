import React from 'react';
import profileImage from '../assets/images/side-profile-1.png';
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
        <div className="relative h-screen w-full flex justify-center items-center">
            <div className="bg-primary fixed w-full h-[200%] -rotate-12 -top-1/2 -left-[83%] block"></div>
            <div className="flex items-center justify-center text-left mx-auto w-full h-full">
                <img
                    className="hidden md:block fixed w-1/3 h-[calc(100vh-120px)] left-10 top-14 rounded-3xl shadow-2xl object-cover object-center bg-none"
                    src={profileImage}
                    alt="Background"
                />
                <div className="md:ml-[33.33%] w-2/3">
                    <div className="max-w-[550px] mx-auto">
                        <img
                            src={profileImage}
                            className="md:hidden rounded-full w-[270px] h-[270px] mx-auto mb-6 border-4 border-black"
                            alt="Profile"
                        />
                        <h1 className="text-5xl font-bold uppercase text-primary relative leading-tight mb-5">
                            {translations?.heading}
                            <span className="block text-typography">{translations?.subheading}</span>
                        </h1>
                        <p className="mt-4 mb-8 text-lg text-typography leading-relaxed">
                            {translations?.description}
                        </p>
                        <Link to="/about" className="no-underline">
                            <Button {...MoreAboutMeButton}></Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
