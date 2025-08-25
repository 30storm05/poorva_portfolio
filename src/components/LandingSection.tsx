import { motion } from "motion/react";
import { useRef, useState } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Star,
  Heart,
} from "lucide-react";

export function LandingSection() {
  const folderRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleOpenFolder = () => {
    setIsOpen(true);
    setButtonClicked(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
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

  const floatingElements = [
    { icon: Star, delay: 1, x: [0, 30, 0], y: [0, -20, 0] },
    { icon: Heart, delay: 2, x: [0, -20, 0], y: [0, 25, 0] },
  ];

  return (
    <section
      ref={folderRef}
      id="landing"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-8 px-2"
    >
      {/* Floating vintage elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map(
          ({ icon: Icon, delay, x, y }, index) => (
            <motion.div
              key={index}
              animate={{ x, y, rotate: [0, 10, -10, 0] }}
              transition={{
                duration: 8 + index * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
              }}
              className={`absolute ${index === 0 ? "top-1/4 right-1/4" : "top-3/4 left-1/4"} text-vintage-cream opacity-20`}
            >
              <Icon className="w-8 h-8" />
            </motion.div>
          ),
        )}

        {/* Vintage postal elements */}
        <motion.div
          animate={{ rotate: [0, 2, -2, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-16 right-16 vintage-stamp px-4 py-2 text-sm opacity-70"
        >
          ★ CREATIVE ★
        </motion.div>

        <motion.div
          animate={{ rotate: [-1, 1, -1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-32 left-16 vintage-stamp px-4 py-2 text-sm opacity-70"
        >
          ✦ DESIGNER ✦
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-2 sm:px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative portfolio-folder"
        >
          {/* Simplified decorative elements - fewer overlapping stickers */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="vintage-sticker w-12 h-12 -top-6 -left-6 text-lg hidden sm:flex"
            whileHover={{ scale: 1.1, rotate: 10 }}
          >
            ⭐
          </motion.div>

          {/* Simplified decorative elements - only show key ones on mobile */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="vintage-charm px-2 py-1 -top-3 right-4 sm:right-16 text-xs"
            whileHover={{ scale: 1.1 }}
          >
            CREATIVE
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, duration: 0.3 }}
            className="vintage-medal w-10 h-10 top-12 -right-4 text-lg hidden sm:flex"
            whileHover={{ scale: 1.1 }}
          >
            🏆
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.9, duration: 0.3 }}
            className="vintage-badge px-2 py-1 -left-6 top-24 text-xs hidden sm:flex"
            whileHover={{ scale: 1.1 }}
          >
            DESIGN
          </motion.div>

          {/* Portfolio Folder */}
          <div className="folder-base p-4 transform -rotate-1">
            {/* Folder Tab */}
            <div className="folder-tab"></div>

            {/* Folder Rings */}
            <div className="folder-rings">
              <div className="folder-ring"></div>
              <div className="folder-ring"></div>
              <div className="folder-ring"></div>
            </div>

            {/* Folder Cover with click animation */}
            <motion.div
              className="folder-cover"
              initial={{ rotateY: 0 }}
              animate={{
                rotateY: isOpen ? -165 : 0,
                rotateX: isOpen ? 0 : [0, -1, 0, 1, 0], // Subtle breathing animation when closed
              }}
              transition={{
                rotateY: {
                  duration: 0.8,
                  ease: "easeInOut",
                },
                rotateX: {
                  duration: 4,
                  repeat: isOpen ? 0 : Infinity,
                  ease: "easeInOut",
                },
              }}
            />

            {/* Folder Content */}
            <motion.div
              className="folder-content"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: isOpen ? 1 : 0.3 }}
              transition={{
                duration: 0.6,
                delay: isOpen ? 0.4 : 0,
              }}
            >
              {/* Main content area - scrapbook style */}
              <div className="vintage-paper torn-edge-top torn-edge-bottom p-12 md:p-16 relative transform -rotate-1">
                {/* Title section */}
                <motion.div
                  variants={itemVariants}
                  className="text-center mb-6 sm:mb-8 relative z-20"
                >
                  <motion.div
                    animate={{ rotate: [-1, 1, -1] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                    }}
                    className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 vintage-stamp px-2 py-1 sm:px-4 sm:py-3 text-xs sm:text-lg z-10"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="hidden sm:inline">
                      PORTFOLIO
                    </span>
                    <span className="sm:hidden">⭐</span>
                  </motion.div>

                  {/* Additional decorative elements around title - hidden on mobile */}
                  <motion.div
                    initial={{ scale: 0, rotate: -120 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className="absolute -top-4 -left-8 vintage-sticker w-6 h-6 text-xs z-5 hidden sm:flex"
                    whileHover={{ scale: 1.2, rotate: 20 }}
                  >
                    🌟
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0, rotate: 120 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.7, duration: 0.3 }}
                    className="absolute -bottom-4 -right-4 vintage-charm px-2 py-1 text-xs z-5 hidden sm:flex"
                    whileHover={{ scale: 1.1, rotate: -10 }}
                  >
                    ♪
                  </motion.div>

                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-vintage-gradient mb-3 relative z-30 bg-vintage-cream/80 backdrop-blur-sm rounded-lg px-2 py-1 sm:bg-transparent sm:backdrop-blur-none">
                    Poorva Yadav
                  </h1>

                  <motion.div
                    className="h-1 w-32 bg-vintage-brown mx-auto rounded-full mb-6"
                    initial={{ width: 0 }}
                    animate={{ width: 128 }}
                    transition={{ delay: 1.5, duration: 1.2 }}
                  />

                  <h2 className="text-lg sm:text-xl md:text-2xl handwriting text-vintage-brown mb-2 relative z-30 bg-vintage-cream/80 backdrop-blur-sm rounded-lg px-2 py-1 sm:bg-transparent sm:backdrop-blur-none">
                    Graphic Designer
                  </h2>
                  <h3 className="text-sm sm:text-base md:text-lg typewriter text-vintage-dark opacity-80">
                    UI/UX • Visual Arts • Content Writing •
                    Research
                  </h3>
                </motion.div>

                {/* About snippet */}
                <motion.div
                  variants={itemVariants}
                  className="max-w-2xl mx-auto mb-6 sm:mb-8 relative"
                >
                  <div className="vintage-paper p-4 sm:p-6 transform rotate-1 border-2 border-vintage-brown/20 relative z-20">
                    <p className="text-sm sm:text-base leading-relaxed text-vintage-dark text-center">
                      Hi! I am a Graphic Designer and Content
                      Writer bringing{" "}
                      <span className="handwriting text-vintage-brown text-xl">
                        creative visions
                      </span>{" "}
                      to life. I love creating art ever so
                      little as a doodle. This turned into
                      passion. With my Bachelor's Degree in
                      AI&ML, I can easily automate process of
                      design bringing a{" "}
                      <span className="handwriting text-vintage-brown text-xl">
                        flow
                      </span>{" "}
                      into the work.
                    </p>

                    {/* Decorative arrow */}
                    <motion.div
                      animate={{
                        x: [0, 10, 0],
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                      className="absolute -right-12 top-1/2 text-vintage-brown"
                    >
                      <svg
                        width="60"
                        height="40"
                        viewBox="0 0 60 40"
                        className="fill-current"
                      >
                        <path
                          d="M5 20 Q30 5 55 20 Q30 35 5 20"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                        />
                        <path
                          d="M50 15 L55 20 L50 25"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
                {/* What I do section */}
                <motion.div
                  variants={itemVariants}
                  className="text-center relative z-20"
                >
                  <div className="inline-block vintage-paper p-3 sm:p-4 transform -rotate-2 border-2 border-vintage-red/30">
                    <h3 className="handwriting text-lg sm:text-xl text-vintage-red mb-2 sm:mb-3">
                      what i do?
                    </h3>
                    <div className="space-y-1 typewriter text-vintage-dark text-xs sm:text-sm">
                      <p>
                        Graphic Design | UI/UX | Visual Arts
                      </p>
                      <p>Content Writing | Research</p>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative corner tapes */}
                <div className="absolute top-4 left-4 w-12 h-6 bg-vintage-brown opacity-40 transform rotate-45"></div>
                <div className="absolute top-4 right-4 w-12 h-6 bg-vintage-red opacity-40 transform -rotate-45"></div>
                <div className="absolute bottom-4 left-4 w-12 h-6 bg-vintage-red opacity-40 transform -rotate-45"></div>
                <div className="absolute bottom-4 right-4 w-12 h-6 bg-vintage-brown opacity-40 transform rotate-45"></div>

                {/* Additional scattered decorative elements inside the paper */}
                <motion.div
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 2, duration: 0.6 }}
                  className="absolute top-8 right-8 vintage-sticker w-8 h-8 text-sm"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                >
                  ✨
                </motion.div>

                <motion.div
                  initial={{ scale: 0, rotate: 90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 2.3, duration: 0.6 }}
                  className="absolute bottom-16 left-8 vintage-charm px-2 py-1 text-xs"
                  whileHover={{ scale: 1.1, rotate: -8 }}
                >
                  ♡
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, rotate: -30 }}
                  animate={{ opacity: 1, rotate: -15 }}
                  transition={{ delay: 2.6, duration: 0.6 }}
                  className="absolute top-20 left-12 paperclip"
                  style={{
                    transform: "scale(0.6) rotate(-15deg)",
                  }}
                />

                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 2.9, duration: 0.6 }}
                  className="absolute bottom-8 right-12 vintage-badge px-2 py-1 text-xs"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  💝
                </motion.div>

                {/* Additional postal elements inside paper */}
                <motion.div
                  initial={{ scale: 0, rotate: 45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 3.2, duration: 0.6 }}
                  className="absolute top-32 right-16 vintage-stamp px-2 py-1 text-xs"
                  whileHover={{ scale: 1.1, rotate: -8 }}
                >
                  GRAPHIC
                </motion.div>

                <motion.div
                  initial={{ scale: 0, rotate: -135 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute bottom-24 left-16 wax-seal w-8 h-8"
                  whileHover={{ scale: 1.1, rotate: 15 }}
                />
              </div>
            </motion.div>
          </div>

          {/* Open Portfolio Button - positioned next to folder */}
          <motion.div
            variants={itemVariants}
            className="absolute right-1 sm:right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-20"
          >
            {!isOpen && (
              <motion.button
                onClick={handleOpenFolder}
                className={`open-button ${buttonClicked ? "clicked" : ""}`}
                whileHover={{ scale: buttonClicked ? 1 : 1.05 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0, duration: 0.2 }}
              >
                OPEN
              </motion.button>
            )}
          </motion.div>

          {/* Scroll indicator - only shown when folder is open */}
          {isOpen && (
            <motion.div className="text-center mt-8 relative z-20">
              <motion.button
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-vintage-cream hover:text-white transition-colors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <ChevronDown className="w-8 h-8 mx-auto" />
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}