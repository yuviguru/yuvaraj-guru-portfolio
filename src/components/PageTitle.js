export default function PageTitle({ title, highlightTitle, bgTitle }) {
    return (
        <div className="mx-auto w-full relative py-12 sm:py-16 md:py-20 text-center px-4 sm:px-6 lg:px-8">
            <h2 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black uppercase text-typography m-0 z-10 leading-tight">
                {title} <span className="text-primary">{highlightTitle}</span>
            </h2>
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl uppercase absolute left-0 right-0 top-1/2 tracking-wider leading-none font-extrabold text-mutedText transform -translate-y-1/2 opacity-50 sm:opacity-100">
                {bgTitle}
            </span>
        </div>
    );
}