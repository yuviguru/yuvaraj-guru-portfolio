export const changeTheme = (theme) => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
};

export const getLinkedinTokem = () => "AQW2d3ADtbhKQDtAE-wx_Xsd-Qf4zfqvbx8RcOXoYolH0_EdDtfk-RqmQNyiAWCyE94KB-cZiyHrBvzJbWeMSG6OaNyYgTncEVAzE9EQe8_CWT1Es4QphxRwGruHwxkrq9JB9j8HdZc_Ilbp0XUW19DjZX5uNEgLmTQQL4gKYuQWZa-MD45yla0VvartLK5jq5pxGtBDRk071urboKYtvDQpeXHS98CPMz6rHbeep0q6QHTSV_76Xf1EqIX3ENWpUQoaYdW85s3olN5o-zgA2ZBRUI8nPpvZ2FHRcnfOtyvYb4BVPnt8iYNkkzhDLNGplM26ZgNshlVCF3gsSjEAYcJ9lR83PQ";

// Calculate reading time based on word count
export const calculateReadingTime = (content) => {
    const wordsPerMinute = 200;
    let wordCount = 0;

    if (content.introduction) {
        wordCount += content.introduction.paragraphs.join(' ').split(' ').length;
    }

    if (content.sections) {
        content.sections.forEach(section => {
            wordCount += section.paragraphs.join(' ').split(' ').length;
            if (section.codeExample) {
                wordCount += section.codeExample.content.split(' ').length;
            }
        });
    }

    if (content.conclusion) {
        wordCount += content.conclusion.paragraphs.join(' ').split(' ').length;
    }

    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return readingTime;
};

// Format date to readable format
export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

// Truncate text to specified length
export const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
};

