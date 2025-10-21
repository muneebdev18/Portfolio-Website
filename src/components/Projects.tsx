import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import Catholic from '../assets/projects/Catholic.png'
const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Catholic Grapevine",
      description: "Full-stack solution with React, Node.js, and Stripe integration",
      category: "fullstack",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      image: Catholic,
      link: "https://thecatholicgrapevine.com/",
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

  const categories = ["all", "websites", "dashboards"];

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
           ease: [0.22, 1, 0.36, 1],
         }}
         className="relative bg-gradient-to-b from-white/10 to-white/5 
                    backdrop-blur-xl border border-white/10 
                    rounded-2xl shadow-[0_0_25px_rgba(255,255,255,0.05)]
                    overflow-hidden group hover:scale-[1.02] 
                    transition-all duration-500 hover:border-white/20"
       >
         {/* Image Section */}
         <div className="relative overflow-hidden">
           <motion.img
             src={project.image}
             alt={project.title}
             className="w-full h-52 object-cover rounded-t-2xl transition-transform duration-700 group-hover:scale-110"
           />
       
           {/* Overlay Buttons */}
           <motion.div
             className="absolute inset-0 flex items-center justify-center gap-4 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
             initial={{ opacity: 0 }}
             whileHover={{ opacity: 1 }}
           >
             <motion.a
               href={project.link}
               target="_blank"
               rel="noopener noreferrer"
               className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 transition-all shadow-lg shadow-blue-500/30"
             >
               <ExternalLink className="w-5 h-5 text-white" />
             </motion.a>
             <motion.a
               href={project.github}
               target="_blank"
               rel="noopener noreferrer"
               className="p-3 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 hover:opacity-90 transition-all shadow-lg shadow-gray-800/40"
             >
               <Github className="w-5 h-5 text-white" />
             </motion.a>
           </motion.div>
         </div>
       
         {/* Content Section */}
         <div className="p-6">
           <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
             {project.title}
           </h3>
           <p className="text-gray-300 text-sm mb-4 leading-relaxed">
             {project.description}
           </p>
       
           <div className="flex flex-wrap gap-2">
             {project.tech.map((tech) => (
               <span
                 key={tech}
                 className="px-3 py-1 text-xs rounded-full 
                            text-accent font-bold border border-white/20 
                            bg-primary/10
                            backdrop-blur-sm hover:bg-white/20 transition-colors
                            cursor-pointer"
               >
                 {tech}
               </span>
             ))}
           </div>
         </div>
       
         {/* Glow Border Effect */}
         <div className="absolute inset-0 rounded-2xl pointer-events-none border border-transparent group-hover:border-blue-500/30 transition-all duration-500"></div>
       </motion.div>
       
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
