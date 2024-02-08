import BrandSlider1 from "../slider/BrandSlider1"
import ProjectSlider3 from "../slider/ProjectSlider3"


export default function Project3() {
    return (
        <>
            <section className="project s3">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center">
                                <h6 className="sub-heading"><span>NFT Portfolio Collections</span></h6>
                                <h3 className="heading wow" data-splitting>Checkout Our NFT <br />
                                    Collections</h3>
                            </div>
                            <ProjectSlider3 />
                            <div className="brands s3 block-text center pd-0">
                                <h6 className="sub-heading"><span>We Are Partnered with Top Brands</span></h6>
                                <BrandSlider1 />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
