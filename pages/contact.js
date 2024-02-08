import Accordion from "@/components/elements/Accordion"
import Layout from "@/components/layout/Layout"
export default function Contact() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact">
            <div className="page-contact">
                    <section className="touch">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="block-text center">
                                        <h6 className="sub-heading"><span>Get in Touch!</span></h6>
                                        <h3 className="heading">Let’s Start Working <br />
                                            Together
                                        </h3>
                                    </div>
                                    <div className="touch__main">
                                        <div className="info">
                                            <h5>Contact information</h5>
                                            <ul className="list">
                                                <li>
                                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7V7Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7V7Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <p>20, Backway Road, New York, US AB42</p>
                                                </li>
                                                <li>
                                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_794_6441)">
                                                            <path d="M1.5 4.5C1.5 10.0227 5.97733 14.5 11.5 14.5H13C13.3978 14.5 13.7794 14.342 14.0607 14.0607C14.342 13.7794 14.5 13.3978 14.5 13V12.0853C14.5 11.7413 14.266 11.4413 13.932 11.358L10.9833 10.6207C10.69 10.5473 10.382 10.6573 10.2013 10.8987L9.55467 11.7607C9.36667 12.0113 9.042 12.122 8.748 12.014C7.65659 11.6128 6.66544 10.9791 5.84319 10.1568C5.02094 9.33456 4.38725 8.34341 3.986 7.252C3.878 6.958 3.98867 6.63333 4.23933 6.44533L5.10133 5.79867C5.34333 5.618 5.45267 5.30933 5.37933 5.01667L4.642 2.068C4.60143 1.9058 4.50781 1.7618 4.37604 1.65889C4.24426 1.55598 4.08187 1.50006 3.91467 1.5H3C2.60218 1.5 2.22064 1.65804 1.93934 1.93934C1.65804 2.22064 1.5 2.60218 1.5 3V4.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_794_6441">
                                                                <rect width={16} height={16} fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <p>+000-000-000-000</p>
                                                </li>
                                                <li>
                                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.5 4.5V11.5C14.5 11.8978 14.342 12.2794 14.0607 12.5607C13.7794 12.842 13.3978 13 13 13H3C2.60218 13 2.22064 12.842 1.93934 12.5607C1.65804 12.2794 1.5 11.8978 1.5 11.5V4.5M14.5 4.5C14.5 4.10218 14.342 3.72064 14.0607 3.43934C13.7794 3.15804 13.3978 3 13 3H3C2.60218 3 2.22064 3.15804 1.93934 3.43934C1.65804 3.72064 1.5 4.10218 1.5 4.5M14.5 4.5V4.662C14.5 4.9181 14.4345 5.16994 14.3096 5.39353C14.1848 5.61712 14.0047 5.80502 13.7867 5.93933L8.78667 9.016C8.55014 9.16169 8.2778 9.23883 8 9.23883C7.7222 9.23883 7.44986 9.16169 7.21333 9.016L2.21333 5.94C1.99528 5.80569 1.81525 5.61779 1.69038 5.3942C1.56551 5.1706 1.49997 4.91876 1.5 4.66267V4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <p>support@gmail.com</p>
                                                </li>
                                            </ul>
                                            <div className="image">
                                                <img src="/assets/images/layouts/touch.png" alt="" />
                                            </div>
                                        </div>
                                        <form action="#" className="form-box">
                                            <div className="row">
                                                <div className="col">
                                                    <label>Your name</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="col">
                                                    <label>Your email</label>
                                                    <input type="email" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <label>Your phone</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="col">
                                                    <label>Subject</label>
                                                    <select className="form-control">
                                                        <option>Select</option>
                                                        <option>Select</option>
                                                        <option>Select</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <label>Message</label>
                                                    <textarea name="mess" id="mess" cols={30} rows={10} />
                                                </div>
                                            </div>
                                            <div className="row mb-0">
                                                <div className="col">
                                                    <button className="action-btn"><span>Send Now</span></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="map">
                        <div className="container">
                            <div className="row">
                                <div className="map__main">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86077.66255184308!2d-122.40402224079803!3d47.60810999586645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ab3f905c4b1%3A0x96bf575ff75ab1aa!2s411%20University%20St%2C%20Seattle%2C%20WA%2098101%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1584084043716!5m2!1svi!2s" height={600} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="faq s3">
                        <div className="shape" />
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-md-12">
                                    <div className="block-text">
                                        <h6 className="sub-heading"><span>FAQs</span></h6>
                                        <h3 className="heading">Frequently
                                            <br />
                                            Aksed Questions</h3>
                                        <p>Below is a list of frequently asked questions and answers from partners and 3D artist. Please check this FAQ first before contacting us.</p>
                                    </div>
                                    <Accordion oneCol/>
                                </div>
                                <div className="col-xl-6 col-md-12">
                                    <div className="image">
                                        <img src="/assets/images/layouts/img-faq.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}