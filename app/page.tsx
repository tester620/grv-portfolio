import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import ServicesSection from "@/components/ServicesSection";
import ToolsSection from "@/components/ToolsSection";


export default function App() {
  return (
    <div className="min-h-screen" style={{
      scrollBehavior:"smooth"
    }}>
      <Header />
      <HeroSection />
      <ServicesSection />
      <ToolsSection />
      <Projects />
      <AboutSection />
      <Footer />
    </div>
  );
}