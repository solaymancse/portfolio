import React from 'react'

export const Frontend = () => {
  return (
    <div className="skills_content"  data-aos="zoom-in">
        <h3 className="skills_title">Front-End</h3>

        <div className="skills_box">
            <div className="skills_group">
                <div className="skills_data">
                   <i class='bx bxl-html5 skills_icon' ></i>

                    <div>
                        <h3 className="skills_name">HTML 5</h3>
                        <span className="skills_level">expert</span>
                    </div>
                </div>
                <div className="skills_data">
                <i class='bx bxl-css3 skills_icon' ></i>

                    <div>
                        <h3 className="skills_name">CSS 3</h3>
                        <span className="skills_level">expert</span>
                    </div>
                </div>
                <div className="skills_data">
                   <i class='bx bxl-javascript skills_icon' ></i>

                    <div>
                        <h3 className="skills_name">JavaScript</h3>
                        <span className="skills_level">Intermediate</span>
                    </div>
                </div>
            </div>
            <div className="skills_group">
                <div className="skills_data">
                <i class='bx bxl-bootstrap  skills_icon' ></i>

                    <div>
                        <h3 className="skills_name">Bootstrap</h3>
                        <span className="skills_level">expert</span>
                    </div>
                </div>
                <div className="skills_data">
                <i class='bx bxl-tailwind-css skills_icon' ></i>

                    <div>
                        <h3 className="skills_name">Tailwind</h3>
                        <span className="skills_level">expert</span>
                    </div>
                </div>
                <div className="skills_data">
                <i class='bx bxl-react skills_icon' ></i>

                    <div>
                        <h3 className="skills_name">React Js</h3>
                        <span className="skills_level">expert</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
