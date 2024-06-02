import Link from "next/link"


export default function About1() {

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
            <section className="about mb-150" id="about-section">
                <div className="shape" />
                <div className="container">
                    <div className="row rev">
                        <div className="col-xl-6 col-md-12">
                            <div className="about__right">
                                <div className="images">
                                    <img className="img1" src="/assets/images/layouts/about2.jpeg" alt="" />
                                    <img className="img2" src="/assets/images/layouts/about1.jpg" alt="" />
                                    <img className="img3" src="/assets/images/layouts/about3.jpeg" alt="" />
                                    <img className="img4" src="/assets/images/layouts/mobile.JPG" alt="" />
                                    <img className="img5" src="/assets/images/layouts/adl-full2.JPG" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="block-text">
                                <h6 className="sub-heading"><span>About us</span></h6>
                                <h3 className="heading wow" data-splitting>Building the
                                    Robot of the future</h3>
                                <p className="mb-17">Welcome to [Company Name], where we revolutionize the restaurant industry with cutting-edge technology.</p>
                                <p className="mb-17">Our mission is to optimize your restaurant operations by providing advanced service robots that handle kitchen and maintenance tasks.</p>
                                <p className="mb-26">This allows your staff to focus on their passion for cooking and providing exceptional customer service.</p>
                                {/* <a onClick={(e) => scrolltoHash('features-section')} className="action-btn"><span>Learn More</span></a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


