import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Layout, Server, Smartphone, Database, Wrench } from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Layout,
      title: "Frontend Development",
      description: "Building responsive, accessible interfaces with React, TypeScript, and modern CSS",
      skills: ["React.js", "TypeScript", "Tailwind CSS", "Next.js"],
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Creating robust server-side applications and RESTful APIs",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
    },
    {
      icon: Code2,
      title: "UI/UX Implementation",
      description: "Translating designs into pixel-perfect, animated user experiences",
      skills: ["Framer Motion", "GSAP", "CSS Animations", "Figma"],
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Ensuring flawless experiences across all devices and screen sizes",
      skills: ["Responsive Design", "PWA", "Mobile Optimization"],
    },
    {
      icon: Database,
      title: "State Management",
      description: "Implementing efficient data flow and application state control",
      skills: ["Redux", "Context API", "React Query", "Zustand"],
    },
    {
      icon: Wrench,
      title: "Performance Optimization",
      description: "Enhancing speed, SEO, and overall application performance",
      skills: ["Lighthouse", "Code Splitting", "Lazy Loading", "SEO"],
    },
  ];

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
            {[
              "React.js",
              "JavaScript",
              "TypeScript",
              "Node.js",
              "Tailwind CSS",
              "PostgreSQL",
              "Git",
              "AWS",
            ].map((tech, index) => (
              <motion.div
                key={tech}
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
                className="text-center p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-default"
              >
                <p className="font-semibold">{tech}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
