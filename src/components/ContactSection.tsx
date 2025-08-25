import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Heart,
  Star,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mjkebzeq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "2poorva2004@gmail.com",
      href: "mailto:2poorva2004@gmail.com",
      stamp: "MESSAGE",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7056867023",
      href: "tel:+917056867023",
      stamp: "CALL",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gurgaon, India",
      href: "#",
      stamp: "VISIT",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-12 sm:py-16 lg:py-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-8"
          >
            <div className="vintage-paper torn-edge-top torn-edge-bottom p-8 transform -rotate-1 relative mx-auto max-w-md">
              <motion.div
                animate={{ rotate: [1, -1, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute -top-6 -right-6 vintage-stamp px-3 py-2 text-xs"
              >
                GET IN TOUCH
              </motion.div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold handwriting text-vintage-gradient">
                contact
              </h2>
              <div className="h-1 w-16 bg-vintage-brown mx-auto rounded-full mt-4" />
            </div>

            <div className="vintage-paper p-6 transform rotate-1 inline-block relative">
              <p className="text-lg text-vintage-dark max-w-2xl typewriter">
                Let's collaborate and create something beautiful
                together!
                <span className="handwriting text-vintage-brown text-xl ml-2">
                  Drop me a line
                </span>
              </p>

              {/* Decorative hearts */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, 0],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-2 -right-2 text-vintage-red"
              >
                <Heart className="w-4 h-4 fill-current" />
              </motion.div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="space-y-8"
            >
              <div className="vintage-paper p-6 transform -rotate-1 torn-edge-top">
                <h3 className="text-3xl handwriting text-vintage-brown mb-6">
                  Let's Connect
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.a
                        key={info.label}
                        href={info.href}
                        initial={{
                          x: -50,
                          opacity: 0,
                          rotate: -10,
                        }}
                        animate={
                          isInView
                            ? { x: 0, opacity: 1, rotate: 0 }
                            : {
                                x: -50,
                                opacity: 0,
                                rotate: -10,
                              }
                        }
                        transition={{
                          delay: 0.3 + index * 0.1,
                          duration: 0.6,
                        }}
                        whileHover={{
                          x: 10,
                          scale: 1.02,
                          rotate: 2,
                        }}
                        className="vintage-paper p-6 flex items-center space-x-4 transition-all duration-300 relative group block"
                      >
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.8 }}
                          className="w-12 h-12 vintage-gradient rounded-lg flex items-center justify-center"
                        >
                          <Icon className="w-6 h-6 text-vintage-cream" />
                        </motion.div>
                        <div>
                          <div className="text-sm typewriter text-vintage-dark opacity-70">
                            {info.label}
                          </div>
                          <div className="text-vintage-brown typewriter font-medium">
                            {info.value}
                          </div>
                        </div>

                        {/* Vintage stamp */}
                        <div className="absolute -top-2 -right-2 vintage-stamp px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                          {info.stamp}
                        </div>

                        {/* Decorative corner */}
                        <div className="absolute bottom-2 right-2 w-2 h-2 bg-vintage-red opacity-40 rounded-full"></div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              className="space-y-8"
            >
              <div className="vintage-paper p-6 transform rotate-1 torn-edge-bottom relative">
                <h3 className="text-3xl handwriting text-vintage-brown mb-6">
                  Send a Message
                </h3>

                {/* Decorative star */}
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                  }}
                  className="absolute -top-4 -left-4 text-vintage-brown"
                >
                  <Star className="w-6 h-6" />
                </motion.div>

                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="space-y-2"
                    >
                      <label
                        htmlFor="name"
                        className="text-sm typewriter text-vintage-dark"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="vintage-paper border-2 border-vintage-brown/30 focus:border-vintage-brown typewriter"
                        required
                      />
                    </motion.div>

                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="space-y-2"
                    >
                      <label
                        htmlFor="email"
                        className="text-sm typewriter text-vintage-dark"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="vintage-paper border-2 border-vintage-brown/30 focus:border-vintage-brown typewriter"
                        required
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label
                      htmlFor="subject"
                      className="text-sm typewriter text-vintage-dark"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="vintage-paper border-2 border-vintage-brown/30 focus:border-vintage-brown typewriter"
                      required
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label
                      htmlFor="message"
                      className="text-sm typewriter text-vintage-dark"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="vintage-paper border-2 border-vintage-brown/30 focus:border-vintage-brown typewriter resize-none"
                      required
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02, rotate: 1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full vintage-button border-2 border-vintage-brown hover:shadow-xl transition-all duration-300"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      <span className="typewriter">
                        Send Message
                      </span>
                    </Button>
                  </motion.div>
                </motion.form>
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="text-center pt-16"
          >
            <div className="vintage-paper p-8 transform -rotate-1 inline-block torn-edge-top relative">
              <p className="typewriter text-vintage-dark">
                © 2025 Poorva Yadav. Designed & Built with
                <Heart className="w-4 h-4 inline mx-1 fill-vintage-red text-vintage-red" />
                using creativity and coffee
              </p>

              {/* Final decorative elements */}
              <div className="absolute -top-2 left-4 w-3 h-3 bg-vintage-brown opacity-40 rounded-full"></div>
              <div className="absolute -bottom-2 right-4 w-2 h-2 bg-vintage-red opacity-40 transform rotate-45"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}