import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration",
      category: "fullstack",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      link: "#",
      github: "#",
    },
    {
      title: "Task Management App",
      description: "Real-time collaborative task manager with drag-and-drop functionality",
      category: "frontend",
      tech: ["React", "TypeScript", "Tailwind", "Firebase"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      link: "#",
      github: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather forecast application with beautiful UI animations",
      category: "frontend",
      tech: ["React", "API Integration", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
      link: "#",
      github: "#",
    },
    {
      title: "Social Media Analytics",
      description: "Dashboard for tracking social media metrics and engagement",
      category: "fullstack",
      tech: ["React", "D3.js", "Express", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      link: "#",
      github: "#",
    },
    {
      title: "Portfolio CMS",
      description: "Headless CMS for managing portfolio content with modern UI",
      category: "fullstack",
      tech: ["React", "Next.js", "Prisma", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&h=600&fit=crop",
      link: "#",
      github: "#",
    },
    {
      title: "Fitness Tracker",
      description: "Mobile-responsive fitness tracking app with workout plans",
      category: "frontend",
      tech: ["React", "PWA", "Chart.js"],
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
      link: "#",
      github: "#",
    },
  ];

  const categories = ["all", "frontend", "fullstack"];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            A selection of my recent work showcasing various technologies and approaches
          </p>

          {/* Filter Buttons */}
          <div className="flex gap-4 justify-center flex-wrap">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium capitalize transition-all ${
                  filter === category
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                    : "glass-card hover:bg-card/80"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="glass-card rounded-xl overflow-hidden group hover:bg-card/80 transition-all"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end justify-center gap-4 pb-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-primary hover:bg-primary/80 transition-colors"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ scale: 1.1, y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <ExternalLink className="w-5 h-5 text-primary-foreground" />
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-primary hover:bg-primary/80 transition-colors"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ scale: 1.1, y: 0, opacity: 1 }}
                    transition={{ delay: 0.15 }}
                  >
                    <Github className="w-5 h-5 text-primary-foreground" />
                  </motion.a>
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
