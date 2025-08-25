import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  Palette,
  Code,
  Globe,
  Smartphone,
  Star,
  Award,
  Lightbulb,
  Target,
} from "lucide-react";

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const softSkills = [
    "Creative Concept Development",
    "Time Management & Project Organization",
    "Ability to Simplify Complex Ideas",
    "Clear Communication",
    "Attention to Detail & Precision",
    "Storytelling through Visuals",
  ];

  const designTools = [
    { name: "Canva", color: "#00C4CC", icon: "🎨" },
    { name: "Adobe Illustrator", color: "#FF9A00", icon: "AI" },
    { name: "Figma", color: "#F24E1E", icon: "Fi" },
    { name: "Procreate", color: "#FF6B6B", icon: "🖌️" },
    { name: "Photoshop", color: "#31A8FF", icon: "Ps" },
  ];

  const skillCategories = [
    {
      icon: Palette,
      title: "Graphic Design",
      skills: [
        { name: "Poster Design", level: 95 },
        { name: "Brand Identity", level: 90 },
        { name: "Print Design", level: 95 },
        { name: "Illustration", level: 90 },
      ],
      rotation: -2,
    },
    {
      icon: Globe,
      title: "UI/UX Design",
      skills: [
        { name: "User Research", level: 70 },
        { name: "Wireframing", level: 70 },
        { name: "Prototyping", level: 65 },
        { name: "User Testing", level: 75 },
      ],
      rotation: 1,
    },
    {
      icon: Lightbulb,
      title: "Content & Strategy",
      skills: [
        { name: "Content Writing", level: 90 },
        { name: "Research", level: 95 },
        { name: "Social Media Design", level: 85 },
        { name: "Marketing Strategy", level: 80 },
      ],
      rotation: 2,
    },
  ];

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
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="skills"
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
                animate={{ rotate: [2, -2, 2] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute -top-6 -right-6 vintage-stamp px-3 py-2 text-xs"
              >
                MY SKILLS
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-bold handwriting text-vintage-gradient">
                skills
              </h2>
              <div className="h-1 w-16 bg-vintage-brown mx-auto rounded-full mt-4" />
            </div>
          </motion.div>

          {/* Design Tools Section */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <div className="text-center">
              <div className="vintage-paper p-4 transform rotate-1 inline-block">
                <h3 className="text-2xl handwriting text-vintage-brown">
                  My Toolkit
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {designTools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{
                    scale: 0,
                    rotate: -180,
                    opacity: 0,
                  }}
                  animate={
                    isInView
                      ? { scale: 1, rotate: 0, opacity: 1 }
                      : { scale: 0, rotate: -180, opacity: 0 }
                  }
                  transition={{
                    delay: 0.2 + index * 0.05,
                    duration: 0.3,
                  }}
                  whileHover={{ scale: 1.1, rotate: 5, y: -5 }}
                  className="vintage-paper p-6 text-center border-2 border-vintage-brown/20 transform transition-all duration-300"
                  style={{
                    transform: `rotate(${-3 + index}deg)`,
                  }}
                >
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center text-2xl vintage-gradient rounded-lg">
                    {tool.icon}
                  </div>
                  <p className="typewriter text-sm text-vintage-dark font-medium">
                    {tool.name}
                  </p>

                  {/* Decorative dot */}
                  <div
                    className="absolute -top-1 -right-1 w-3 h-3 rounded-full opacity-60"
                    style={{ backgroundColor: tool.color }}
                  ></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mt-12">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  className="vintage-paper torn-edge-bottom p-8 transition-all duration-300 relative"
                  style={{
                    transform: `rotate(${category.rotation}deg)`,
                  }}
                  whileHover={{
                    transform: "rotate(0deg) scale(1.02)",
                  }}
                >
                  <div className="flex items-center mb-8 space-x-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      className="w-12 h-12 vintage-gradient rounded-lg flex items-center justify-center"
                    >
                      <Icon className="w-6 h-6 text-vintage-cream" />
                    </motion.div>
                    <h3 className="text-xl handwriting text-vintage-brown">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {category.skills.map(
                      (skill, skillIndex) => (
                        <div
                          key={skill.name}
                          className="space-y-2"
                        >
                          <div className="flex justify-between items-center">
                            <span className="typewriter text-vintage-dark">
                              {skill.name}
                            </span>
                            <span className="text-sm text-vintage-brown">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-2 bg-vintage-cream border border-vintage-brown/30 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={
                                isInView
                                  ? { width: `${skill.level}%` }
                                  : { width: 0 }
                              }
                              transition={{
                                delay:
                                  0.8 +
                                  categoryIndex * 0.3 +
                                  skillIndex * 0.1,
                                duration: 1.2,
                                ease: "easeOut",
                              }}
                              className="h-full vintage-gradient relative"
                            >
                              <motion.div
                                animate={{
                                  x: [0, 8, 0],
                                  opacity: [0.6, 1, 0.6],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                                className="absolute right-0 top-0 w-3 h-full bg-white/40"
                              />
                            </motion.div>
                          </div>
                        </div>
                      ),
                    )}
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-2 right-4 w-4 h-4 bg-vintage-red opacity-40 rounded-full"></div>
                  <div className="absolute -bottom-2 left-4 w-3 h-3 bg-vintage-brown opacity-40 transform rotate-45"></div>
                </motion.div>
              );
            })}
          </div>

          {/* Soft Skills */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <div className="text-center">
              <div className="vintage-paper p-4 transform -rotate-1 inline-block relative">
                <h3 className="text-2xl handwriting text-vintage-brown">
                  Soft Skills
                </h3>
                <motion.div
                  animate={{ rotate: [-2, 2, -2] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute -top-4 -right-4 vintage-stamp px-2 py-1 text-xs"
                >
                  ★
                </motion.div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{
                    scale: 0,
                    opacity: 0,
                    rotate: -15,
                  }}
                  animate={
                    isInView
                      ? {
                          scale: 1,
                          opacity: 1,
                          rotate: index % 2 === 0 ? -2 : 2,
                        }
                      : { scale: 0, opacity: 0, rotate: -15 }
                  }
                  transition={{
                    delay: 1.2 + index * 0.1,
                    duration: 0.6,
                  }}
                  whileHover={{ scale: 1.05, rotate: 0, y: -5 }}
                  className="vintage-paper p-4 text-center border-2 border-vintage-brown/20 relative group"
                >
                  <Star className="w-5 h-5 text-vintage-brown mx-auto mb-2" />
                  <p className="typewriter text-sm text-vintage-dark leading-tight">
                    {skill}
                  </p>

                  {/* Hover effect - vintage stamp */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 0.8 }}
                    className="absolute inset-0 vintage-stamp m-1 flex items-center justify-center pointer-events-none"
                  >
                    <Award className="w-6 h-6 text-vintage-cream" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}