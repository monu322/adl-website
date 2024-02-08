import RoadmapSlider1 from "../slider/RoadmapSlider1"


export default function Roadmap2() {
    return (
        <>
            <section className="roadmap s2">
                <div className="shape" />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center">
                                <h6 className="sub-heading"><span>Road Map</span></h6>
                                <h3 className="heading wow" data-splitting>The Journey of NFT
                                    <br />
                                    Portfolio</h3>
                            </div>
                            <div className="roadmap__main s1">
                                <RoadmapSlider1 />
                                {/* <div className="icon"></div>
                  <div className="icon bottom"></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
