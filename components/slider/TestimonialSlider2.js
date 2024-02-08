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
            <Swiper {...swiperOptions} className="swiper testimonials-swiper s2">
                <SwiperSlide>
                    <div className="box-testimonial center">
                        <div className="image">
                            <img src="/assets/images/team/john.png" alt="" />
                        </div>
                        <div className="info">
                            <h5 className="name">Monu John</h5>
                            <p>Founder &amp; CEO</p>
                           
                        </div>
                        <p className="text">John comes with a decade of experience in Tech, a Bachelors in Mechanical Engineering and a Masters in Artificial Intelligence and Robotics, all poised to make the ADL dream a reality.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="box-testimonial center">
                        <div className="image">
                            <img src="/assets/images/layouts/avt-09.png" alt="" />
                        </div>
                        <div className="info">
                            <h5 className="name">Niju Thomas</h5>
                            <p>Head of Engineering</p>
                            
                        </div>
                        <p className="text">Niju is a veteran in Mechanical Engineering and Development, with over 20 years of experience and several successfull projects with Indian Space Research Organisation(ISRO). </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="box-testimonial center">
                        <div className="image">
                            <img src="/assets/images/layouts/avt-10.png" alt="" />
                        </div>
                        <div className="info">
                            <h5 className="name">Sreejith S</h5>
                            <p>Head of Development</p>
                           
                        </div>
                        <p className="text"></p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
