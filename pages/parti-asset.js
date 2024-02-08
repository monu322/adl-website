import Accordion from "@/components/elements/Accordion"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function PartiAsset() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Participants & Assets">
                <div>
                    <section className="participants">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="block-text center">
                                        <h3 className="heading">Participants </h3>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="blog-box">
                                        <div className="image">
                                            <Link href="#"><img src="/assets/images/layouts/par-01.png" alt="" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="blog-box">
                                        <div className="image">
                                            <Link href="#"><img src="/assets/images/layouts/par-02.png" alt="" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="blog-box">
                                        <div className="image">
                                            <Link href="#"><img src="/assets/images/layouts/par-03.png" alt="" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="par-bot center">
                                        <p className="mb-17">In BIZVERSE, there are users with equal roles in a common community, depending on the token ownership process and user's investment decision, it will determine the activities and rights that the user is allowed.</p>
                                        <p className="mb-28">All members in system can choose for themselves a 3D Avatar with many styles, skin colors, shapes, hair, clothes, shoes, glasses, hats... according to their preferences as soon as they join Bizverse and it is also a vrNFT asset class.</p>
                                        <Link href="#" className="action-btn"><span>
                                            Join us</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="assets">
                        <div className="shape" />
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="block-text center">
                                        <h3 className="heading">Assets</h3>
                                        <p>In the world of BIZVERSE, users are allowed to be creative, the system will allow users to participate in creating their own digital assets in the form of non-fungible tokens NFT. These NFTs will then be exchanged, transferred at Marketplace or at their own showroom in shopping centers. At that time, even players can easily make profits from the NFT they have created.</p>
                                    </div>
                                    <div className="assets__main center">
                                        <h5>Assets (NFTs) tree</h5>
                                        <img src="/assets/images/layouts/map.png" alt="" />
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