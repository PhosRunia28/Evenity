import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect } from "react";
import AboutSection from "./components/section/AboutSection";
import EventSchedule from "./components/section/EventSchedule";
import ExploreSection from "./components/section/ExploreSection";
import Footer from "./components/section/Footer";
import Header from "./components/section/Header";
import HeroSection from "./components/section/HeroSection";
import PartnerSection from "./components/section/PartnerSection";
import RecapVideoEvent from "./components/section/RecapVideoEvent";
import TimeEventSection from "./components/section/TimeEventSection";
function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ExploreSection />
      <RecapVideoEvent />
      <TimeEventSection />
      <EventSchedule />
      <PartnerSection />
      <Footer />
    </>
  );
}

export default App;
