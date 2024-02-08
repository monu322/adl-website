import Link from "next/link"
import BannerSlider1 from "../slider/BannerSlider1"


export default function Banner2() {
    return (
        <>
            <section className="banner s2">
                <div className="shape" />
                <div className="shape right" />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center">
                                <h6 className="sub-heading"><span>We are Monteno NFT</span></h6>
                                <h2 className="heading">Most Popular <span className="arlo_tm_animation_text_word" /> <br />
                                    Collections
                                </h2>
                                <p className="mb-34">Cyfonii is the premier marketplace for nifties, which are digital items you can truly own for yourself</p>
                                <Link href="/contact" className="action-btn"><span>Get Connected</span></Link>
                            </div>
                            <BannerSlider1 />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
