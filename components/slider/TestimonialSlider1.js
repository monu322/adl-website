import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 1,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true
}
export default function TestimonialSlider1() {
    return (
        <>
            <Swiper {...swiperOptions}>
                <SwiperSlide>
                    <div className="box-testimonial center">
                        <img src="/assets/images/icon/quote-new-2.png" alt="" />
                        <p className="text">“ I always imagined a robot could make a difference in my daily life. It would give me back my independence and greatly reduce the stress on my family. “</p>
                        <div className="info">
                            <img src="/assets/images/layouts/avt-02.png" alt="" />
                            <h5 className="name">Jane D</h5>
                            <p>Homemaker</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="box-testimonial center">
                        <img src="/assets/images/icon/quote-new-2.png" alt="" />
                        <p className="text">“ Our customer experience will skyrocket once we start using these robots. Our chefs and staff can now focus more on what they do best. “</p>
                        <div className="info">
                            <img src="/assets/images/layouts/avt-03.png" alt="" />
                            <h5 className="name">Robert M</h5>
                            <p>Manager, Burger King</p>
                        </div>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div className="box-testimonial center">
                        <img src="/assets/images/icon/quote-new-2.png" alt="" />
                        <p className="text">“ Curabitur eu est feugiat quam feugiat tristique non vel erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue, nunc nec suscipit fringilla, augue ligula eleifend velit. “</p>
                        <div className="info">
                            <img src="/assets/images/layouts/avt-04.png" alt="" />
                            <h5 className="name">Jacob Jones</h5>
                            <p>Chief Product Officer</p>
                        </div>
                    </div>
                </SwiperSlide> */}
            </Swiper>
        </>
    )
}
