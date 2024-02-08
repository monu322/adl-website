import Link from "next/link"


export default function Project2() {
    return (
        <>
            <section className="project s2">
                <div className="shape right" />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center">
                                <h6 className="sub-heading"><span>Our Speciality</span></h6>
                                <h3 className="heading wow" data-splitting>OUR COLLECTION</h3>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="project-box">
                                <div className="image">
                                    <Link href="/nft">
                                        <img src="/assets/images/item/item-01.png" alt="" />
                                    </Link>
                                </div>
                                <div className="content">
                                    <Link href="/nft" className="h5 title">3D Digital Artwork</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="project-box">
                                <div className="image">
                                    <Link href="/nft">
                                        <img src="/assets/images/item/item-02.png" alt="" />
                                    </Link>
                                </div>
                                <div className="content">
                                    <Link href="/nft" className="h5 title">King Of Pirates</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="project-box">
                                <div className="image">
                                    <Link href="/nft">
                                        <img src="/assets/images/item/item-03.png" alt="" />
                                    </Link>
                                </div>
                                <div className="content">
                                    <Link href="/nft" className="h5 title">Pomeranian Doge</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="project-box">
                                <div className="image">
                                    <Link href="/nft">
                                        <img src="/assets/images/item/item-04.png" alt="" />
                                    </Link>
                                </div>
                                <div className="content">
                                    <Link href="/nft" className="h5 title">3D Digital Artwork</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="project-box">
                                <div className="image">
                                    <Link href="/nft">
                                        <img src="/assets/images/item/item-05.png" alt="" />
                                    </Link>
                                </div>
                                <div className="content">
                                    <Link href="/nft" className="h5 title">Nintendo Switch</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="project-box">
                                <div className="image">
                                    <Link href="/nft">
                                        <img src="/assets/images/item/item-06.png" alt="" />
                                    </Link>
                                </div>
                                <div className="content">
                                    <Link href="/nft" className="h5 title">The Strange Art</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="project-box">
                                <div className="image">
                                    <Link href="/nft">
                                        <img src="/assets/images/item/item-07.png" alt="" />
                                    </Link>
                                </div>
                                <div className="content">
                                    <Link href="/nft" className="h5 title">Pixel Art Addicted</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="project-box">
                                <div className="image">
                                    <Link href="/nft">
                                        <img src="/assets/images/item/item-08.png" alt="" />
                                    </Link>
                                </div>
                                <div className="content">
                                    <Link href="/nft" className="h5 title">3D Digital Artwork</Link>
                                </div>
                            </div>
                        </div>
                        <div className="button mt-0">
                            <Link href="/nft" className="action-btn"><span>View All COLLECTION</span></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
