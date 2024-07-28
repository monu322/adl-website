import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function Contact() {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Please enter your name")
      .min(3, "Name must be at least 3 characters long")
      .max(50, "Name cannot exceed 50 characters"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Please enter your email"),
    phone: Yup.string()
      .required("Please enter your phone number"),
    subject: Yup.string()
      .required("Please enter a subject")
      .min(5, "Subject must be at least 5 characters long")
      .max(100, "Subject cannot exceed 100 characters"),
    message: Yup.string()
      .required("Please enter your message")
      .min(10, "Message must be at least 10 characters long"),
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setFieldError }
  ) => {
    try {
      const response = await axios.post("/api/contact-api", values);
      setSuccessMessage("Message submitted successfully");
      resetForm();
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000); // Hide message after 3 seconds
    } catch (error) {
      console.log("Failed to submit form.");
      if (error.response) {
        setFieldError("submit", error.response.data.error || "Failed to Submit");
      } else {
        setFieldError(
          "submit",
          "Something went wrong. Please try again later."
        );
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="block-text center">
              <h6 className="sub-heading">
                <span>Get in Touch!</span>
              </h6>
              <h3 className="heading">
                Let’s Start Working <br /> Together
              </h3>
            </div>
            <div className="touch__main">
              <div className="info">
                <h5>Contact information</h5>
                <ul className="list">
                  <li>
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.5 4.5V11.5C14.5 11.8978 14.342 12.2794 14.0607 12.5607C13.7794 12.842 13.3978 13 13 13H3C2.60218 13 2.22064 12.842 1.93934 12.5607C1.65804 12.2794 1.5 11.8978 1.5 11.5V4.5M14.5 4.5C14.5 4.10218 14.342 3.72064 14.0607 3.43934C13.7794 3.15804 13.3978 3 13 3H3C2.60218 3 2.22064 3.15804 1.93934 3.43934C1.65804 3.72064 1.5 4.10218 1.5 4.5M14.5 4.5V4.662C14.5 4.9181 14.4345 5.16994 14.3096 5.39353C14.1848 5.61712 14.0047 5.80502 13.7867 5.93933L8.78667 9.016C8.55014 9.16169 8.2778 9.23883 8 9.23883C7.7222 9.23883 7.44986 9.16169 7.21333 9.016L2.21333 5.94C1.99528 5.80569 1.81525 5.61779 1.69038 5.3942C1.56551 5.1706 1.49997 4.91876 1.5 4.66267V4.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p>operations@adlrobotics.com</p>
                  </li>
                  
                  <li>
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.5 4.5V11.5C14.5 11.8978 14.342 12.2794 14.0607 12.5607C13.7794 12.842 13.3978 13 13 13H3C2.60218 13 2.22064 12.842 1.93934 12.5607C1.65804 12.2794 1.5 11.8978 1.5 11.5V4.5M14.5 4.5C14.5 4.10218 14.342 3.72064 14.0607 3.43934C13.7794 3.15804 13.3978 3 13 3H3C2.60218 3 2.22064 3.15804 1.93934 3.43934C1.65804 3.72064 1.5 4.10218 1.5 4.5M14.5 4.5V4.662C14.5 4.9181 14.4345 5.16994 14.3096 5.39353C14.1848 5.61712 14.0047 5.80502 13.7867 5.93933L8.78667 9.016C8.55014 9.16169 8.2778 9.23883 8 9.23883C7.7222 9.23883 7.44986 9.16169 7.21333 9.016L2.21333 5.94C1.99528 5.80569 1.81525 5.61779 1.69038 5.3942C1.56551 5.1706 1.49997 4.91876 1.5 4.66267V4.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p>sales@adlrobotics.com</p>
                  </li>
                </ul>
                <div className="image">
                  <img src="/assets/images/layouts/contact-form.png" alt="" />
                </div>
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="form-box">
                    <div className="row">
                      <div className="col-md-6">
                        <label>Your name</label>
                        <Field
                          type="text"
                          className="form-control"
                          name="name"
                        />
                        <ErrorMessage
                          name="name"
                          component="p"
                          className="error-message"
                        />
                      </div>
                      <div className="col-md-6">
                        <label>Your email</label>
                        <Field
                          type="email"
                          className="form-control"
                          name="email"
                        />
                        <ErrorMessage
                          name="email"
                          component="p"
                          className="error-message"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <label>Your phone</label>
                        <Field
                          type="text"
                          className="form-control"
                          name="phone"
                        />
                        <ErrorMessage
                          name="phone"
                          component="p"
                          className="error-message"
                        />
                      </div>
                      <div className="col">
                        <label>Subject</label>
                        <Field
                          type="text"
                          className="form-control"
                          name="subject"
                        />
                        <ErrorMessage
                          name="subject"
                          component="p"
                          className="error-message"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <label>Message</label>
                        <Field
                          as="textarea"
                          className="form-control"
                          name="message"
                        />
                        <ErrorMessage
                          name="message"
                          component="p"
                          className="error-message"
                        />
                      </div>
                    </div>
                    <div className="row mb-0">
                      <div className="col">
                        <button
                          type="submit"
                          className="action-btn mr-4"
                          disabled={isSubmitting}
                        >
                          <span>
                            {isSubmitting ? "Sending..." : "Send Now"}
                          </span>
                        </button>
                        {successMessage && (
                          <span className="ml-3 success-message">
                            {successMessage}
                          </span>
                        )}
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
