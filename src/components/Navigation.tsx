import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "landing", label: "home" },
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("landing");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.6,
      rootMargin: "-50px 1px -50px 1px",
    };

    const observerCallback = (
      entries: IntersectionObserverEntry[],
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 hidden md:block"
      >
        <div className="vintage-nav px-3 sm:px-4 md:px-6 py-2 sm:py-3 transform hover:rotate-0 transition-transform duration-200 relative">
          {/* Vintage stamp decoration */}
          <motion.div
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-3 -right-3 vintage-stamp px-2 py-1 text-xs"
          >
            NAV
          </motion.div>

          <ul className="flex space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6">
            {navItems.map(({ id, label }, index) => (
              <motion.li
                key={id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <button
                  onClick={() => scrollToSection(id)}
                  className={`relative px-2 sm:px-3 py-2 typewriter font-medium transition-all duration-300 hover:scale-110 text-xs sm:text-sm md:text-base ${
                    activeSection === id
                      ? "text-vintage-brown"
                      : "text-vintage-dark hover:text-vintage-brown"
                  }`}
                >
                  {activeSection === id && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-vintage-brown"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <motion.span
                    whileHover={{ y: -2 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                    }}
                  >
                    {label}
                  </motion.span>

                  {/* Hover vintage stamp effect */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 0.8 }}
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 vintage-charm px-2 py-1 text-xs pointer-events-none"
                  >
                    ★
                  </motion.div>
                </button>
              </motion.li>
            ))}
          </ul>

          {/* Enhanced decorative corner elements */}
          <div className="absolute -top-1 -left-1 w-3 h-3 bg-vintage-brown rounded-full opacity-60" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-vintage-red rounded-full opacity-60" />
          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-vintage-red rounded-full opacity-60" />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-vintage-brown rounded-full opacity-60" />

          {/* Small decorative tape effect */}
          <div className="absolute top-1 left-1/4 w-6 h-2 bg-vintage-brown opacity-20 transform rotate-45" />
          <div className="absolute bottom-1 right-1/4 w-6 h-2 bg-vintage-red opacity-20 transform -rotate-45" />
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="fixed top-2 left-2 right-2 z-50 md:hidden"
      >
        <div className="vintage-nav px-3 py-2 flex justify-between items-center">
          <motion.div
            whileHover={{ rotate: 5 }}
            className="typewriter font-medium text-vintage-brown"
          >
            POORVA
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="vintage-button p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </motion.button>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="vintage-paper mt-2 p-4 space-y-2"
            >
              {navItems.map(({ id, label }, index) => (
                <motion.button
                  key={id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(id)}
                  className={`block w-full text-left px-3 py-2 typewriter font-medium transition-all duration-150 border-l-2 ${
                    activeSection === id
                      ? "text-vintage-brown border-vintage-brown bg-vintage-cream/50"
                      : "text-vintage-dark border-transparent hover:text-vintage-brown hover:border-vintage-brown/50 hover:bg-vintage-cream/30"
                  }`}
                >
                  {label}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}