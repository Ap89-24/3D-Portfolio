import LogoSection from "./sections/LogoSection"
import NavBar from "./components/NavBar"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import FeatureCard from "./sections/FeatureCard"

const App = () => {
  return (
   <>
   <NavBar />
   <Hero />
   <ShowcaseSection />
   <LogoSection />
   <FeatureCard />
   </>
  )
}

export default App
