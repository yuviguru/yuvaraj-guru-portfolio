export default function PageTitle({ title, highlightTitle, bgTitle }) {
    return (
        <div className="mx-auto w-full relative py-20 text-center">
            <h2 className="relative text-5xl font-black uppercase text-typography m-0 z-10">
                {title} <span className="text-primary">{highlightTitle}</span>
            </h2>
            <span className="text-8xl uppercase absolute left-0 right-0 top-1/2 tracking-wider leading-none font-extrabold text-mutedText transform -translate-y-1/2">
                {bgTitle}
            </span>
        </div>
    );
}