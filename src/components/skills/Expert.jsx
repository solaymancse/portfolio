import {FaLaravel} from 'react-icons/fa'

export const Expert = () => {
  return (
    <div className="skills_content" data-aos="zoom-in">
        <h3 className="skills_title">Expert</h3>

        <div className="skills_box">
        <div className="skills_group">
                <div className="skills_data">
                <i class='bx bxl-nodejs skills_icon' ></i>

                    <div>
                        <h3 className="skills_name">Node Js</h3>
                        <span className="skills_level">Intermediate</span>
                    </div>
                </div>
                <div className="skills_data">
                <i class='bx bxl-react skills_icon' ></i>

                    <div>
                        <h3 className="skills_name">React Js</h3>
                        <span className="skills_level">expert</span>
                    </div>
                </div>
                <div className="skills_data">
                <i class='bx bxl-internet-explorer skills_icon'></i>

                    <div>
                        <h3 className="skills_name">Express Js</h3>
                        <span className="skills_level">expert</span>
                    </div>
                </div>
            </div>
            <div className="skills_group">
                <div className="skills_data">
                <i class='bx bxl-mongodb skills_icon' ></i>

                    <div>
                        <h3 className="skills_name">MongoDB</h3>
                        <span className="skills_level">expert</span>
                    </div>
                </div>
                <div className="skills_data">
                  <FaLaravel className="skills_icon"/>

                    <div>
                        <h3 className="skills_name">Laravel</h3>
                        <span className="skills_level">expert</span>
                    </div>
                </div>
                <div className="skills_data">
                <i class='bx bxl-python skills_icon' ></i>

                    <div>
                        <h3 className="skills_name">Python</h3>
                        <span className="skills_level">Intermediate</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
