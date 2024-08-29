import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faClose } from '@fortawesome/free-solid-svg-icons';

const OverlayVideoPlayer = ({ videoUrl, isOverlayOpen, handleCloseOverlay }) => {
  const handleOverlayClick = (e) => {
    console.log("Overlay out");
    handleCloseOverlay();
    // if (e.target.classList.contains('overlay-background')) {
    //   console.log("Overlay");
    //   handleCloseOverlay();
    // }
  };

  return (
    <div className="overlay-background" onClick={handleOverlayClick}>
      {isOverlayOpen && (
        <div
          className="text-center d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            
          }}
        >
          <div
            className="rounded shadow-md position-relative"
            style={{ maxWidth: '80%', maxHeight: '80%' }}
          >
            <FontAwesomeIcon
              icon={faClose}
              style={{
                cursor: 'pointer',
              }}
              onClick={handleOverlayClick}
              className="btn-close position-absolute top-0 end-0 m-3 pointer"
              aria-label="Close"
            ></FontAwesomeIcon>
            <video
              src={videoUrl}
              controls
              autoPlay
              className="img-fluid rounded "
              style={{ width: '80%', height: '80%' }}
            ></video>
          </div>
        </div>
      )}
    </div>
  );
};

export default OverlayVideoPlayer;
