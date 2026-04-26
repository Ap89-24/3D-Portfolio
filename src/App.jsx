import LogoSection from "./sections/LogoSection"
import NavBar from "./components/NavBar"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import FeatureCard from "./sections/FeatureCard"
import ExperienceSection from "./sections/ExperienceSection"
import TechStack from "./sections/TechStack"
import Contact from "./sections/Contact"

const App = () => {
  return (
   <>
   <NavBar />
   <Hero />
   <ShowcaseSection />
   <LogoSection />
   <FeatureCard />
   <ExperienceSection />
   <TechStack />
   <Contact />
   </>
  )
}

export default App
