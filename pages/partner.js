import Accordion from "@/components/elements/Accordion"
import Layout from "@/components/layout/Layout"
import BrandSlider1 from "@/components/slider/BrandSlider1"
export default function Partner() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Partners & Investors">
                <div>
                    <section className="partner">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="block-text center">
                                        <h3 className="heading">Partners &amp; Investors
                                        </h3>
                                    </div>
                                    <div className="swiper brands-swiper">
                                        <BrandSlider1 />
                                    </div>
                                    <div className="swiper brands-swiper">
                                        <BrandSlider1 />
                                    </div>
                                    <div className="swiper brands-swiper">
                                        <BrandSlider1 />
                                    </div>
                                    <div className="swiper brands-swiper">
                                        <BrandSlider1 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="faq">
                        <div className="shape" />
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="block-text center">
                                        <h6 className="sub-heading"><span>FAQs</span></h6>
                                        <h3 className="heading">Frequently
                                            <br />
                                            Aksed Questions</h3>
                                        <p className="mb-17">Below is a list of frequently asked questions and answers from partners and 3D artist</p>
                                        <p>Please check this FAQ first before contacting us.</p>
                                    </div>
                                    <Accordion />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}