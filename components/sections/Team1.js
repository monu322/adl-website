import BrandSlider1 from "../slider/BrandSlider1"
import TeamSlider1 from "../slider/TeamSlider1"


export default function Team1() {
    return (
        <>
            <section className="team">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center">
                                <h6 className="sub-heading"><span>Team Members</span></h6>
                                <h3 className="heading wow" data-splitting>Our Amazing Team
                                    </h3>
                            </div>
                            <div className="swiper team-swiper">
                                <TeamSlider1 />
                            </div>
                            <div className="brands block-text center" data-aos="fade-up" data-aos-duration={2000}>
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
