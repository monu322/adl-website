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
                        <img src="/assets/images/icon/quote.png" alt="" />
                        <p className="text">“ Curabitur eu est feugiat quam feugiat tristique non vel erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue, nunc nec suscipit fringilla, augue ligula eleifend velit. “</p>
                        <div className="info">
                            <img src="/assets/images/layouts/avt-02.png" alt="" />
                            <h5 className="name">Jacob Jones</h5>
                            <p>Chief Product Officer</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="box-testimonial center">
                        <img src="/assets/images/icon/quote.png" alt="" />
                        <p className="text">“ Curabitur eu est feugiat quam feugiat tristique non vel erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue, nunc nec suscipit fringilla, augue ligula eleifend velit. “</p>
                        <div className="info">
                            <img src="/assets/images/layouts/avt-03.png" alt="" />
                            <h5 className="name">Jacob Jones</h5>
                            <p>Chief Product Officer</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="box-testimonial center">
                        <img src="/assets/images/icon/quote.png" alt="" />
                        <p className="text">“ Curabitur eu est feugiat quam feugiat tristique non vel erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue, nunc nec suscipit fringilla, augue ligula eleifend velit. “</p>
                        <div className="info">
                            <img src="/assets/images/layouts/avt-04.png" alt="" />
                            <h5 className="name">Jacob Jones</h5>
                            <p>Chief Product Officer</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
