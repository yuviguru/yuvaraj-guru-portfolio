import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavItem({ name, icon, link }) {
    const location = useLocation();
    const isActive = location.pathname === link;

    // State to track hover status
    const [isHovered, setIsHovered] = useState(false);

    return (
        <li
            className={`flex w-fit text-white rounded-full justify-center items-center transition-all duration-500
            ${isActive ? 'bg-primary' : 'bg-navPillsBg'} ${isHovered ? 'bg-primary' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link to={link} className="flex items-center">
                <div
                    id="navelements"
                    className={`text-sm font-medium uppercase flex justify-center items-center transition-all duration-100 ease-out
                    ${isHovered ? 'w-20 ml-2 opacity-500' : 'w-0 opacity-0'}`}
                >
                    {name}
                </div>
                <div className="w-12 h-12 flex justify-center items-center">
                    <FontAwesomeIcon icon={icon} size="lg" />
                </div>
            </Link>
        </li>
    );
}
