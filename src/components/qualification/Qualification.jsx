import './qualification.css'

export const Qualification = () => {
  return (
    <section className="qualification_section section">
        <h2 className="section_title">Qualification</h2>
        <span className='section_subtitle'>Academic Levels</span>

        <div className="qualification_container container">
            <div className="qualification_tabs">
                <div className="qualification_button button--flex">
                    <i className="uil uil-graduation-cap qualification_icon"></i> Education
                </div>
                <div className="qualification_button button--flex">
                <i class='bx bx-briefcase-alt qualification_icon' ></i> Experience
                </div>
            </div>

            <div className="qualification_sections">
                <div className="qualification_content qualification_content-active">
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Bsc in CSE</h3>
                            <span className="qualification_subtitle">Premier University</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i>2019 - 2023
                            </div>
                        </div>

                        <div>
                            <span className='qualification_rounder'></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>
                        
                        <div>
                            <span className='qualification_rounder'></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div>
                            <h3 className="qualification_title">Developer</h3>
                            <span className="qualification_subtitle">Hophycare - Startup</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i>2021 - 2022
                            </div>
                        </div>

                    </div>

                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Secondary Certificate</h3>
                            <span className="qualification_subtitle">Pahartail College</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i>2015 - 2017
                            </div>
                        </div>

                        <div>
                            <span className='qualification_rounder'></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>
                        
                        <div>
                            <span className='qualification_rounder'></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div>
                            <h3 className="qualification_title">Developer</h3>
                            <span className="qualification_subtitle">Hophycare - Startup</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i>2021 - 2022
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
