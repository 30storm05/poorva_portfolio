import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
    {
      title: "UI/UX & Graphic Design Intern",
      company: "What Next Experiences",
      location: "Chandigarh, India",
      period: "June 2025 - Present",
      description:
        "Leading design initiatives for brand identity projects, creating compelling visual narratives that resonate with target audiences.",
      achievements: [
        "Design weekly whatsapp and instagram post targeting the brand visions",
        "Research and analyse weekly workshops and market trends to promote them.",
        "Give hands-on workshop and creative session to clients related to various art activities.",
      ],
      stamp: "CURRENT",
      driveLink:
        "https://drive.google.com/drive/folders/1mRwcWYdlpxwxXJ_BYKci4qJb6g0HVjHZ",
    },
    {
      title: "Joint Secratary and Head Content Designer",
      company: "CAC Club",
      location: "Chandigarh University, India",
      period: "May 2024 - Oct 2024",
      description:
        "Handled overall conduct of activities and working of the universities biggest club.",
      achievements: [
        "Conducted over 20 events with flagships and sponsors including internal hackathon for SIH.",
        "Designed posters and shot videos to advertise the club and achievements.",
        "Learned about team building and learship responsibilities",
      ],
      stamp: "Design & Management ",
      driveLink:
        "https://drive.google.com/drive/https://drive.google.com/drive/folders/11wMtg1iOQyR8pD5Z7LU92pNDFERoDgHi",
    },
    {
      title: "Department Student Respresentative",
      company: "AIT Chandigarh University",
      location: "Chandigarh University, India",
      period: "Oct 2024 - Jun 2025",
      description:
        "Monitored the entire student working bodies and student welfare comittee.",
      achievements: [
        "Managed the student and department queries.",
        "Created a healthy student - techer environment.",
        "Lokked over the student database for the deparment.",
      ],
      stamp: "MANAGEMENT",
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
      id="experience"
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
            <div className="vintage-paper torn-edge-top torn-edge-bottom p-6 sm:p-8 transform rotate-1 relative mx-auto max-w-md">
              <motion.div
                animate={{ rotate: [-1, 1, -1] }}
                transition={{ duration: 12, repeat: Infinity }}
                className="absolute -top-6 -left-6 vintage-stamp px-3 py-2 text-xs"
              >
                EXPERIENCE
              </motion.div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold handwriting text-vintage-gradient">
                experience
              </h2>
              <div className="h-1 w-16 bg-vintage-brown mx-auto rounded-full mt-4" />
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <div className="space-y-12">
            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <div className="vintage-paper p-4 transform -rotate-1 inline-block">
                <h3 className="text-3xl handwriting text-vintage-brown">
                  My Journey
                </h3>
              </div>
            </motion.div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="flex items-start space-x-8">
                    {/* Timeline dot */}
                    <div className="flex flex-col items-center">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={
                          isInView
                            ? { scale: 1, rotate: 0 }
                            : { scale: 0, rotate: -180 }
                        }
                        transition={{
                          delay: index * 0.3,
                          duration: 0.8,
                        }}
                        className="w-6 h-6 vintage-gradient rounded-full shadow-lg border-2 border-vintage-cream"
                      />
                      {index < experiences.length - 1 && (
                        <div className="w-px h-32 bg-vintage-cream opacity-50 mt-4" />
                      )}
                    </div>

                    {/* Content */}
                    <div
                      className="flex-1 vintage-paper torn-edge-top p-8 experience-card relative"
                      style={{
                        transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)`,
                      }}
                    >
                      <motion.div className="space-y-4">
                        {/* Vintage stamp */}
                        <div className="absolute -top-4 -right-4 vintage-stamp px-3 py-2 text-xs">
                          {exp.stamp}
                        </div>

                        <div>
                          <h4 className="text-2xl handwriting text-vintage-brown">
                            {exp.title}
                          </h4>
                          <div className="flex flex-wrap items-center gap-4 mt-2 text-lg text-vintage-dark">
                            <span className="font-medium typewriter">
                              {exp.company}
                            </span>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </div>
                          </div>
                        </div>

                        <p className="text-lg text-vintage-dark leading-relaxed typewriter">
                          {exp.description}
                        </p>

                        <div className="space-y-2">
                          <h5 className="font-medium text-lg text-vintage-brown handwriting">
                            Achievements:
                          </h5>
                          <ul className="space-y-1">
                            {exp.achievements.map(
                              (achievement, i) => (
                                <li
                                  key={i}
                                  className="text-vintage-dark text-base flex items-start typewriter"
                                >
                                  <span className="text-vintage-brown mr-2">
                                    ★
                                  </span>
                                  {achievement}
                                </li>
                              ),
                            )}
                          </ul>
                        </div>

                        {/* See Project Button */}
                        <div className="mt-6">
                          <motion.a
                            href={exp.driveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{
                              scale: 1.05,
                              rotate: 2,
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center space-x-2 vintage-button px-4 py-2 text-base border-2 border-vintage-brown hover:shadow-lg transition-all duration-300"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span className="typewriter">
                              See Project
                            </span>
                          </motion.a>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute bottom-2 left-2 w-3 h-3 bg-vintage-red opacity-40 rounded-full"></div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}