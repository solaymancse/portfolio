import './hero.css'
import { Data } from "./Data"
import { Social } from "./Social"
import { ScrollDown } from './ScrollDown'


export const Hero = () => {
  return (
    <section className="hero section">
        <div className="hero_container container grid">
            <div className="hero_content grid">
              <Social/>
              <div className="hero_img " data-aos="fade-left"></div>
              <Data/>
            </div>
            <ScrollDown/>
        </div>
    </section>
  )
}
