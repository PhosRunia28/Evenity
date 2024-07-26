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
