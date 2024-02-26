import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 3,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },

}
export default function TestimonialSlider2() {
    return (
        <>
            <div className="swiper testimonials-swiper s2">
                
                    <div className="box-testimonial center">
                        <div className="image">
                            <img src="/assets/images/team/john.png" alt="" />
                        </div>
                        <div className="info">
                            <h5 className="name">Monu John</h5>
                            <p>Founder</p>
                           
                        </div>
                        <p className="text">John brings forth a wealth of experience spanning over a decade in the field of technology. Armed with a Bachelor's degree in Mechanical Engineering and further enriched by a Master's in Artificial Intelligence and Robotics, he stands determined to make the ADL dream a reality, transforming the future of daily living.</p>
                    </div>
                
                
                    <div className="box-testimonial center">
                        <div className="image">
                            <img src="/assets/images/team/niju.jpeg" alt="" />
                        </div>
                        <div className="info">
                            <h5 className="name">Niju Thomas</h5>
                            <p>Engineering</p>
                            
                        </div>
                        <p className="text">Niju stands as a seasoned veteran at ADL Robotics, solving complex challenges in the domains of Mechanical Engineering and Development. During his impressive tenure of over two decades, Niju has worked on simple consumer products to advanced space robots for Indian Space Research Organisation (ISRO). </p>
                    </div>
                
                
                    <div className="box-testimonial box-testimonial3 center">
                        <div className="image">
                            <img src="/assets/images/team/sreejith.jpg" alt="" />
                        </div>
                        <div className="info">
                            <h5 className="name">Sreejith S</h5>
                            <p>Development</p>
                           
                        </div>
                        <p className="text">Srijith plays the pivotal role of the in-house expert on robotics development, bringing forth a wealth of expertise garnered over years as a Mechatronics Engineer and a Master's in Autonomous Robotics. Within the ADL project, Srijith's responsibilities encompass the design and development of the ADL Robot Prototype.</p>
                    </div>
                
            </div>
        </>
    )
}
