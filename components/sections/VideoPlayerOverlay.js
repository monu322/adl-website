import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const OverlayVideoPlayer = ({ videoUrl, isOverlayOpen, handleCloseOverlay }) => {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('overlay-background')) {
      handleCloseOverlay();
    }
  };

  return (
    <div className="text-center">
    

      {isOverlayOpen && (
        <div
          className="overlay-background position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', zIndex: 1050 }}
          onClick={handleOverlayClick}
        >
          <div
            className="bg-black rounded shadow-md"
            style={{ maxWidth: '80%', maxHeight: '80%', position: 'relative' }}
          >
            <button className="btn-close position-absolute top-0 end-0 m-2" onClick={handleCloseOverlay}></button>
            <video
              src={videoUrl}
              controls
              autoPlay
              className="img-fluid rounded"
              style={{ width: '100%', height: 'auto' }}
            ></video>
          </div>
        </div>
      )}
    </div>
  );
};

export default OverlayVideoPlayer;
