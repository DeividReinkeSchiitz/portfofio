'use server';

export interface Root {
    frameworks: Framework[]
    websites: Website[]
    mobiles: Mobile[]
    others: Other[]
}

export interface Framework {
    name: string
    icon: string
    color: string
}

export interface Website {
    name: string
    description: string
    image: string
    live: string
    github: string
    stacks: Stack[]
}

export interface Stack {
    name: string
    description: string
    icon: string
    color: string
}

export interface Mobile {
    name: string
    description: string
    icon: string
    images: string[]
    github: string
    stacks: Stack[]
}

export interface Other {
    name: string
    description: string
    image: string
    stacks: string[]
}

export default async function getStaticData() {
    return {
        frameworks: [
            {
                name: "Postgres",
                icon: "postgres.svg",
                color: "#008BB9"
            },
            {
                name: "Docker",
                icon: "docker.svg",
                color: "#1D63ED"
            },
            {
                name: "Node.js",
                icon: "node.svg",
                color: "#3C873A"
            },
            {
                name: "React",
                icon: "react.svg",
                color: "#58C4DC"
            },
            {
                name: "TypeScript",
                icon: "typescript.svg",
                color: "#3178C6"
            },
            {
                name: "Golang",
                icon: "golang.svg",
                color: "#4DD0E1"
            },
            {
                name: "C",
                icon: "c.svg",
                color: "#3949AB"
            },
            {
                name: "git",
                icon: "git.svg",
                color: "#F4511E"
            }
        ],
        websites: [
            {
                name: "Administrator Panel",
                description: "Administrative panel model developed to <span> meet the need </span/> to save weekly reports and artwork related to each client.",
                image: "admin_panel.svg",
                live: "https://azonfunction.firebaseapp.com/Login#/",
                github: "https://github.com/DeividReinkeSchiitz/AdminPanel",
                stacks: [
                    {
                        name: "Firebase",
                        description: "Backend Tool",
                        icon: "firebase.svg",
                        color: "#FF8F00"
                    },
                    {
                        name: "React",
                        description: "Javascript Library",
                        icon: "react.svg",
                        color: "#58C4DC"
                    },
                    {
                        name: "Material UI",
                        description: "React UI Framework",
                        icon: "materialui.svg",
                        color: "#0073E6"
                    },
                    {
                        name: "Styled-Components",
                        description: "CSS in JS",
                        icon: "styled.svg",
                        color: "#F456FF"
                    },
                    {
                        name: "TypeScript",
                        description: "Javascript Superset",
                        icon: "typescript.svg",
                        color: "#3178C6"
                    }
                ]
            },
            {
                name: "Portfolio",
                description: "My personal developer portfolio, designed to showcase my <span>projects</span> and the technologies I <span>specialize </span>in.",
                image: "portfolio.svg",
                live: "schiitz.com",
                github: "https://github.com/DeividReinkeSchiitz/portpofio",
                stacks: [
                    {
                        name: "React",
                        description: "Javascript Library",
                        icon: "react.svg",
                        color: "#58C4DC"
                    },
                    {
                        name: "TypeScript",
                        description: "Javascript Superset",
                        icon: "typescript.svg",
                        color: "#3178C6"
                    },
                    {
                        name: "Tailwind CSS",
                        description: "Utility-first CSS framework",
                        icon: "tailwind.svg",
                        color: "#0ea5e9"
                    },
                    {
                        name: "Next.js",
                        description: "React Framework",
                        icon: "next.svg",
                        color: "#212121"
                    },
                    {
                        name: "Oracle Cloud",
                        description: "Cloud Service",
                        icon: "oracle.svg",
                        color: "#f22327"
                    },
                ]
            },
            {
                name: "Twitter Clone",
                description: "Twitter clone project created to learn new technologies, libraries and project structure.",
                image: "twitter_clone.svg",
                live: "https://stoic-northcutt-31c14a.netlify.app/",
                github: "https://github.com/DeividReinkeSchiitz/TwitterClone",
                stacks: [
                    {
                        name: "React",
                        description: "Javascript Library",
                        icon: "react.svg",
                        color: "#58C4DC"
                    },
                    {
                        name: "Styled-Components",
                        description: "CSS in JS",
                        icon: "styled.svg",
                        color: "#F456FF"
                    },
                    {
                        name: "TypeScript",
                        description: "Javascript Superset",
                        icon: "typescript.svg",
                        color: "#3178C6"
                    }
                ]
            }
        ],
        mobiles: [
            {
                name: "Qacademic",
                description: "Mobile App made to visualize grades and download  class material by high school students from a Federal Institute in Brazil. The server was made Web Scrapping the official website from the Institution.",
                icon: "qacademic_icon.svg",
                images: ["qacademic1.png", "qacademic2.png"],
                github: "https://github.com/DeividReinkeSchiitz/Qacademic",
                stacks: [
                    {
                        name: "React Native",
                        description: "Mobile Framework",
                        icon: "react.svg",
                        color: "#58C4DC"
                    },
                    {
                        name: "TypeScript",
                        description: "Javascript Superset",
                        icon: "typescript.svg",
                        color: "#3178C6"
                    },
                    {
                        name: "Node.js",
                        description: "Javascript Runtime",
                        icon: "node.svg",
                        color: "#3C873A"
                    },
                    {
                        name: "Web Scraping",
                        description: "Data Extraction",
                        icon: "web_scraping.svg",
                        color: "#FF8F00"
                    },
                    {
                        name: "CRUD",
                        description: "Create|Update|Update|Delete",
                        icon: "crud.svg",
                        color: "#5C7CFA"
                    }
                ]
            },
            {
                name: "Pill DIspenser",
                description: "The Pill Dispenser Medication App is a server-side project built on a real-time Firebase backend. It is designed to integrate seamlessly with hardware dispensers powered by ESP32, Arduino, or ARM processors, ensuring efficient and reliable medication management.",
                icon: "pill_icon.svg",
                images: ["pill1.png", "pill2.png", "pill3.png"],
                github: "https://github.com/DeividReinkeSchiitz/PillDispenser",
                stacks: [
                    {
                        name: "Firebase",
                        description: "Backend Tool",
                        icon: "firebase.svg",
                        color: "#FF8F00"
                    },
                    {
                        name: "TypeScript",
                        description: "Javascript Superset",
                        icon: "typescript.svg",
                        color: "#3178C6"
                    },
                    {
                        name: "Node.js",
                        description: "Javascript Runtime",
                        icon: "node.svg",
                        color: "#3C873A"
                    },
                    {
                        name: "React Native",
                        description: "Mobile Framework",
                        icon: "react.svg",
                        color: "#58C4DC"
                    },
                    {
                        name: "Expo",
                        description: "Ecosystem of Tools",
                        icon: "expo.svg",
                        color: "#000000"
                    },
                    {
                        name: "CRUD",
                        description: "Create|Update|Update|Delete",
                        icon: "crud.svg",
                        color: "#5C7CFA"
                    },
                    {
                        name: "Styled-Components",
                        description: "CSS in JS",
                        icon: "styled.svg",
                        color: "#F456FF"
                    },
                ]
            },
            {
                name: "Covid Data VIew",
                description: "Unofficial App made during quarantine to see Covid  Statistics. Created \n" +
                    "over a open source rapid api interface.",
                icon: "",
                images: ["covid1.png", "covid2.png", "covid3.png"],
                github: "https://github.com/DeividReinkeSchiitz/covid-19",
                stacks: [
                    {
                        name: "React Native",
                        description: "Mobile Framework",
                        icon: "react.svg",
                        color: "#58C4DC"
                    },
                    {
                        name: "TypeScript",
                        description: "Javascript Superset",
                        icon: "typescript.svg",
                        color: "#3178C6"
                    }, {
                        name: "Expo",
                        description: "Ecosystem of Tools",
                        icon: "expo.svg",
                        color: "#000000"
                    },
                    {
                        name: "CRUD",
                        description: "Create|Update|Update|Delete",
                        icon: "crud.svg",
                        color: "#5C7CFA"
                    }
                ]
            }
        ],
        others: [
            {
                name: "Structured C code",
                description: "Creation of a well-structured C project that adheres to Unix-style. Logs, Test, error handler, bash scripts, bins, static and dynamic libraries, make files and Data Structures.",
                image: "c_code.svg",
                stacks: ["C", "Unix", "Makefile", "Bash", "Data Structures", "Static Libraries", "Dynamic Libraries", "Logs", "Google Test", "Error Handler", "Valgrind", "GDB"]
            },
            {
                name: "Structured C code",
                description: "Creation of a well-structured C project that adheres to Unix-style. Logs, Test, error handler, bash scripts, bins, static and dynamic libraries, make files and Data Structures.",
                image: "c_code.svg",
                stacks: ["C", "Unix", "Makefile", "Bash", "Data Structures", "Static Libraries", "Dynamic Libraries", "Logs", "Google Test", "Error Handler", "Valgrind", "GDB"]
            },
            {
                name: "Structured C code",
                description: "Creation of a well-structured C project that adheres to Unix-style. Logs, Test, error handler, bash scripts, bins, static and dynamic libraries, make files and Data Structures.",
                image: "c_code.svg",
                stacks: ["C", "Unix", "Makefile", "Bash", "Data Structures", "Static Libraries", "Dynamic Libraries", "Logs", "Google Test", "Error Handler", "Valgrind", "GDB"]
            }
        ]
    }
}