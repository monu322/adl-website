import Link from "next/link"


export default function Banner1() {

    // let's make a function that receive the specific element_id as string and scroll into that element_id
  const scrolltoHash = function (element_id) {
    
    const element = document.getElementById(element_id)
    console.log(element)
    console.log(element.offsetTop)

    const scrollTop = element.offsetTop
    
    if(window)
    {
        window.scrollTo({
            top: scrollTop-150,
            behavior: 'smooth',
        })
    }

    return false;

  }

    return (
        <>
            <section className="banner">

                <video poster="/assets/images/background/banner-video-bg.png" className="banner-video" autoPlay playsInline loop muted>
                    <source src="https://www.neurosphere.tech/assets/video/pan_video.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>

                {/* <div className="shape right" /> */}
                <div className="container big banner-container banner-container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="banner__left">
                                <div className="block-text">
                                    {/* <h2 className="heading">World's First<br />
                                        Robot <span className="s1 arlo_tm_animation_text_word" />
                                        Butler</h2> */}
                                        <h2 className="heading">Revolutionize Your Daily Life with Our General-Purpose Robots</h2>
                                    <p className="desc">Enhance Independence, Boost Productivity, and Improve Quality of Life</p>
                                    <a onClick={(e) => scrolltoHash('about-section')} className="action-btn"><span>Explore Our Robots | Learn More</span></a>
                                </div>
                                <div className="pay">
                                    <h6>We are supported by</h6>
                                    <div className="list">
                                        <ul>
                                            <li>
                                                <img src="/assets/images/logo/dassault-logo-white.svg" alt="dassault systems logo" width={160} height={38} data-width={260} data-height={60} />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-xl-6 col-md-12">
                            <div className="banner__right">
                                <div className="image">
                                    <img src="/assets/images/layouts/banner.png" alt="" />
                                </div>
                                <div className="price">
                                    <div className="icon">
                                        <img src="/assets/images/icon/icon-01.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <p>Current Bid</p>
                                        <h5>2.26 ETH</h5>
                                    </div>
                                </div>
                                <div className="owner">
                                    <div className="image">
                                        <img src="/assets/images/layouts/avt-01.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <h5>Leslie Alexander</h5>
                                        <p>@leslie754</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}
