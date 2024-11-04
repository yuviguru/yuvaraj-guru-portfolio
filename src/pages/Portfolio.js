// pages/About.js
import React from 'react';
import PageTitle from '../components/PageTitle';

const props = {
    title: "My",
    highlightTitle: "Portfolio",
    bgTitle: "works"
}
export default function Portfolio() {
    return (
        <PageTitle {...props}></PageTitle>
    );
}
