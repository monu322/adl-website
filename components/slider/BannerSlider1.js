import 'swiper/css/effect-coverflow'
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation, EffectCoverflow],
    loop: true,
    spaceBetween: 0,
    slidesPerView: 3,
    centeredSlides: true,
    freeMode: true,
    watchSlidesProgress: true,
    effect: "coverflow",
    grabCursor: true,
    coverflowEffect: {
        rotate: 30,
        stretch: 15,
        depth: 320,
        modifier: 1,
        slideShadows: false,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: ".swiper-button-next.s1",
        prevEl: ".swiper-button-prev.s1",
    },
}
export default function BannerSlider1() {
    return (
        <>
            <Swiper {...swiperOptions} className="swiper bannerSwiper">
                <div className="swiper-wrapper">
                    <SwiperSlide>
                        <div className="card-box">
                            <div className="top d-flex">
                                <span className="icon-logo-01" />
                                <div>
                                    <h6>3D Digital Artwork</h6>
                                    <h6 className="price">2.26 ETH</h6>
                                </div>
                            </div>
                            <div className="content">
                                <div className="image">
                                    <img src="/assets/images/layouts/banner-01.png" alt="" />
                                </div>
                                <div className="info d-flex">
                                    <img src="/assets/images/layouts/avt-05.png" alt="" />
                                    <div>
                                        <h6 className="name">Leslie Alexander</h6>
                                        <p>@leslie754</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-box">
                            <div className="top d-flex">
                                <span className="icon-logo-01" />
                                <div>
                                    <h6>3D Digital Artwork</h6>
                                    <h6 className="price">2.26 ETH</h6>
                                </div>
                            </div>
                            <div className="content">
                                <div className="image">
                                    <img src="/assets/images/layouts/banner-02.png" alt="" />
                                </div>
                                <div className="info d-flex">
                                    <img src="/assets/images/layouts/avt-06.png" alt="" />
                                    <div>
                                        <h6 className="name">Leslie Alexander</h6>
                                        <p>@leslie754</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-box">
                            <div className="top d-flex">
                                <span className="icon-logo-01" />
                                <div>
                                    <h6>3D Digital Artwork</h6>
                                    <h6 className="price">2.26 ETH</h6>
                                </div>
                            </div>
                            <div className="content">
                                <div className="image">
                                    <img src="/assets/images/layouts/banner-03.png" alt="" />
                                </div>
                                <div className="info d-flex">
                                    <img src="/assets/images/layouts/avt-07.png" alt="" />
                                    <div>
                                        <h6 className="name">Leslie Alexander</h6>
                                        <p>@leslie754</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-box">
                            <div className="top d-flex">
                                <span className="icon-logo-01" />
                                <div>
                                    <h6>3D Digital Artwork</h6>
                                    <h6 className="price">2.26 ETH</h6>
                                </div>
                            </div>
                            <div className="content">
                                <div className="image">
                                    <img src="/assets/images/layouts/banner-01.png" alt="" />
                                </div>
                                <div className="info d-flex">
                                    <img src="/assets/images/layouts/avt-05.png" alt="" />
                                    <div>
                                        <h6 className="name">Leslie Alexander</h6>
                                        <p>@leslie754</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-box">
                            <div className="top d-flex">
                                <span className="icon-logo-01" />
                                <div>
                                    <h6>3D Digital Artwork</h6>
                                    <h6 className="price">2.26 ETH</h6>
                                </div>
                            </div>
                            <div className="content">
                                <div className="image">
                                    <img src="/assets/images/layouts/banner-02.png" alt="" />
                                </div>
                                <div className="info d-flex">
                                    <img src="/assets/images/layouts/avt-06.png" alt="" />
                                    <div>
                                        <h6 className="name">Leslie Alexander</h6>
                                        <p>@leslie754</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-box">
                            <div className="top d-flex">
                                <span className="icon-logo-01" />
                                <div>
                                    <h6>3D Digital Artwork</h6>
                                    <h6 className="price">2.26 ETH</h6>
                                </div>
                            </div>
                            <div className="content">
                                <div className="image">
                                    <img src="/assets/images/layouts/banner-03.png" alt="" />
                                </div>
                                <div className="info d-flex">
                                    <img src="/assets/images/layouts/avt-07.png" alt="" />
                                    <div>
                                        <h6 className="name">Leslie Alexander</h6>
                                        <p>@leslie754</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </div>
            </Swiper>
            <div className="swiper-button-next s1">
                <svg width={10} height={15} viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.8788 7.46543L2.43654 13.8092C2.1795 14.0662 1.76387 14.0662 1.50683 13.8092L1.11856 13.4209C0.861521 13.1639 0.861521 12.7482 1.11856 12.4912L6.7131 7.00059L1.12402 1.50997C0.866998 1.25293 0.866998 0.837303 1.12402 0.580281L1.51231 0.191991C1.76933 -0.0650311 2.18496 -0.0650311 2.442 0.191991L8.88422 6.53574C9.1357 6.79278 9.1357 7.20841 8.8788 7.46543Z" fill="white" fillOpacity="0.5" />
                </svg>
            </div>
            <div className="swiper-button-prev s1">
                <svg width={10} height={15} viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.1212 7.46543L7.56346 13.8092C7.8205 14.0662 8.23613 14.0662 8.49317 13.8092L8.88144 13.4209C9.13848 13.1639 9.13848 12.7482 8.88144 12.4912L3.2869 7.00059L8.87598 1.50997C9.133 1.25293 9.133 0.837303 8.87598 0.580281L8.48769 0.191991C8.23067 -0.0650311 7.81504 -0.0650311 7.558 0.191991L1.11578 6.53574C0.864303 6.79278 0.864302 7.20841 1.1212 7.46543Z" fill="white" />
                </svg>
            </div>
        </>
    )
}
