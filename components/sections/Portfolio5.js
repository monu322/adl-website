import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import OverlayVideoPlayer from './VideoPlayerOverlay';


const data = [
  {
    category: 'Restaurants',
    img: '/assets/images/enviorments/robot-in-kitchen2.jpeg',
    videoUrl: 'https://adlrobotics.com/adl-dutibot-demo.mp4',
    operations: [
      {
        title: 'Prep and maintenance operations',
        details: 'Automates food prep and maintenance operations like cutting, mixing, cleaning, and inventory management.',
      },
      {
        title: 'Employee Support',
        details: 'Handles mundane tasks so your employees can focus on cooking great food and providing amazing customer service.',
      },
    ],
  },
  {
    category: 'Retail Stores',
    img: '/assets/images/enviorments/robot-in-retail.png',
    videoUrl: 'https://adlrobotics.com/adl-retail-demo.mp4',
    operations: [
      {
        title: 'Free Up Your Staff for Customer Interaction',
        details: 'Our robots handle routine tasks like shelving and cleaning, allowing your employees to focus on customer service.',
      },
    ],
  },
];


const Categories2 = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState(null);

  const handleOpenOverlay = (videoUrl) => {
    setCurrentVideoUrl(videoUrl);
    setIsOverlayOpen(true);
  };

  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
    setCurrentVideoUrl(null);
  };

  return (
    <div className="container-fluid">
      {data.map((item, index) => (
        <div
          key={index}
          className="row align-items-center position-relative text-container-full"
          style={{
            backgroundImage: `url(${item.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
          }}
        >
          <div className="gradient-overlay position-absolute top-0 start-0 w-100 h-100"></div>

          <div className="col-md-6 order-2 order-md-1 text-white d-flex flex-column justify-content-center p-5 position-relative text-container">
            <h2 className="display-3 fw-bold mb-4">{item.category}</h2>
            <div>
              {item.operations.map((operation, opIndex) => (
                <div key={opIndex} className="mb-3">
                  <h3 className="h4 fw-bold section-title">{operation.title}</h3>
                  <p>{operation.details}</p>
                </div>
              ))}
              <a
                onClick={() => handleOpenOverlay(item.videoUrl)}
                className="action-btn mt-3 p-1"
              >
                <span className="p-3">
                  <FontAwesomeIcon icon={faPlayCircle} className="me-2" />
                  Watch Video
                </span>
              </a>
            </div>
          </div>

          <div className="col-md-6 order-1 order-md-2 d-flex justify-content-center align-items-center pe-5">
            <FontAwesomeIcon
              icon={faPlayCircle}
              onClick={() => handleOpenOverlay(item.videoUrl)}
              size="5x"
              style={{
                cursor: 'pointer',
                color: 'white',
                fontSize: '150px',
                textShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
                zIndex: 1,
                opacity:0.8,
                transition: 'transform 0.3s ease',
              }}
              className="video-icon"
            />
          </div>
        </div>
      ))}

      {isOverlayOpen && (
        <OverlayVideoPlayer
          videoUrl={currentVideoUrl}
          isOverlayOpen={isOverlayOpen}
          handleCloseOverlay={handleCloseOverlay}
        />
      )}
    </div>
  );
};

export default Categories2;
