import './footer.css'

export const Footer = () => {
    return (
        <footer className="footer" >
            <div className="footer_container container">
                <h1 className="footer_title">Solayman.</h1>
                <span className='section_subtitle'>BSc in CSE</span>

                <ul className="footer_list">
                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>
                    <li>
                        <a href="#project" className="footer_link">Project</a>
                    </li>
                    <li>
                        <a href="#testimonial" className="footer_link">Testimonial</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer_link">Portfolio</a>
                    </li>
                </ul>

                <div className="footer_social">
                    <a href="" className="footer_social-link" target="_blank">
                        <i className="bx bxl-github"></i>
                    </a>
                    <a href="" className="footer_social-link" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href="" className="footer_social-link" target="_blank">
                        <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="" className="footer_social-link" target="_blank">
                        <i className="bx bxl-twitter"></i>
                    </a>
                    <a href="" className="footer_social-link" target="_blank">
                        <i className="bx bxl-youtube"></i>
                    </a>

                </div>

                <span className='footer_copy'>&#169; Solayman Muhammad. All rights reserved</span>

            </div>
        </footer>
    )
}
