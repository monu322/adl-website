import Link from "next/link"


export default function Create1() {
    return (
        <>
            <section className="create">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="create__main">
                                <div className="content">
                                    <h4 className="heading">Join us in our journey</h4>
                                    <p>We are always in the lookout for partners that share our ambition and bold enough<br/>to build the future.</p>
                                    <Link href="/contact" className="action-btn"><span>Get in touch</span></Link>
                                </div>
                                <img src="/assets/images/layouts/create.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
