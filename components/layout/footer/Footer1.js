import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Footer1({survey}) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();
  
      // let's make a function that receive the specific element_id as string and scroll into that element_id
      const scrolltoHash = function (element_id) {
        
        if(survey){
          router.push('/')
          return
        }
    
        const element = document.getElementById(element_id)
    
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

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/subscribe", { email });

      if (response.data.message) {
        setMessage("Successfully subscribed!");
      } else {
        setMessage("Failed to subscribe. Please try again later.");
      }
    } catch (error) {
      setMessage("Failed to subscribe. Please try again later.");
      console.error("Error subscribing:", error);
    }finally{
      setEmail("")
    }

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <>
      <footer className="footer">
        <div className="shape" />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* <div className="footer__main">
                <div className="block-text center">
                  <h3 className="heading">Get Newsletter</h3>
                  <p>Get updated with our news, updates, and achievements.</p>
                </div>
                <form onSubmit={handleSubmit} className="form">
                  <div className="form-group">
                    {message && <p>{message}</p>}
                    <input
                      type="email"
                      className="form-control mt-3"
                      placeholder="Your email"
                      value={email}
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="action-btn">
                    <span>Subscribe</span>
                  </button>
                </form>
              </div> */}
              <div className="footer__bottom">
                <a href="/" className="logo">
                  <img
                    width={250}
                    src="/assets/images/logo/adl-logo.svg"
                    alt=""
                  />
                </a>
                <div className="center mb--30">
                  <ul className="list">
                    <li>
                      <a onClick={(e) => scrolltoHash("work-environments-section")}>
                      Workspaces
                      </a>
                    </li>
                    <li>
                      <a onClick={(e) => scrolltoHash("about-section")}>About</a>
                    </li>
                    <li>
                      <a onClick={(e) => scrolltoHash("how-it-works")}>
                      How it works
                      </a>
                    </li>
                  </ul>
                  <p>
                    Copyright © {new Date().getFullYear()}, ADL Robotics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
