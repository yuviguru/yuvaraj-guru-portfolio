import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Button({ text, icon }) {
    return (
        <div className="relative group cursor-pointer inline-block px-10 py-3 pr-16 bg-transparent border border-primary rounded-full transition-all duration-300 z-10 overflow-hidden  before:absolute before:-z-10 before:bg-primary before:rounded-full before:left-0 before:right-0 before:top-0 before:bottom-0 before:translate-x-full hover:before:translate-x-0 before:transition before:duration-300 before:ease-out">
            <span className="relative z-20 text-typography font-semibold uppercase ">
                {text}
            </span>
            <span className="absolute right-0 bottom-0 w-[49px] h-[49px] bg-primary rounded-full text-typography flex items-center justify-center group-hover:bg-white">
                <FontAwesomeIcon icon={icon} size="lg" />
            </span>
        </div>
    );
}