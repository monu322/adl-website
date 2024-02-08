
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    },

    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    freeMode: true,
}

export default function BrandSlider1() {
    return (
        <>
            <Swiper {...swiperOptions}>
                <SwiperSlide>
                    <Link href="#"><img src="/assets/images/logo/brand-01.png" alt="" /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="#"><img src="/assets/images/logo/brand-02.png" alt="" /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="#"><img src="/assets/images/logo/brand-03.png" alt="" /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="#"><img src="/assets/images/logo/brand-04.png" alt="" /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="#"><img src="/assets/images/logo/brand-05.png" alt="" /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="#"><img src="/assets/images/logo/brand-06.png" alt="" /></Link>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
