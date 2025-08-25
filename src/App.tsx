import { Navigation } from './components/Navigation';
import { LandingSection } from './components/LandingSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectSection } from './components/ProjectSection';
import { ContactSection } from './components/ContactSection';
import './styles/globals.css';

function App() {
  return (
    <div className="relative">
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main className="relative">
        <LandingSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;