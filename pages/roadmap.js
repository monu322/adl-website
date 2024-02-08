import Accordion from "@/components/elements/Accordion"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Roadmap() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Road Map">
            <div className="page-roadmap">
                    <section className="roadmap">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="block-text center">
                                        <h6 className="sub-heading"><span>Road Map</span></h6>
                                        <h3 className="heading">The Journey of <br />
                                            Cyfonii NFT</h3>
                                    </div>
                                    <div className="roadmap__main">
                                        <div className="roadmap-box">
                                            <div className="time">February 01, 2022</div>
                                            <div className="content">
                                                <h5 className="title">Idea Generation</h5>
                                                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.</p>
                                            </div>
                                        </div>
                                        <div className="roadmap-box right">
                                            <div className="time">February 01, 2022</div>
                                            <div className="content">
                                                <h5 className="title">Design &amp; Development</h5>
                                                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.</p>
                                            </div>
                                        </div>
                                        <div className="roadmap-box">
                                            <div className="time">February 01, 2022</div>
                                            <div className="content">
                                                <h5 className="title">Initial Release</h5>
                                                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.</p>
                                            </div>
                                        </div>
                                        <div className="roadmap-box right">
                                            <div className="time">February 01, 2022</div>
                                            <div className="content">
                                                <h5 className="title">Result &amp; Final Report</h5>
                                                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.</p>
                                            </div>
                                        </div>
                                        <div className="roadmap-box">
                                            <div className="time">February 01, 2022</div>
                                            <div className="content">
                                                <h5 className="title">Design &amp; Development</h5>
                                                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.</p>
                                            </div>
                                        </div>
                                        <div className="roadmap-box right">
                                            <div className="time">February 01, 2022</div>
                                            <div className="content">
                                                <h5 className="title">Design &amp; Development</h5>
                                                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.</p>
                                            </div>
                                        </div>
                                        <div className="roadmap-box">
                                            <div className="time">February 01, 2022</div>
                                            <div className="content">
                                                <h5 className="title">Design &amp; Development</h5>
                                                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.</p>
                                            </div>
                                        </div>
                                        <div className="roadmap-box right">
                                            <div className="time">February 01, 2022</div>
                                            <div className="content">
                                                <h5 className="title">Design &amp; Development</h5>
                                                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.</p>
                                            </div>
                                        </div>
                                        <div className="roadmap-box">
                                            <div className="time">February 01, 2022</div>
                                            <div className="content">
                                                <h5 className="title">Design &amp; Development</h5>
                                                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.</p>
                                            </div>
                                        </div>
                                        <div className="icon" />
                                        <div className="icon bottom" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="project s2">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="block-text center">
                                        <h6 className="sub-heading"><span>Our Speciality</span></h6>
                                        <h3 className="heading">OUR COLLECTION</h3>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="project-box">
                                        <div className="image">
                                            <Link href="/nft"><img src="/assets/images/item/item-01.png" alt="" /></Link>
                                        </div>
                                        <div className="content">
                                            <Link href="/nft" className="h5 title">3D Digital Artwork</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="project-box">
                                        <div className="image">
                                            <Link href="/nft"><img src="/assets/images/item/item-02.png" alt="" /></Link>
                                        </div>
                                        <div className="content">
                                            <Link href="/nft" className="h5 title">King Of Pirates</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="project-box">
                                        <div className="image">
                                            <Link href="/nft"><img src="/assets/images/item/item-03.png" alt="" /></Link>
                                        </div>
                                        <div className="content">
                                            <Link href="/nft" className="h5 title">Pomeranian Doge</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="project-box">
                                        <div className="image">
                                            <Link href="/nft"><img src="/assets/images/item/item-04.png" alt="" /></Link>
                                        </div>
                                        <div className="content">
                                            <Link href="/nft" className="h5 title">Nintendo Switch</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="project-box">
                                        <div className="image">
                                            <Link href="/nft"><img src="/assets/images/item/item-05.png" alt="" /></Link>
                                        </div>
                                        <div className="content">
                                            <Link href="/nft" className="h5 title">The Strange Art</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="project-box">
                                        <div className="image">
                                            <Link href="/nft"><img src="/assets/images/item/item-06.png" alt="" /></Link>
                                        </div>
                                        <div className="content">
                                            <Link href="/nft" className="h5 title">3D Digital Artwork</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="project-box">
                                        <div className="image">
                                            <Link href="/nft"><img src="/assets/images/item/item-07.png" alt="" /></Link>
                                        </div>
                                        <div className="content">
                                            <Link href="/nft" className="h5 title">Pixel Art Addicted</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="project-box">
                                        <div className="image">
                                            <Link href="/nft"><img src="/assets/images/item/item-08.png" alt="" /></Link>
                                        </div>
                                        <div className="content">
                                            <Link href="/nft" className="h5 title">3D Digital Artwork</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="faq s3">
                        <div className="shape" />
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-md-12">
                                    <div className="block-text">
                                        <h6 className="sub-heading"><span>FAQs</span></h6>
                                        <h3 className="heading">Frequently
                                            <br />
                                            Aksed Questions</h3>
                                        <p>Below is a list of frequently asked questions and answers from partners and 3D artist. Please check this FAQ first before contacting us.</p>
                                    </div>
                                    <Accordion oneCol/>
                                </div>
                                <div className="col-xl-6 col-md-12">
                                    <div className="image">
                                        <img src="/assets/images/layouts/img-faq.png" alt="" />
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