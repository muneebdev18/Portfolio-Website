import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import {supabase} from '../config/supabaseClient.js'
const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "muneebdev18@gmail.com",
      href: "mailto:muneebdev18@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 306 2953623",
      href: "tel:+923062953623",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Karachi, Pakistan",
      href: "#",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const {error}  = await supabase.from('contacts').insert([
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }
    ]);
    if(error){
      console.error("Error in Sending Error",error)
      toast({
        title: "Not Send! Something went wrong.",
        description: "Please Try Again.",
      });
    }
    else{
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      console.log("Message sent successfully!")
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
    }
  };



  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision. Feel free to reach out!
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.href}
                initial={{ opacity: 0, x: -50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3 + index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  x: 10,
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="flex items-center gap-4 glass-card p-4 rounded-xl hover:bg-card/80 transition-colors group"
              >
                <motion.div 
                  className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.4 }
                  }}
                >
                  <info.icon className="w-6 h-6 text-primary-foreground" />
                </motion.div>
                <div>
                  <p className="text-sm text-muted-foreground">{info.title}</p>
                  <p className="font-semibold">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e)=>setFormData({...formData,name:e.target.value})}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e)=>setFormData({...formData,email:e.target.value})}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e)=>setFormData({...formData,message:e.target.value})}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
        <div className="py-20 flex justify-center items-center flex-col gap-8">
          <h2 className="text-accent text-3xl font-bold">Who I Am on Paper. Get My CV</h2>
          <div className="flex justify-center items-center">
          <Link
  to="https://drive.google.com/file/d/1Zfpxyl2OY87X7_C2DWjAMI0_v-jlal_f/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="px-4 w-40 text-center py-4  text-accent font-bold bg-secondary rounded-md hover:bg-gray-800"
>
  View CV
</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
