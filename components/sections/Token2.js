import Link from "next/link";

export default function Token1() {
  return (
    <>
      <section className="token mt-4 mb-50">
        <div className="shape" />
        <div className="container">
          <div className="row ">
            <div className="col-xl-12 col-md-12 ">
              <div className="block-text pd-0 text-center">
                <h6 className="sub-heading">
                  <span>Benefits</span>
                </h6>
                <h3 className="heading wow" data-splitting>
                  Why Choose Our Robots?
                </h3>
              </div>
            </div>
            <div className="col-xl-12 col-md-12">
              <div
                className="token__main"
                data-aos="fade-left"
                data-aos-duration={2000}
              >
                <ul className="token-list">
                  <li>
                    <div className="name col-4">
                      <svg
                        width={12}
                        height={16}
                        viewBox="0 0 12 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.49933 4C8.49933 4.66304 8.23594 5.29893 7.7671 5.76777C7.29826 6.23661 6.66237 6.5 5.99933 6.5C5.33629 6.5 4.70041 6.23661 4.23157 5.76777C3.76273 5.29893 3.49933 4.66304 3.49933 4C3.49933 3.33696 3.76273 2.70107 4.23157 2.23223C4.70041 1.76339 5.33629 1.5 5.99933 1.5C6.66237 1.5 7.29826 1.76339 7.7671 2.23223C8.23594 2.70107 8.49933 3.33696 8.49933 4V4ZM1 13.412C1.02142 12.1002 1.55756 10.8494 2.49278 9.92936C3.42801 9.00929 4.68739 8.49365 5.99933 8.49365C7.31127 8.49365 8.57066 9.00929 9.50588 9.92936C10.4411 10.8494 10.9772 12.1002 10.9987 13.412C9.43026 14.1312 7.72477 14.5023 5.99933 14.5C4.21533 14.5 2.522 14.1107 1 13.412Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <h6>Quality of Life Improvement</h6>
                    </div>
                    <div className="content col-8">
                      <p>
                        <b>More Free Time:</b> Spend more time on hobbies,
                        social interactions, and personal development.
                      </p>
                      <p>
                        <b>Stress Reduction:</b> Lower stress levels by
                        offloading daily chores.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="name col-4">
                      <svg
                        width={12}
                        height={16}
                        viewBox="0 0 12 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.49933 4C8.49933 4.66304 8.23594 5.29893 7.7671 5.76777C7.29826 6.23661 6.66237 6.5 5.99933 6.5C5.33629 6.5 4.70041 6.23661 4.23157 5.76777C3.76273 5.29893 3.49933 4.66304 3.49933 4C3.49933 3.33696 3.76273 2.70107 4.23157 2.23223C4.70041 1.76339 5.33629 1.5 5.99933 1.5C6.66237 1.5 7.29826 1.76339 7.7671 2.23223C8.23594 2.70107 8.49933 3.33696 8.49933 4V4ZM1 13.412C1.02142 12.1002 1.55756 10.8494 2.49278 9.92936C3.42801 9.00929 4.68739 8.49365 5.99933 8.49365C7.31127 8.49365 8.57066 9.00929 9.50588 9.92936C10.4411 10.8494 10.9772 12.1002 10.9987 13.412C9.43026 14.1312 7.72477 14.5023 5.99933 14.5C4.21533 14.5 2.522 14.1107 1 13.412Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <h6>Economic Impact</h6>
                    </div>
                    <div className="content col-8">
                      <p>
                        <b>Job Creation:</b> Creating jobs in robotics,
                        engineering, and customer support.
                      </p>
                      <p>
                        <b>Cost Savings:</b> Automating tasks to save on labor
                        costs and increase efficiency.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="name col-4">
                      <svg
                        width={12}
                        height={16}
                        viewBox="0 0 12 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.49933 4C8.49933 4.66304 8.23594 5.29893 7.7671 5.76777C7.29826 6.23661 6.66237 6.5 5.99933 6.5C5.33629 6.5 4.70041 6.23661 4.23157 5.76777C3.76273 5.29893 3.49933 4.66304 3.49933 4C3.49933 3.33696 3.76273 2.70107 4.23157 2.23223C4.70041 1.76339 5.33629 1.5 5.99933 1.5C6.66237 1.5 7.29826 1.76339 7.7671 2.23223C8.23594 2.70107 8.49933 3.33696 8.49933 4V4ZM1 13.412C1.02142 12.1002 1.55756 10.8494 2.49278 9.92936C3.42801 9.00929 4.68739 8.49365 5.99933 8.49365C7.31127 8.49365 8.57066 9.00929 9.50588 9.92936C10.4411 10.8494 10.9772 12.1002 10.9987 13.412C9.43026 14.1312 7.72477 14.5023 5.99933 14.5C4.21533 14.5 2.522 14.1107 1 13.412Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <h6>Emergency and Disaster Response</h6>
                    </div>
                    <div className="content col-8">
                      <p>
                        <b>Search and Rescue:</b> Navigating dangerous environments to find and assist survivors.
                      </p>
                      <p>
                        <b>Aid Delivery:</b> Delivering essential supplies in hard-to-reach areas.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="name col-4">
                      <svg
                        width={12}
                        height={16}
                        viewBox="0 0 12 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.49933 4C8.49933 4.66304 8.23594 5.29893 7.7671 5.76777C7.29826 6.23661 6.66237 6.5 5.99933 6.5C5.33629 6.5 4.70041 6.23661 4.23157 5.76777C3.76273 5.29893 3.49933 4.66304 3.49933 4C3.49933 3.33696 3.76273 2.70107 4.23157 2.23223C4.70041 1.76339 5.33629 1.5 5.99933 1.5C6.66237 1.5 7.29826 1.76339 7.7671 2.23223C8.23594 2.70107 8.49933 3.33696 8.49933 4V4ZM1 13.412C1.02142 12.1002 1.55756 10.8494 2.49278 9.92936C3.42801 9.00929 4.68739 8.49365 5.99933 8.49365C7.31127 8.49365 8.57066 9.00929 9.50588 9.92936C10.4411 10.8494 10.9772 12.1002 10.9987 13.412C9.43026 14.1312 7.72477 14.5023 5.99933 14.5C4.21533 14.5 2.522 14.1107 1 13.412Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <h6>Social Interaction</h6>
                    </div>
                    <div className="content col-8">
                      <p>
                        <b>Companionship:</b> Providing conversation and entertainment for those who are lonely.
                      </p>
                      <p>
                        <b>Educational Games:</b> Engaging in interactive games to promote learning.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
