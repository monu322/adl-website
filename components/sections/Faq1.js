

import { useState } from 'react'
import Accordion from '../elements/Accordion'
export default function Faq1() {

    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <section className="faq">
                <div className="shape right" />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center" data-aos="fade-down" data-aos-duration={3000}>
                                <h6 className="sub-heading"><span>FAQs</span></h6>
                                <h3 className="heading">Frequently
                                    <br />
                                    Aksed Questions</h3>
                                <p className="mb-17">Below is a list of frequently asked questions and answers from partners and 3D artist</p>
                                <p>Please check this FAQ first before contacting us.</p>
                            </div>
                            <Accordion />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
