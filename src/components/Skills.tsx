import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Layout, Server, Smartphone, Database, Wrench } from "lucide-react";
import Bootstrap from '../assets/tech-icons/Bootstrap.png'
import Git from '../assets/tech-icons/Git.png'
import Js from '../assets/tech-icons/js.png'
import MongoDB from '../assets/tech-icons/mongodb.png'
import Next from '../assets/tech-icons/nextjs.png'
import Node from '../assets/tech-icons/nodejs.png'
import React from '../assets/tech-icons/react.png'
import Redux from '../assets/tech-icons/redux.png'
import Tailwind from '../assets/tech-icons/tailwind.png'
const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Layout,
      title: "Frontend Development",
      description: "Building responsive, accessible interfaces with React, Javascript, and modern CSS",
      skills: ["React.js", "Javascript", "Tailwind CSS", "Next.js"],
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Creating robust server-side applications and RESTful APIs",
      skills: ["Node.js", "Express", "MongoDB", "Rest API's"],
    },
    {
      icon: Code2,
      title: "UI/UX Implementation",
      description: "Translating designs into pixel-perfect, animated user experiences",
      skills: ["Framer Motion", "CSS Animations", "Figma"],
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Ensuring flawless experiences across all devices and screen sizes",
      skills: ["Responsive Design", "Mobile Optimization"],
    },
    {
      icon: Database,
      title: "State Management",
      description: "Implementing efficient data flow and application state control",
      skills: ["Redux", "Redux Toolkit", "SWR", "React Query"],
    },
    {
      icon: Wrench,
      title: "Performance Optimization",
      description: "Enhancing speed, SEO, and overall application performance",
      skills: ["Code Splitting", "Lazy Loading", "SEO"],
    },
  ];

  const techIcons = [
    {
      id:1,
      name: "React.js",
      img:React
    },
    {
      id:2,
      name: "Next.js",
      img:Next
    },
    {
      id:3,
      name: "JavaScript",
      img:Js
    },
    {
      id:4,
      name: "Node.js",
      img:Node
    },
    {
      id:5,
      name: "Tailwind CSS",
      img:Tailwind
    },
    // {
    //   id:6,
    //   name: "Bootstrap",
    //   img:Bootstrap
    // },
    {
      id:7,
      name: "MongoDB",
      img:MongoDB
    },
    {
      id:8,
      name: "Redux",
      img:Redux
    },
    {
      id:9,
      name: "Git",
      img:Git
    }
  ]
  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive web development services powered by modern technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                y: -15,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className="glass-card p-8 rounded-xl group hover:bg-card/80 transition-all"
            >
              <motion.div 
                className="mb-6"
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
              </motion.div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.01 }}
          className="mt-20 glass-card p-8 rounded-2xl"
        >
          <motion.h3 
            className="text-2xl font-bold mb-6 text-center gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            Tech Stack
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techIcons?.map((tech, index) => (
              <motion.div
                key={tech?.id}
                initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 1 + index * 0.08,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.1,
                  y: -5,
                  backgroundColor: "hsl(var(--secondary))",
                  transition: { duration: 0.2 }
                }}
                className="flex justify-center flex-col items-center p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-default"
              >
                <img src={tech.img} alt={tech.name} className="w-[70px] h-[70px] object-cover"/>
                <p className="font-semibold">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
