// pages/About.js
import React from 'react';
import PageTitle from '../components/PageTitle';

const props = {
    title: "My",
    highlightTitle: "Blog",
    bgTitle: "Posts"
}
export default function Blog() {
    return (
        <PageTitle {...props}></PageTitle>
    );
}
