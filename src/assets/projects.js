import NovohitPreview from "./novohit-preview.png";
import NetworkGraphPreview from "./network-graph-preview.jpg";
import GooglePreview from "./google-preview.png";

const data = {
    professional:
        [
            {
                title: "Novohit Website Redesign",
                paragraph: "Designed a modern web application for an enterprise-level software development company in Santiago, Chile.",
                tags: [
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "Figma",
                    "WordPress",
                    "Elementor",
                ],
                image: {
                    src: NovohitPreview,
                    alt: "Preview of Novohit's website.",
                },
                href: "https://github.com/jamcmich/novohit-website-wordpress#product-catalog",
            },
            {
                title: "Network Graph",
                paragraph: "Developed an online tool to help Arizona State University measure social network" +
                    " behaviors.",
                tags: [
                    "Python",
                    "JavaScript",
                    "OpenPyXL",
                    "SigmaJS",
                    "NetworkX",
                    "Gephi",
                ],
                image: {
                    src: NetworkGraphPreview,
                    alt: "Preview of a Arizona State University's Network Graph.",
                },
                href: "",
            },
            {
                title: "Future Project",
                paragraph: "This is a placeholder. Once I complete the documentation for a future project, I'll add" +
                    " it here!",
                tags: [
                    "Python",
                    "JavaScript",
                    "OpenPyXL",
                    "SigmaJS",
                    "NetworkX",
                    "Gephi",
                ],
                image: {
                    src: "https://via.placeholder.com/300",
                    alt: "Placeholder image.",
                },
                href: "",
            },
        ],
    personal: [
        {
            title: "Google Search Clone",
            paragraph: "A static web application that uses Google’s search engine to render results.",
            tags: [
                "HTML5",
                "CSS3",
                "JavaScript",
                "React",
                "React Router",
                "Axios",
                "Vite",
                "WindiCSS",
            ],
            image: {
                src: GooglePreview,
                alt: "Preview of my Google Search Clone.",
            },
            href: "https://github.com/jamcmich/google-search-clone",
        },
        {
            title: "Future Project",
            paragraph: "This is a placeholder. Once I complete the documentation for a future project, I'll add" +
                " it here!",
            tags: [
                "Python",
                "JavaScript",
                "OpenPyXL",
                "SigmaJS",
                "NetworkX",
                "Gephi",
            ],
            image: {
                src: "https://via.placeholder.com/300",
                alt: "Placeholder image.",
            },
            href: "",
        },
    ],
};

export default { data };