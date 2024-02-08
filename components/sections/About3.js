import Link from "next/link"


export default function About3() {
    return (
        <>
            <section className="about s3">
                <div className="shape" />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="block-text pd-0">
                                <h6 className="sub-heading"><span>About us</span></h6>
                                <h3 className="heading wow" data-splitting>Hight Quality
                                    NFT Collections</h3>
                                <p className="mb-17">Cyfonii is the premier marketplace for nifties, which are digital items you can truly own for yourself</p>
                                <p className="mb-26">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laborum velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat</p>
                                <Link href="/about" className="action-btn"><span>More About Us</span></Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="about__right" data-aos="fade-left" data-aos-duration={2000}>
                                <div className="card-box">
                                    <div className="top d-flex">
                                        <span className="icon-logo-01" />
                                        <div>
                                            <h6>3D Digital Artwork</h6>
                                            <h6 className="price">2.26 ETH</h6>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <div className="image">
                                            <img src="/assets/images/layouts/banner-04.png" alt="" />
                                        </div>
                                        <div className="info d-flex">
                                            <img src="/assets/images/layouts/avt-07.png" alt="" />
                                            <div>
                                                <h6 className="name">Leslie Alexander</h6>
                                                <p>@leslie754</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-box sm">
                                    <div className="top d-flex">
                                        <span className="icon-logo-01" />
                                        <div>
                                            <h6>3D Digital Artwork</h6>
                                            <h6 className="price">2.26 ETH</h6>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <div className="image">
                                            <img src="/assets/images/layouts/banner-05.png" alt="" />
                                        </div>
                                        <div className="info d-flex">
                                            <img src="/assets/images/layouts/avt-07.png" alt="" />
                                            <div>
                                                <h6 className="name">Leslie Alexander</h6>
                                                <p>@leslie754</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
