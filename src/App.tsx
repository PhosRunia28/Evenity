import EventSchedule from "./components/common/EventSchedule";
import AboutSection from "./components/section/AboutSection";
import ExploreSection from "./components/section/ExploreSection";
import Header from "./components/section/Header";
import HeroSection from "./components/section/HeroSection";
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
    </>
  );
}

export default App;
