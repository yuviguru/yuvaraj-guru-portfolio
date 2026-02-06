export const changeTheme = (theme) => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
};

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

