import Link from "next/link"


export default function About1() {
    return (
        <>
            <section className="about">
                <div className="shape" />
                <div className="container">
                    <div className="row rev">
                        <div className="col-xl-6 col-md-12">
                            <div className="about__right">
                                <div className="images">
                                    <img className="img1" src="/assets/images/layouts/about-01.png" alt="" />
                                    <img className="img2" src="/assets/images/layouts/about-02.png" alt="" />
                                    <img className="img3" src="/assets/images/layouts/about-03.png" alt="" />
                                    <img className="img4" src="/assets/images/layouts/about-04.png" alt="" />
                                    <img className="img5" src="/assets/images/layouts/about-05.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="block-text">
                                <h6 className="sub-heading"><span>About us</span></h6>
                                <h3 className="heading wow" data-splitting>Building the
                                    Robot of the future</h3>
                                <p className="mb-17">We are a team with a mission, to build the world's first Robot butler. the chatGPT for your home.</p>
                                <p className="mb-26">A normal human being spends around 30% of their time in mundane household chores such as cooking and cleaning. 
                                We at ADL Robotics aim to solve this by developing a general purpose Robot for the domestic space that can complete tasks just like a human.</p>
                                <Link href="/about" className="action-btn"><span>Learn More</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
