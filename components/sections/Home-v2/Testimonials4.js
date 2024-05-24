
import RestaurantTestmonialSlider from "@/components/slider/RestaurantTestmonialSlider"

export default function Testimonials3() {
    return (
        <>
            <section className="testimonials s2 mt-150">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="testimonials__main">
                                <div className="block-text center">
                                    <h6 className="sub-heading"><span>Testimonials</span></h6>
                                    <h3 className="heading wow" data-splitting>What People Say <br />
                                        About us
                                    </h3>
                                </div>
                                <div className="swiper col-md-7 col-sm-4 ">
                                    <RestaurantTestmonialSlider />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
