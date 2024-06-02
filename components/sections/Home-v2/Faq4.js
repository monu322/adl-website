
import RestaurantFaq from '@/components/elements/RestaurantFaq'
export default function Faq4() {
    return (
        <>
            <section className="faq s3 mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="block-text">
                                <h6 className="sub-heading"><span>FAQs</span></h6>
                                <h3 className="heading wow" data-splitting>Frequently
                                    <br />
                                    Aksed Questions</h3>
                                {/* <p>Below is a list of frequently asked questions and answers from partners and 3D artist. Please check this FAQ first before contacting us.</p> */}
                            </div>
                            <RestaurantFaq oneCol/>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="image" data-aos="fade-left" data-aos-duration={2000}>
                                <img src="/assets/images/enviorments/adl-full.JPG" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
