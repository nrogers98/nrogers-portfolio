import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground.jsx"
import { Navbar } from "@/components/Navbar.jsx"
import { HomeSection } from "../components/HomeSection.jsx";
import { AboutSection } from "../components/AboutSection.jsx";
import { SkillsSection } from "../components/SkillsSection.jsx";
import { ProjectSection } from "../components/ProjectsSection.jsx";
import { ContactSection } from "../components/ContactSection.jsx";
import { Footer } from "../components/Footer.jsx";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle />
        {/* Background Effects */}
        <StarBackground />
        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <main>
            <HomeSection />
            <AboutSection />
            <SkillsSection />
            <ProjectSection />
            <ContactSection />
        </main>
        {/* Footer */}
        <Footer />
    </div>;
}