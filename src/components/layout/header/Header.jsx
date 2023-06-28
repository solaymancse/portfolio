import './header.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export const Header = () => {
/*===================== Header BG Change ============================*/
  window.addEventListener("scroll", function(){
    const header = document.querySelector('.header');
    if(this.scrollY >= 80) header.classList.add('scroll-header')
    else header.classList.remove("scroll-header")
  })
    /*===================== Toggle ============================*/
    const [Toggle, setToggle] = useState(false);
   

  
  return (
    <header className="header">
        <nav className="nav container">
            <Link to="/" className='nav_logo' data-aos="fade-down" data-aos-duration="2000">Solayman</Link>

            <div className={ Toggle ? "nav_menu show_menu":"nav_menu"}>
                <ul className="nav_list grid">
                    <li className="nav_item">
                        <Link to="/" className="nav_link active-link">
                        <i className="uil uil-airplay nav_icon"></i>Home
                        </Link>
                    </li>
                    <li className="nav_item">
                        <a href="#about"  className='nav_link'>
                        <i className="uil uil-user nav_icon"></i>About
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#services"  className='nav_link'>
                        <i className="uil uil-briefcase nav_icon"></i>Services
                        </a>
                    </li>
                    <li className="nav_item">
                        <Link to="portfolio"  className='nav_link'>
                        <i className="uil uil-scenery nav_icon"></i>Portfolio
                        </Link>
                    </li>
                    <li className="nav_item">
                        <Link to="contact"  className='nav_link'>
                        <i className="uil uil-message nav_icon"></i>Contact
                        </Link>
                    </li>
                </ul>
                <i className="uil uil-times nav_close" onClick={()=> setToggle(!Toggle)}></i>
                
            </div>

          
        
        <div className="nav_toggle" onClick={()=> setToggle(!Toggle)}>
            <i className="uil uil-apps "></i>
            </div>
          
        </nav>
    </header>
  )
}
