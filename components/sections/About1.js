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
            <section className="about" id="about-section">
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
                                <h3 className="heading wow" data-splitting>A truly
                                    General-purpose robot</h3>
                                <p className="mb-17">We are a team with a mission, to build the world's first Robot butler. A fully autonomous and highly dextrous 
                                mobile robot for the domestic space. The ChatGPT for your home.</p>
                                <p className="mb-26">A normal human being spends around 30% of their time in mundane household chores like cooking and cleaning. 
                                We at ADL Robotics aim to solve this by developing a general purpose Robot for the domestic space that can complete tasks just like a human.</p>
                                <a onClick={(e) => scrolltoHash('features-section')} className="action-btn"><span>Learn More</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
