import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title = "Yuvaraj Guru - Full Stack Developer | React, Vue.js, Node.js Expert",
    description = "Experienced Full Stack Developer with 10+ years in React, Vue.js, Node.js. Specialized in e-commerce, platform development, and performance optimization. Available for freelance projects.",
    keywords = "Full Stack Developer, React Developer, Vue.js Developer, Node.js, JavaScript, TypeScript, E-commerce Development, Web Development, Software Engineer, Freelance Developer",
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
                "description": "Experienced Full Stack Developer specializing in React, Vue.js, and Node.js with 10+ years of industry experience",
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
                "jobTitle": "Lead Software Engineer",
                "worksFor": {
                    "@type": "Organization",
                    "name": "Freelance"
                },
                "knowsAbout": [
                    "React.js",
                    "Vue.js",
                    "Node.js",
                    "JavaScript",
                    "TypeScript",
                    "Full Stack Development",
                    "E-commerce Development",
                    "Performance Optimization",
                    "Microservices",
                    "GraphQL"
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
            <meta name="theme-color" content="#ff6b35" />
            <meta name="msapplication-TileColor" content="#ff6b35" />
            <meta name="msapplication-config" content="/browserconfig.xml" />

            {/* Canonical URL */}
            <link rel="canonical" href={url} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>

            {/* Additional Meta for Professional Profile */}
            <meta name="skills" content="React, Vue.js, Node.js, JavaScript, TypeScript, Full Stack Development" />
            <meta name="experience" content="10+ years" />
            <meta name="availability" content="Available for freelance projects" />
            <meta name="location" content="India" />
        </Helmet>
    );
};

export default SEO;
