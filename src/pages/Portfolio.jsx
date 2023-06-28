import '../components/work/work.css'
import img from '../assets/work1.jpg'
export const Portfolio = () => {
  return (
    <section className="work section">
    <h2 className="section_title">Portfolio</h2>
    <span className='section_subtitle'>Most Recent Works</span>

    <div className="work_section container grid">
        <div className="work_section-content grid">
            <div className="work_section_img">
                <img src={img} alt="" />
            </div>
            <div className="work_section-data grid">
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
        <div className="work_section-content grid">
            <div className="work_section-data grid">
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
            <div className="work_section_img">
                <img src={img} alt="" />
            </div>
        </div>
        <div className="work_section-content grid">
            <div className="work_section_img">
                <img src={img} alt="" />
            </div>
            <div className="work_section-data grid">
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
    </div>



</section>
  )
}
