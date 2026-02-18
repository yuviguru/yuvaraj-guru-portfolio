const BLOG_IMAGE_EXTENSIONS = ['png', 'jpg', 'jpeg', 'webp', 'avif'];
const blogImagesContext = require.context(
    '../assets/images/blogs',
    false,
    /\.(png|jpe?g|webp|avif)$/
);

const normalizeImageAsset = (image) => {
    if (!image) {
        return null;
    }

    if (typeof image === 'string') {
        return image;
    }

    if (typeof image === 'object' && typeof image.default === 'string') {
        return image.default;
    }

    return null;
};

export const getBlogImageBySlug = (slug) => {
    if (!slug) {
        return null;
    }

    const availableFiles = blogImagesContext.keys();

    for (const extension of BLOG_IMAGE_EXTENSIONS) {
        const candidate = `./${slug}.${extension}`;
        if (availableFiles.includes(candidate)) {
            return normalizeImageAsset(blogImagesContext(candidate));
        }
    }

    return null;
};

export const resolveBlogImage = (post, fallbackImage = null) => {
    if (!post) {
        return fallbackImage;
    }

    return (
        getBlogImageBySlug(post.slug) ||
        normalizeImageAsset(post.image) ||
        fallbackImage
    );
};
