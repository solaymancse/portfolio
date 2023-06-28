import './work.css'
import img from '../../assets/p1.png'
import img1 from '../../assets/p3.png'
import { Link } from 'react-router-dom'

export const Work = () => {
    return (
        <section className="work section">
            <h2 className="section_title" data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom">Portfolio</h2>
            <span className='section_subtitle' data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom">Most Recent Works</span>

            <div className="work_section container grid">
                <div className="work_section-content grid" >
                    <div className="work_section_img" data-aos="fade-right">
                        <img src={img} alt="" />
                    </div>
                    <div className="work_section-data grid" data-aos="fade-left">
                        <h3 className='work_section-title'>Car Rental</h3>
                        <p className="work_section-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aliquid, sapiente, similique doloremque, vero a ipsa dolor tenetur perspiciatis nulla nemo delectus nesciunt? Asperiores nisi, rerum ut sapiente iure obcaecati!
                            sapiente, similique doloremque, vero a ipsa dolor tenetur perspiciatis nulla nemo delectus nesciunt? Asperiores nisi, rerum ut sapiente iure obcaecati!
                        </p>
                        <ul className="work_section-framworks grid">
                            <li>React</li>
                            <li>Node</li>
                            <li>MongoDD</li>
                            <li>MUI</li>
                        </ul>
                        <ul className="work_section-links grid">
                            <li> <i class='bx bxl-github'></i> Code</li>
                            <li><i class='bx bx-link-external' ></i> Live Demo</li>
                        </ul>
                    </div>
                </div>
                <div className="work_section-content grid" >
                    <div className="work_section-data grid " data-aos="fade-right">
                        <h3 className='work_section-title'>Car Rental</h3>
                        <p className="work_section-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aliquid, sapiente, similique doloremque, vero a ipsa dolor tenetur perspiciatis nulla nemo delectus nesciunt? Asperiores nisi, rerum ut sapiente iure obcaecati!
                            sapiente, similique doloremque, vero a ipsa dolor tenetur perspiciatis nulla nemo delectus nesciunt? Asperiores nisi, rerum ut sapiente iure obcaecati!
                        </p>
                        <ul className="work_section-framworks grid">
                            <li>React</li>
                            <li>Node</li>
                            <li>MongoDD</li>
                            <li>MUI</li>
                        </ul>
                        <ul className="work_section-links grid">
                            <li> <i class='bx bxl-github'></i> Code</li>
                            <li><i class='bx bx-link-external' ></i> Live Demo</li>
                        </ul>
                    </div>
                    <div className="work_section_img" data-aos="fade-left">
                        <img src={img1} alt="" />
                    </div>
                </div>
                <div className="work_section-content grid">
                    <div className="work_section_img" data-aos="fade-right">
                        <img src={img} alt="" />
                    </div>
                    <div className="work_section-data grid" data-aos="fade-left">
                        <h3 className='work_section-title'>Car Rental</h3>
                        <p className="work_section-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aliquid, sapiente, similique doloremque, vero a ipsa dolor tenetur perspiciatis nulla nemo delectus nesciunt? Asperiores nisi, rerum ut sapiente iure obcaecati!
                            sapiente, similique doloremque, vero a ipsa dolor tenetur perspiciatis nulla nemo delectus nesciunt? Asperiores nisi, rerum ut sapiente iure obcaecati!
                        </p>
                        <ul className="work_section-framworks grid">
                            <li>React</li>
                            <li>Node</li>
                            <li>MongoDD</li>
                            <li>MUI</li>
                        </ul>
                        <ul className="work_section-links grid">
                            <li> <i class='bx bxl-github'></i> Code</li>
                            <li><i class='bx bx-link-external' ></i> Live Demo</li>
                        </ul>
                    </div>
                </div>
                <div className="work_section-view">
                    <Link to="all-work" >View all  <i className="uil uil-arrow-right services_button-icon"></i></Link>
                </div>
            </div>



        </section>
    )
}
