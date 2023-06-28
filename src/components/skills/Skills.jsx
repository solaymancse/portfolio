import { Backend } from './Backend'
import {Expert} from './Expert'
import { Frontend } from './Frontend'
import { Tools } from './Tools'
import './skills.css'

export const Skills = () => {
  return (
    <section className="skills section">
        <h2 className="section_title">What Are My Skills ?</h2>
        <span className='section_subtitle'>My Technical Level</span>

        <div className="skills_container container grid">
            <Frontend/>
            <Expert/>
            <Backend/>
            <Tools/>
        </div>
         
    </section>
  )
}
