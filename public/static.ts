'use client';

export interface Root {
    frameworks: Framework[]
    websites: Website[]
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
    stack: Stack[]
}

export interface Stack {
    name: string
    description: string
    icon: string
    color: string
}

export const root: Root = {
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
            description: "Administrative panel model developed to meet the need to save weekly reports and artwork related to each client.",
            image: "admin_panel.svg",
            live: "https://azonfunction.firebaseapp.com/Login#/",
            github: "https://github.com/DeividReinkeSchiitz/AdminPanel",
            stack: [
                {
                    name:"Firebase",
                    description: "Backend Tool",
                    icon: "firebase.svg",
                    color: "#FF8F00"
                },
                {
                    name:"React",
                    description: "Javascript Library",
                    icon: "react.svg",
                    color: "#58C4DC"
                },
                {
                    name:"Material UI",
                    description: "React UI Framework",
                    icon: "materialui.svg",
                    color: "#0073E6"
                },
                {
                    name:"Styled-Components",
                    description: "CSS in JS",
                    icon: "styled.svg",
                    color: "#F456FF"
                },
                {
                    name:"TypeScript",
                    description: "Javascript Superset",
                    icon: "typescript.svg",
                    color: "#3178C6"
                }
            ]
        },
        {
            name: "Portfolio",
            description: "My personal developer portfolio, designed to showcase my projects and the technologies I specialize in.",
            image: "protfolio.svg",
            live: "schiitz.com",
            github: "https://github.com/DeividReinkeSchiitz/TwitterClone",
            stack: [
                {
                    name:"React",
                    description: "Javascript Library",
                    icon: "react.svg",
                    color: "#58C4DC"
                },
                {
                    name:"Styled-Components",
                    description: "CSS in JS",
                    icon: "styled.svg",
                    color: "#F456FF"
                },
                {
                    name:"TypeScript",
                    description: "Javascript Superset",
                    icon: "typescript.svg",
                    color: "#3178C6"
                }
            ]
        },
        {
            name: "Twitter Clone",
            description: "Twitter clone project created to learn new technologies, libraries and project structure.",
            image: "twitter_clone.svg",
            live: "https://stoic-northcutt-31c14a.netlify.app/",
            github: "https://github.com/DeividReinkeSchiitz/TwitterClone",
            stack: [
                {
                    name:"React",
                    description: "Javascript Library",
                    icon: "react.svg",
                    color: "#58C4DC"
                },
                {
                    name:"Styled-Components",
                    description: "CSS in JS",
                    icon: "styled.svg",
                    color: "#F456FF"
                },
                {
                    name:"TypeScript",
                    description: "Javascript Superset",
                    icon: "typescript.svg",
                    color: "#3178C6"
                }
            ]
        }
    ]
}