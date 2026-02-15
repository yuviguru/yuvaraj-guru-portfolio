import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title = "Yuvaraj Guru - Frontend Architect & Product Engineer | React, AI, Automation",
    description = "Frontend Architect & Product Engineer with 10+ years building end-to-end products. Expert in React, Vue.js, AI integrations, and workflow automations for software development, recruitment, and more.",
    keywords = "Frontend Architect, Product Engineer, React Developer, AI Integration, Workflow Automation, Vue.js, Node.js, Full Stack Developer, Design Systems, Tailwind CSS",
    image = "/images/profile-yuvaraj.png",
    url = "https://yuvarajguru.dev",
    type = "website",
    author = "Yuvaraj Guru",
    twitterHandle = "@yuviguru"
}) => {
    const fullTitle = title.includes("Yuvaraj Guru") ? title : `${title} | Yuvaraj Guru`;
    const fullImageUrl = image.startsWith('http') ? image : `${url}${image}`;

    // Structured Data for Person and Professional Profile
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                "@id": `${url}/#person`,
                "name": "Yuvaraj Guru",
                "alternateName": "Yuvi Guru",
                "description": "Frontend Architect & Product Engineer specializing in React, AI integrations, and workflow automations with 10+ years of industry experience",
                "url": url,
                "image": {
                    "@type": "ImageObject",
                    "url": fullImageUrl,
                    "width": 400,
                    "height": 400
                },
                "sameAs": [
                    "https://linkedin.com/in/yuvaraj-guru",
                    "https://github.com/yuviguru",
                    "https://twitter.com/yuviguru"
                ],
                "jobTitle": "Frontend Architect & Product Engineer",
                "worksFor": {
                    "@type": "Organization",
                    "name": "Freelance"
                },
                "knowsAbout": [
                    "React.js",
                    "Vue.js",
                    "Node.js",
                    "Design Systems",
                    "Framer Motion",
                    "Tailwind CSS",
                    "TypeScript",
                    "Frontend Architecture",
                    "AI Integration",
                    "Workflow Automation",
                    "Product Development",
                    "GraphQL",
                    "Accessibility"
                ],
                "email": "k.yuvarajguru@gmail.com",
                "telephone": "+91-8668138534"
            },
            {
                "@type": "WebSite",
                "@id": `${url}/#website`,
                "url": url,
                "name": "Yuvaraj Guru Portfolio",
                "description": description,
                "publisher": {
                    "@id": `${url}/#person`
                },
                "inLanguage": "en-US"
            },
            {
                "@type": "WebPage",
                "@id": `${url}/#webpage`,
                "url": url,
                "name": fullTitle,
                "description": description,
                "isPartOf": {
                    "@id": `${url}/#website`
                },
                "about": {
                    "@id": `${url}/#person`
                },
                "dateModified": new Date().toISOString(),
                "inLanguage": "en-US"
            }
        ]
    };

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta name="robots" content="index, follow" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImageUrl} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content="Yuvaraj Guru Portfolio" />
            <meta property="og:locale" content="en_US" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={twitterHandle} />
            <meta name="twitter:site" content={twitterHandle} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImageUrl} />

            {/* LinkedIn */}
            <meta property="linkedin:owner" content="yuvaraj-guru" />

            {/* Additional SEO Meta Tags */}
            <meta name="theme-color" content="#a78bfa" />
            <meta name="msapplication-TileColor" content="#a78bfa" />
            <meta name="msapplication-config" content="/browserconfig.xml" />

            {/* Canonical URL */}
            <link rel="canonical" href={url} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>

            {/* Additional Meta for Professional Profile */}
            <meta name="skills" content="React, Vue.js, Design Systems, Framer Motion, Tailwind CSS, Node.js, TypeScript, Figma" />
            <meta name="experience" content="10+ years" />
            <meta name="availability" content="Available for frontend architecture, product engineering, and AI integration projects" />
            <meta name="location" content="India" />
        </Helmet>
    );
};

export default SEO;
