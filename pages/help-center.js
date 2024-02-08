import Accordion from "@/components/elements/Accordion"
import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function HelpCenter() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Help Center">
                <div className="page-help">
                    <section className="faq">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="block-text center">
                                        <h6 className="sub-heading"><span>FAQs</span></h6>
                                        <h3 className="heading">We Hope You Find What You
                                            <br />
                                            are Looking for</h3>
                                        <p className="mb-17">Below is a list of frequently asked questions and answers from partners and 3D artist</p>
                                        <p>Please check this FAQ first before contacting us.</p>
                                        <form action="#" className="widget-search">
                                            <input type="text" placeholder="Search..." required />
                                            <Link className="btn-search" href="">
                                                <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="9.7659" cy="9.76639" r="8.98856" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M16.0176 16.4849L19.5416 19.9997" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Link>
                                        </form>
                                    </div>
                                    <Accordion />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="watch-video">
                        <div className="shape" />
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="block-text center">
                                        <h3 className="heading">See how we
                                            <br />
                                            solve problems</h3>
                                    </div>
                                    <div className="watch-video__main">
                                        <div className="main">
                                            <div className="wrap-video">
                                                <VideoPopup />
                                            </div>
                                            <h5>Watch video</h5>
                                            <img src="/assets/images/layouts/mockup.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}