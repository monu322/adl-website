import Link from "next/link"
import BrandSlider1 from "../slider/BrandSlider1"


export default function About2() {
    return (
        <>
            <section className="about s2">
                <div className="shape" />
                <div className="shape right" />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center pd-0">
                                <h6 className="sub-heading"><span>About us</span></h6>
                                <h3 className="heading wow" data-splitting>Hight Quality
                                    <br />
                                    NFT Collections</h3>
                            </div>
                            <div className="about__main center" data-aos="fade-up" data-aos-duration={3000}>
                                <img src="/assets/images/layouts/about-06.png" alt="" />
                                <p className="mb-17">Cyfonii is the premier marketplace for nifties, which are digital items you can truly own for yourself</p>
                                <p className="mb-30">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laborum velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat</p>
                                <Link ahref="/about" className="action-btn" href="#"><span>More About Us</span></Link>
                            </div>
                            <div className="brands s2 block-text center pd-0">
                                <h6 className="sub-heading"><span>We Are Partnered with Top Brands</span></h6>
                                <div className="swiper brands-swiper">
                                    <BrandSlider1 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
