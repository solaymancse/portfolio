import './testimonials.css'
import { Data } from './Data'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

export const Testimonials = () => {

  return (
    <section className="testimonial container section">
        <h2 className='section_title'>My Clients Says</h2>
        <span className='section_subtitle'>Testimonials</span>

        <Swiper className="testimonial_container"
        loop={true}
        grabCursor={true}
         spaceBetween={24}
         effect='slide'
         speed={1000}
         autoplay={{
            delay: 3000, // Delay between slide transitions in milliseconds
            disableOnInteraction: false, // Autoplay continues even after user interaction
          }}
         pagination={{
           clickable: true,
         }}
         breakpoints={{
            576:{
                slidesPerView:2
            },
            768:{
                slidesPerView:2,
                spaceBetween:48
            },
         }}
        
         modules={[Pagination]}
         
        >
            {Data.map((data)=> {
                return(
                    <SwiperSlide className="testimonial_card" key={data.id}>
                        <img src={data.img} alt="" className='testimonial_img'/>
                       
                        <p className="testimonial_description"> <i class='bx bxs-quote-left testimonial_icon' ></i> {data.description}</p>
                        <h3 className="testimonial_name">{data.title}</h3>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
  )
}
