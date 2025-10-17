import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Award } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const milestones = [
    {
      year: "2025 - Present",
      title: "Frontend React Developer",
      description: "Leading frontend development for enterprise applications",
      icon: Rocket,
    },
    {
      year: "2023 - 2025",
      title: "Junior React/MERN Developer",
      description: "Built responsive web applications for diverse clients",
      icon: Code2,
    },
    {
      year: "2023",
      title: "React Js Internship",
      description: "Began professional Web Development career",
      icon: Award,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            className="glass-card p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-4 gradient-text">My Journey</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              With <span className="text-primary font-semibold">2 years of hands-on experience</span> in web development, 
              I’ve had the privilege of working on diverse projects from startup websites to full-scale enterprise applications.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
            I specialize in building modern, responsive web applications using <span className="text-accent">React.js</span> and <span className="text-accent">JavaScript</span>, with a strong focus on creating seamless user experiences backed by clean, maintainable code. Alongside my front-end expertise, I’ve developed numerous backend APIs and CRUD operations using <span className="text-accent">Node.js</span>, <span className="text-accent">Express.js</span>, and <span className="text-accent">MongoDB</span>, ensuring smooth communication between client and server for dynamic, data-driven apps.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3 + index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  x: 10, 
                  transition: { duration: 0.2 }
                }}
                className="glass-card p-6 rounded-xl hover:bg-card/80 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent"
                    whileHover={{ 
                      scale: 1.15,
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.4 }
                    }}
                  >
                    <milestone.icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <div className="flex-1">
                    <p className="text-accent text-sm font-medium mb-1">{milestone.year}</p>
                    <h4 className="text-lg font-semibold mb-2">{milestone.title}</h4>
                    <p className="text-muted-foreground text-sm">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6"
        >
          {[
            { number: "2+", label: "Years Experience" },
            // { number: "1+", label: "Projects Completed" },
            { number: "30+", label: "Happy Clients" },
            { number: "100%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="glass-card p-6 rounded-xl text-center group hover:bg-card/80 transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: 0.7 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <motion.h3 
                className="text-3xl md:text-4xl font-bold gradient-text mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.9 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
