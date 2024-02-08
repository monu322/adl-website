

import Accordion from '../elements/Accordion'
export default function Faq2() {
    return (
        <>
            <section className="faq s2">
                <div className="shape" />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center">
                                <h6 className="sub-heading"><span>FAQs</span></h6>
                                <h3 className="heading wow" data-splitting>Frequently
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
