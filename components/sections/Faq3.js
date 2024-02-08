

import Accordion from '../elements/Accordion'
export default function Faq3() {
    return (
        <>
            <section className="faq s3">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="block-text">
                                <h6 className="sub-heading"><span>FAQs</span></h6>
                                <h3 className="heading wow" data-splitting>Frequently
                                    <br />
                                    Aksed Questions</h3>
                                <p>Below is a list of frequently asked questions and answers from partners and 3D artist. Please check this FAQ first before contacting us.</p>
                            </div>
                            <Accordion oneCol/>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="image" data-aos="fade-left" data-aos-duration={2000}>
                                <img src="/assets/images/layouts/img-faq.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
