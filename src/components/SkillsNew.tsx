"use client";

import { motion } from "framer-motion";
import {
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiNodedotjs,
    SiPostgresql,
    SiMongodb,
    SiJavascript,
    SiGithub,
} from "react-icons/si";
import Git from '../assets/tech-icons/Git.png'
import Js from '../assets/tech-icons/js.png'
import MongoDB from '../assets/tech-icons/mongodb.png'
import Next from '../assets/tech-icons/nextjs.png'
import Node from '../assets/tech-icons/nodejs.png'
import React from '../assets/tech-icons/react.png'
import Redux from '../assets/tech-icons/redux.png'
import Tailwind from '../assets/tech-icons/tailwind.png'
const skills = [
    { name: "React", category: "Frontend", level: 90, icon: <img className="w-7" src={React}/> },
    { name: "Next Js", category: "Full Stack", level: 85, icon: <img className="w-7" src={Next}/> },
    { name: "Node.js", category: "Backend", level: 60, icon: <img className="w-7" src={Node}/> },
    { name: "Javascript", category: "Language", level: 80, icon: <img className="w-7" src={Js}/> },
    { name: "Tailwind CSS", category: "Frontend", level: 80, icon: <img className="w-7" src={Tailwind}/> },
    { name: "Redux", category: "State Management", level: 90, icon: <img className="w-7" src={Redux}/> },
    { name: "MongoDB", category: "Database", level: 60, icon: <img className="w-7" src={MongoDB}/> },
    { name: "Github", category: "DevOps", level: 80, icon: <img className="w-7" src={Git}/> },
];

const SkillsNew = () => {
    return (
        <section id="skills" className="py-20">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center mb-4"
            >
                Skills & Technologies
            </motion.h2>

            <p className="text-center  mb-12">
                The tools and technologies I use to bring ideas to life
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-10 lg:px-24">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                    >
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-gray-100 rounded-full">
                                    {skill.icon}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-accent dark:text-white">
                                        {skill.name}
                                    </h4>
                                    <p className="text-sm dark:text-gray-400">
                                        {skill.category}
                                    </p>
                                </div>
                            </div>
                            <span className="text-sm font-bold">
                                {skill.level}%
                            </span>
                        </div>

                        {/* Progress bar */}
                        <div className="w-full bg-gray-200 dark:bg-neutral-800 h-2 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]"
                            ></motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Icons row at bottom */}
            <div className="flex flex-wrap justify-center gap-6 mt-16">
                {skills.map((skill, i) => (
                    <motion.div
                        title={skill.name}
                        key={i}
                        whileHover={{ y: -15, scale: 1.5 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        // transition={{ delay: i * 0.05 }}
                        viewport={{ once: true }}
                        className="p-4 bg-gray-100 dark:bg-neutral-900 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                    >
                        {skill.icon}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default SkillsNew;