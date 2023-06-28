import './services.css'
import { useState } from 'react'
import { servicesData } from './Data';
import { ServiceModal } from './ServiceModal';

export const Services = () => {
  const [open, setOpen] = useState(0);
  const handleClose = () => setOpen(0);

  return (
    <section className="services section" id="services">
      <h2 className="section_title" data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom">Services</h2>
      <span className='section_subtitle' data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom">What I offer ?</span>

      <div className="services_container container grid">
        {servicesData.map((item)=> {
          return(
            <div className="services_content " data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom" key={item.id}>
            <div>
              <i class={`bx ${item.icon} services_icon`}></i>
              <h3 className="services_title">{item.title}</h3>
            </div>
  
            <span className='services_button' onClick={()=>setOpen(item.id)}>View More <i className="uil uil-arrow-right services_button-icon"></i></span>
            <ServiceModal showModal={open === item.id} toggleTabClose={handleClose} title={item.title} description={item.description} point1={item.point1} point2={item.point2} point3={item.point3} point4={item.point4}/>
          </div>
          
          )
        })}

       
       
        
      </div>
    </section>
  )
}
