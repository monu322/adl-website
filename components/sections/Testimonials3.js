import TestimonialSlider1 from "../slider/TestimonialSlider1"


export default function Testimonials3() {
    return (
        <>
            <section className="testimonials s3">
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
                                <div className="swiper testimonials-swiper">
                                    <TestimonialSlider1 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
