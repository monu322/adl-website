// import Layout from "@/components/layout/Layout"
// export default function Contact() {

//     return (
//         <>
//             <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact">
//             <div className="page-contact">
//                     <section className="touch">
//                         <div className="container">
//                             <div className="row">
//                                 <div className="col-12">
//                                     <div className="block-text center">
//                                         <h6 className="sub-heading"><span>Get in Touch!</span></h6>
//                                         <h3 className="heading">Let’s Start Working <br />
//                                             Together
//                                         </h3>
//                                     </div>
//                                     <div className="touch__main">
//                                         <div className="info">
//                                             <h5>Contact information</h5>
//                                             <ul className="list">

//                                                 <li>
//                                                     <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                                         <path d="M14.5 4.5V11.5C14.5 11.8978 14.342 12.2794 14.0607 12.5607C13.7794 12.842 13.3978 13 13 13H3C2.60218 13 2.22064 12.842 1.93934 12.5607C1.65804 12.2794 1.5 11.8978 1.5 11.5V4.5M14.5 4.5C14.5 4.10218 14.342 3.72064 14.0607 3.43934C13.7794 3.15804 13.3978 3 13 3H3C2.60218 3 2.22064 3.15804 1.93934 3.43934C1.65804 3.72064 1.5 4.10218 1.5 4.5M14.5 4.5V4.662C14.5 4.9181 14.4345 5.16994 14.3096 5.39353C14.1848 5.61712 14.0047 5.80502 13.7867 5.93933L8.78667 9.016C8.55014 9.16169 8.2778 9.23883 8 9.23883C7.7222 9.23883 7.44986 9.16169 7.21333 9.016L2.21333 5.94C1.99528 5.80569 1.81525 5.61779 1.69038 5.3942C1.56551 5.1706 1.49997 4.91876 1.5 4.66267V4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                                     </svg>
//                                                     <p>contact@adlrobotics.com</p>
//                                                 </li>
//                                             </ul>
//                                             <div className="image">
//                                                 <img src="/assets/images/layouts/contact-form.png" alt="" />
//                                             </div>
//                                         </div>
//                                         <form action="#" className="form-box">
//                                             <div className="row">
//                                                 <div className="col-md-6">
//                                                     <label>Your name</label>
//                                                     <input type="text" className="form-control" />
//                                                 </div>
//                                                 <div className="col-md-6">
//                                                     <label>Your email</label>
//                                                     <input type="email" className="form-control" />
//                                                 </div>
//                                             </div>
//                                             <div className="row">
//                                                 <div className="col">
//                                                     <label>Your phone</label>
//                                                     <input type="text" className="form-control" />
//                                                 </div>
//                                                 <div className="col">
//                                                     <label>Subject</label>
//                                                     <input type="text" className="form-control" />
//                                                 </div>
//                                             </div>
//                                             <div className="row">
//                                                 <div className="col">
//                                                     <label>Message</label>
//                                                     <textarea name="mess" id="mess" cols={30} rows={10} />
//                                                 </div>
//                                             </div>
//                                             <div className="row mb-0">
//                                                 <div className="col">
//                                                     <button className="action-btn"><span>Send Now</span></button>
//                                                 </div>
//                                             </div>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>

//             </div>

//             </Layout>
//         </>
//     )
// }

import { useState } from 'react';
import axios from 'axios';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Clear errors when input changes
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');
        setSuccessMessage('');

        try {
            const response = await axios.post('/api/contact', formData);
            setSuccessMessage(response.data.message);
            // Clear form after successful submission
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            });
        } catch (error) {
            if (error.response) {
                // Server responded with an error
                setErrorMessage(error.response.data.error);
            } else {
                // Something went wrong with the request
                setErrorMessage('Something went wrong. Please try again later.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
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
                                                <path d="M14.5 4.5V11.5C14.5 11.8978 14.342 12.2794 14.0607 12.5607C13.7794 12.842 13.3978 13 13 13H3C2.60218 13 2.22064 12.842 1.93934 12.5607C1.65804 12.2794 1.5 11.8978 1.5 11.5V4.5M14.5 4.5C14.5 4.10218 14.342 3.72064 14.0607 3.43934C13.7794 3.15804 13.3978 3 13 3H3C2.60218 3 2.22064 3.15804 1.93934 3.43934C1.65804 3.72064 1.5 4.10218 1.5 4.5M14.5 4.5V4.662C14.5 4.9181 14.4345 5.16994 14.3096 5.39353C14.1848 5.61712 14.0047 5.80502 13.7867 5.93933L8.78667 9.016C8.55014 9.16169 8.2778 9.23883 8 9.23883C7.7222 9.23883 7.44986 9.16169 7.21333 9.016L2.21333 5.94C1.99528 5.80569 1.81525 5.61779 1.69038 5.3942C1.56551 5.1706 1.49997 4.91876 1.5 4.66267V4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p>contact@adlrobotics.com</p>
                                        </li>
                                    </ul>
                                    <div className="image">
                                        <img src="/assets/images/layouts/contact-form.png" alt="" />
                                    </div>
                                </div>
                                <form className="form-box">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Your name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                            {errors.name && <p className="error-message">{errors.name}</p>}
                                        </div>
                                        <div className="col-md-6">
                                            <label>Your email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                            {errors.email && <p className="error-message">{errors.email}</p>}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <label>Your phone</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                            {errors.phone && <p className="error-message">{errors.phone}</p>}
                                        </div>
                                        <div className="col">
                                            <label>Subject</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                            />
                                            {errors.subject && <p className="error-message">{errors.subject}</p>}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <label>Message</label>
                                            <textarea
                                                name="message"
                                                id="message"
                                                cols={30}
                                                rows={10}
                                                value={formData.message}
                                                onChange={handleChange}
                                            />
                                            {errors.message && <p className="error-message">{errors.message}</p>}
                                        </div>
                                    </div>
                                    <div className="row mb-0">
                                        <div className="col">
                                            <button type="button" className="action-btn" disabled={loading} onClick={handleSubmit}>
                                                <span>{loading ? 'Sending...' : 'Send Nowww'}</span>
                                            </button>
                                        </div>
                                    </div>
                                    {successMessage && <div className="success-message">{successMessage}</div>}
                                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

