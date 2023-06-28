import { About } from "../components/about/About"
import { Services } from "../components/services/Services"
import { Skills } from "../components/skills/Skills"
import { Work } from "../components/work/Work"
import { Hero } from "../components/hero/Hero"
import { Qualification } from "../components/qualification/Qualification"
import { Testimonials } from "../components/testimonials/Testimonials"
import { Contact } from "../components/contact/Contact"
import { Scrollup } from "../components/scrollup/Scrollup"


export const Home = () => {

  return (
    <>
    
    <Hero/>
      <About/>
      <Skills/>
      <Services/>
      <Work/>
      <Qualification/>
      <Testimonials/>
      <Contact/>
      <Scrollup/>
 
    </>
  )
}
