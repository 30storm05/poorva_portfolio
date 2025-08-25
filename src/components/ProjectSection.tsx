import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProjectSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentSlide, setCurrentSlide] = useState(0);

  const posterProjects = [
    {
      title: 'Canva Poster 1',
      posterImage: '/images/posters/1.png'
    },
    {
      title: 'Adobe Illustrator Poster 1',
      posterImage: '/images/posters/2.png'
    },
    {
      title: 'Adobe Illustrator Poster 2',
      posterImage: '/images/posters/3.png'
    },
    {
      title: 'Canva Poster 2',
      posterImage: '/images/posters/4.png'
    },
    {
      title: 'Canva Poster 3',
      posterImage: '/images/posters/5.png'
    },
    {
      title: 'Canva Poster 4',
      posterImage: '/images/posters/6.png'
    },
    {
      title: 'Canva Poster 5',
      posterImage: '/images/posters/7.png'
    },
    {
      title: 'Adobe Illustrator Poster 3',
      posterImage: '/images/posters/8.png'
    },
    {
      title: 'Adobe Illustrator Poster 4',
      posterImage: '/images/posters/9.png'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % posterProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + posterProjects.length) % posterProjects.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="min-h-screen py-12 sm:py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-8">
            <div className="vintage-paper torn-edge-top torn-edge-bottom p-6 sm:p-8 transform rotate-1 relative mx-auto max-w-md">
              <motion.div
                animate={{ rotate: [-1, 1, -1] }}
                transition={{ duration: 12, repeat: Infinity }}
                className="absolute -top-6 -left-6 vintage-stamp px-3 py-2 text-xs"
              >
                MY WORK
              </motion.div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold handwriting text-vintage-gradient">projects</h2>
              <div className="h-1 w-16 bg-vintage-brown mx-auto rounded-full mt-4" />
            </div>
          </motion.div>

          {/* Projects Grid with Carousel */}
          {/* Poster Slideshow */}
          <div className="space-y-12">
            <motion.div variants={itemVariants} className="text-center">
              <div className="vintage-paper p-4 transform rotate-1 inline-block relative">
                <h3 className="text-xl sm:text-2xl handwriting text-vintage-brown">My Poster Gallery</h3>
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute -top-4 -right-4 vintage-stamp px-2 py-1 text-xs"
                >
                  ✦
                </motion.div>
              </div>
            </motion.div>
            
            {/* Slideshow Container */}
            <div className="relative max-w-4xl mx-auto">
              <motion.div 
                variants={itemVariants}
                className="vintage-paper p-8 md:p-12 transform -rotate-1 relative overflow-hidden"
              >
                {/* Navigation Buttons */}
                <motion.button
                  onClick={prevSlide}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 vintage-button p-3 rounded-full"
                >
                  <ChevronLeft className="w-6 h-6 text-vintage-dark" />
                </motion.button>
                
                <motion.button
                  onClick={nextSlide}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 vintage-button p-3 rounded-full"
                >
                  <ChevronRight className="w-6 h-6 text-vintage-dark" />
                </motion.button>

                {/* Slide Content */}
                <div className="text-center space-y-6">
                  {/* Poster Display Area */}
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 100, rotate: 5 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    exit={{ opacity: 0, x: -100, rotate: -5 }}
                    transition={{ duration: 0.6 }}
                    className="scrapbook-photo mx-auto max-w-md aspect-[3/4] overflow-hidden relative"
                  >
                    <ImageWithFallback
                      src={posterProjects[currentSlide].posterImage}
                      alt={posterProjects[currentSlide].title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Vintage stamp on poster */}
                    <div className="absolute top-4 right-4 vintage-stamp px-2 py-1 text-xs">
                      {posterProjects[currentSlide].year}
                    </div>
                    
                    {/* Category tag */}
                    <div className="absolute bottom-4 left-4 vintage-charm px-3 py-1 text-xs">
                      {posterProjects[currentSlide].category}
                    </div>
                  </motion.div>

                  {/* Poster Details */}
                  <motion.div
                    key={`details-${currentSlide}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="space-y-4"
                  >
                    <h4 className="text-3xl md:text-4xl handwriting text-vintage-brown">
                      {posterProjects[currentSlide].title}
                    </h4>
                    <p className="text-base md:text-lg typewriter text-vintage-dark leading-relaxed max-w-2xl mx-auto">
                      {posterProjects[currentSlide].description}
                    </p>
                  </motion.div>

                  {/* Slide Indicators */}
                  <div className="flex justify-center space-x-3 mt-8">
                    {posterProjects.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        whileHover={{ scale: 1.2 }}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentSlide 
                            ? 'bg-vintage-brown' 
                            : 'bg-vintage-brown/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-4 h-4 bg-vintage-red opacity-40 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-3 h-3 bg-vintage-brown opacity-40 transform rotate-45"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}