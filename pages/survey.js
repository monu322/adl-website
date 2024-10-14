import { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

const surveyQuestions = [
  {
    question:
      "How often do your staff complain about repetitive tasks (e.g., dishwashing, cleaning, restocking)?",
    options: [
      "Daily - They're practically begging for help!",
      "Occasionally - It's a part of the job, but they don't love it.",
      "Rarely - My staff is like a well-oiled machine.",
    ],
  },
  {
    question:
      "Have you experienced high turnover in positions that require manual, repetitive work?",
    options: [
      "Yes, I feel like I'm constantly hiring new staff.",
      "Sometimes, but it's not our biggest issue.",
      "Not really, we've got a solid team.",
    ],
  },
  {
    question: "If you could automate one of these tasks, which would it be?",
    options: [
      "Cleaning and dishwashing (I can practically hear the sigh of relief).",
      "Restocking shelves (more time for customer service!).",
      "Basic food prep (chopping, stirring - all the mundane stuff).",
      "All of the above - can I have a robot for everything?",
    ],
  },
  {
    question:
      "What's your biggest challenge when it comes to managing these tasks?",
    options: [
      "High staff turnover - it's hard to keep people in these roles.",
      "Time - these tasks take up too much valuable time.",
      "Costs - I'm spending too much on wages for repetitive work.",
      "All of the above - I need help!",
    ],
  },
  {
    question:
      "If you could bring a robot on board to help, what would you expect from it?",
    options: [
      "Be fast and efficient - time is money.",
      "Be reliable and never take a day off!",
      "Be easy to integrate with our current workflow.",
      "All of the above - I want the full package.",
    ],
  },
];

export default function SurveyForm() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectionError, setSelectionError] = useState(false);
  const router = useRouter();
  const { name, company } = router.query;

  const handleOptionChange = (option) => {
    setAnswers({
      ...answers,
      [currentQuestionIndex]: option,
    });
    setSelectionError(false);
  };

  const goToNextQuestion = () => {
    if (!answers[currentQuestionIndex]) {
      setSelectionError(true);
    } else {
      if (currentQuestionIndex < surveyQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/survey-api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          company,
          answers,
        }),
      });
      const result = await response.json();
      if (response.ok) {
        setSuccessMessage(result.message);

          setCurrentQuestionIndex(-2);
          setAnswers({});

      } else {
        setErrorMessage("Failed to send survey. Try again later.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
      setErrorMessage("");
    }
  };

  const currentQuestion = surveyQuestions[currentQuestionIndex];

  return (
    <Layout headerStyle={1} footerStyle={1} big survey={true}>
      <div className="page-contact">
        <section className="touch">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="block-text center">
                  <h6 className="sub-heading">
                    <span>Survey Form</span>
                  </h6>
                </div>
                <div className="touch__main justify-content-center">
                  <div
                    className={`form-box ${
                      currentQuestionIndex === -1 || currentQuestionIndex === -2
                        ? "text-center"
                        : "text-left"
                    }`}
                  >
                    {/* Welcome Page */}
                    {currentQuestionIndex === -1 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="mt-5"
                      >
                        <h5>
                          Hey! <br />
                          We’ve put together a quick survey to see if your
                          restaurant could benefit from a little robotic help.
                          It’ll take just 1 minute, and who knows — you might
                          discover a few tasks you’d love to offload!
                        </h5>
                        <button
                          type="button"
                          className="action-btn m-5"
                          onClick={() => setCurrentQuestionIndex(0)}
                        >
                          <span>Start Survey</span>
                        </button>
                      </motion.div>
                    )}

                    {/* Thank You Page */}
                    {currentQuestionIndex === -2 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="mt-5"
                      >
                        <h5>
                          Thanks for taking the time!
                          <br />
                          If your answers suggest that your team could use a
                          little extra help, I’d love to chat and show you how
                          our robot could make your life easier. Feel free to
                          schedule a quick chat
                        </h5>
                        <button
                          type="button"
                          className="action-btn m-5"
                          onClick={() =>
                            window.open(
                              "https://calendly.com/operations-adlrobotics/early-adopter?month=2024-10",
                              "_blank"
                            )
                          }
                        >
                          <span>Schedule a meeting!</span>
                        </button>
                      </motion.div>
                    )}

                    {/* Survey Questions */}
                    {currentQuestionIndex >= 0 && (
                      <div style={{ position: "relative", height: "300px" }}>
                        <motion.div
                          key={currentQuestionIndex}
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                          style={{ position: "absolute", width: "100%" }}
                          className="mt-5"
                        >
                          <h5 className="mb-3">
                            {currentQuestionIndex + 1}.{" "}
                            {currentQuestion.question}
                          </h5>
                          {currentQuestion.options.map((option, index) => (
                            <div key={index} className="pt-2">
                              <label className="d-flex align-items-center">
                                <input
                                  type="radio"
                                  name="option"
                                  value={option}
                                  style={{ marginRight: "10px" }}
                                  checked={
                                    answers[currentQuestionIndex] === option
                                  }
                                  onChange={() => handleOptionChange(option)}
                                />
                                {option}
                              </label>
                            </div>
                          ))}

                          {selectionError && (
                            <p className="text-danger mt-2">
                              Please select an option before continuing.
                            </p>
                          )}

                          <div className="mt-5">
                            {currentQuestionIndex <
                            surveyQuestions.length - 1 ? (
                              <button
                                className="action-btn mt-5"
                                onClick={goToNextQuestion}
                              >
                                <span>Next</span>
                              </button>
                            ) : (
                              <button
                                className="action-btn mt-5"
                                onClick={handleSubmit}
                                disabled={loading}
                              >
                                {loading ? (
                                  <>
                                    <span>Loading...</span>
                                  </>
                                ) : (
                                  <span>Submit</span>
                                )}
                              </button>
                            )}
                          </div>
                        </motion.div>
                      </div>
                    )}

                    {/* Success/Error Messages */}
                    {successMessage && (
                      <p className="text-success">{successMessage}</p>
                    )}
                    {errorMessage && (
                      <p className="text-danger">{errorMessage}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
