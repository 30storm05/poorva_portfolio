import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  Heart,
  Coffee,
  Zap,
  Camera,
  Palette,
  Code,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "5+", label: "Projects Completed" },
    { number: "99%", label: "Client Satisfaction" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion Driven",
      description:
        "I believe great design comes from genuine passion and dedication to craft.",
      rotation: -2,
    },
    {
      icon: Coffee,
      title: "Detail Oriented",
      description:
        "Every pixel matters. I obsess over the details that make experiences exceptional.",
      rotation: 1,
    },
    {
      icon: Zap,
      title: "Innovation First",
      description:
        "Always exploring new technologies and design patterns to stay ahead of trends.",
      rotation: -1,
    },
  ];

  const interests = [
    { icon: Camera, label: "Reading" },
    { icon: Palette, label: "Art & Design" },
    { icon: Code, label: "Generative AI" },
  ];

  return (
    <section
      id="about"
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
            <div className="vintage-paper torn-edge-top p-8 transform -rotate-1 relative mx-auto max-w-md">
              <motion.div
                animate={{ rotate: [1, -1, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute -top-6 -right-6 vintage-stamp px-3 py-2 text-xs"
              >
                ABOUT ME
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-bold text-vintage-gradient handwriting">
                about
              </h2>
              <div className="h-1 w-16 bg-vintage-brown mx-auto rounded-full mt-4" />
            </div>
          </motion.div>

          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left side - Personal story */}
            <motion.div
              variants={itemVariants}
              className="space-y-8"
            >
              <div className="vintage-paper torn-edge-bottom p-8 transform rotate-1 relative">
                <div className="space-y-6">
                  <h3 className="text-3xl handwriting text-vintage-brown mb-6">
                    My Journey
                  </h3>
                  <p className="text-lg text-vintage-dark leading-relaxed typewriter">
                    With over 2 years of experience in digital
                    design and AI Automation, I specialize in
                    creating intuitive user experiences and
                    bringing creative visions to life through
                    design.
                  </p>
                  <p className="text-lg text-vintage-dark leading-relaxed typewriter">
                    My background in AI & Machine Learning
                    allows me to automate design processes,
                    bringing efficiency and innovation to every
                    project I work on.
                  </p>
                  <p className="text-lg text-vintage-dark leading-relaxed typewriter">
                    When I'm not designing or creating, you'll
                    find me exploring new technologies,
                    sketching ideas, or enjoying a good cup of
                    coffee while planning the next big project.
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-2 right-4 w-6 h-6 bg-vintage-red opacity-40 rounded-full"></div>
                <div className="absolute -bottom-2 left-4 w-4 h-4 bg-vintage-brown opacity-40 transform rotate-45"></div>
              </div>

              {/* Interests section */}
              <div className="vintage-paper p-6 transform -rotate-2 relative">
                <h4 className="handwriting text-xl text-vintage-brown mb-4 text-center">
                  What I Love
                </h4>
                <div className="flex justify-center space-x-6">
                  {interests.map(
                    ({ icon: Icon, label }, index) => (
                      <motion.div
                        key={label}
                        initial={{ scale: 0, rotate: -90 }}
                        animate={
                          isInView
                            ? { scale: 1, rotate: 0 }
                            : { scale: 0, rotate: -90 }
                        }
                        transition={{
                          delay: 0.3 + index * 0.1,
                          duration: 0.3,
                        }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="text-center"
                      >
                        <div className="w-12 h-12 vintage-gradient rounded-full flex items-center justify-center mb-2 mx-auto">
                          <Icon className="w-6 h-6 text-vintage-cream" />
                        </div>
                        <span className="text-sm typewriter text-vintage-dark">
                          {label}
                        </span>
                      </motion.div>
                    ),
                  )}
                </div>
              </div>
            </motion.div>

            {/* Right side - Stats and photo */}
            <motion.div
              variants={itemVariants}
              className="space-y-8"
            >
              {/* Profile photo area */}
              <div className="flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.02, rotate: 2 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="scrapbook-photo w-80 h-96 overflow-hidden relative"
                >
                  <ImageWithFallback
                    src="/images/about/me.jpg"
                    alt="Poorva Yadav - Designer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <p className="handwriting text-vintage-cream text-xl absolute bottom-8 left-4 text-shadow-lg">
                    this is me!
                  </p>

                  {/* Polaroid-style label */}
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 vintage-paper px-4 py-2 rotate-2">
                    <p className="typewriter text-sm text-vintage-dark">
                      Poorva • 2024
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Stats cards */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{
                      scale: 0.8,
                      opacity: 0,
                      rotate: -10,
                    }}
                    animate={
                      isInView
                        ? {
                            scale: 1,
                            opacity: 1,
                            rotate: index % 2 === 0 ? -2 : 2,
                          }
                        : {
                            scale: 0.8,
                            opacity: 0,
                            rotate: -10,
                          }
                    }
                    transition={{
                      delay: 0.8 + index * 0.1,
                      duration: 0.6,
                    }}
                    whileHover={{ scale: 1.05, rotate: 0 }}
                    className="vintage-paper p-6 text-center transition-all duration-300 border-2 border-vintage-brown/20"
                  >
                    <div className="text-3xl font-bold text-vintage-gradient mb-2 handwriting">
                      {stat.number}
                    </div>
                    <div className="text-sm typewriter text-vintage-dark">
                      {stat.label}
                    </div>

                    {/* Decorative dot */}
                    <div
                      className={`absolute ${index % 2 === 0 ? "-top-2 -right-2" : "-bottom-2 -left-2"} w-4 h-4 bg-vintage-red opacity-60 rounded-full`}
                    ></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Values section - scrapbook style */}
          <motion.div
            variants={itemVariants}
            className="space-y-12"
          >
            <div className="text-center">
              <div className="vintage-paper p-6 transform rotate-1 inline-block">
                <h3 className="text-3xl handwriting text-vintage-brown">
                  What Drives Me
                </h3>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ y: 50, opacity: 0, rotate: -10 }}
                    animate={
                      isInView
                        ? {
                            y: 0,
                            opacity: 1,
                            rotate: value.rotation,
                          }
                        : { y: 50, opacity: 0, rotate: -10 }
                    }
                    transition={{
                      delay: 0.5 + index * 0.1,
                      duration: 0.4,
                    }}
                    whileHover={{
                      y: -10,
                      rotate: 0,
                      scale: 1.02,
                    }}
                    className="vintage-paper torn-edge-top p-8 text-center group transition-all duration-300 relative"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      className="w-16 h-16 vintage-gradient rounded-full flex items-center justify-center mx-auto mb-6 relative"
                    >
                      <Icon className="w-8 h-8 text-vintage-cream" />
                    </motion.div>

                    <h4 className="text-xl mb-4 handwriting text-vintage-brown">
                      {value.title}
                    </h4>
                    <p className="typewriter text-vintage-dark leading-relaxed text-sm">
                      {value.description}
                    </p>

                    {/* Decorative vintage elements */}
                    <div className="absolute top-2 right-2 w-3 h-3 bg-vintage-red opacity-40 rounded-full"></div>
                    <div className="absolute bottom-2 left-2 w-2 h-2 bg-vintage-brown opacity-40 transform rotate-45"></div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}