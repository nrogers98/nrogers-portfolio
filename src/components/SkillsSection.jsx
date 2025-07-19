import { useState } from "react"
import { cn } from "@/lib/utils"
import html from "@/images/icons/html.svg"
import css from "@/images/icons/css.svg"
import javascript from "@/images/icons/javascript.svg"
import typescript from "@/images/icons/typescript.svg"
import react from "@/images/icons/react.svg"   
import node from "@/images/icons/nodejs.svg"
import mongodb from "@/images/icons/mongodb.svg"
import postgres from "@/images/icons/postgresql.svg"
import mysql from "@/images/icons/mysql.svg"
import php from "@/images/icons/php.png"
import git from "@/images/icons/git.svg"
import docker from "@/images/icons/docker.svg"
import vscode from "@/images/icons/vscode.svg"
import csharp from "@/images/icons/csharp.svg"
import java from "@/images/icons/java.svg"
import python from "@/images/icons/python.svg"
import go from "@/images/icons/go.svg"


const skills = [
    // Frontend
    { name: "HTML", icon: html, category: "frontend", usability: "good"},
    { name: "CSS", icon: css, category: "frontend", usability: "good"},
    { name: "JavaScript", icon: javascript, category: "frontend", usability: "good" },    
    { name: "Typescript", icon: typescript, category: "frontend", usability: "fair" }, 
    { name: "React", icon: react, category: "frontend", usability: "good" },    

    // Backend
    { name: "Node.js", icon: node, category: "backend", usability: "good" },    
    { name: "MongoDB", icon: mongodb, category: "bcakend", usability: "fair" },    
    { name: "PostgresSQL", icon: postgres, category: "backend", usability: "fair" },    
    { name: "MySql", icon: mysql, category: "backend", usability: "good" },
    { name: "PHP", icon: php, category: "backend", usability: "good"},

    //Tools
    { name: "Git/Github", icon: git, category: "tools", usability: "good" },    
    { name: "Docker", icon: docker, category: "tools", usability: "fair" },
    { name: "VS Code", icon: vscode, category: "tools", usability: "good" },    

    //Languages
    { name: "C#", icon: csharp, category: "languages", usability: "good" },    
    { name: "Java", icon: java, category: "languages", usability: "good" },
    { name: "Python", icon: python, category: "languages", usability: "good" },  
    { name: "Go", icon: go, category: "languages", usability: "fair" },  
];

const categories = ["all", "frontend", "backend", "tools", "languages"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all")
    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category 
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary/70 text-foreground hover:bd-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div 
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                                <svg className="">
                                    <image className="w-70 h-40" xlinkHref={skill.icon}/>
                                </svg>
                            </div>
                            <div className="text-center mt-1">
                                <span className={`font-bold text-lg skill-level-${skill.usability}`}>{skill.usability}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}