import Link from "next/link"


export default function Roadmap1() {
    return (
        <>
            <section className="roadmap" id="roadmap-section">
                <img src="/assets/images/background/line.png" alt="" className="img-line" />
                <div className="shape" />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center">
                                <h6 className="sub-heading"><span>Road Map</span></h6>
                                <h3 className="heading wow" data-splitting>The Journey of <br />
                                    ADL Robotics</h3>
                            </div>
                            <div className="roadmap__main" data-aos="fade-up" data-aos-duration={2000}>
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
                                <div className="icon" />
                                <div className="icon bottom" />
                            </div>
                            <div className="button">
                                <Link href="/roadmap" className="action-btn"><span>View Full Road Map</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
