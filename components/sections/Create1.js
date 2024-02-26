import Link from "next/link"


export default function Create1() {
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
            <section className="create">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="create__main">
                                <div className="content">
                                    <h4 className="heading">Join us in our journey</h4>
                                    <p className="contact-para">We are always in the lookout for ambitious and passionate partners to work together and build 
                                    the Robot of the future.</p>
                                    <a onClick={(e) => scrolltoHash('contact-section')} className="action-btn"><span>Get in touch</span></a>
                                </div>
                                <img src="/assets/images/layouts/contact.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
