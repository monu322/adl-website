// import { useRef, useEffect } from 'react';

// const VideoPlayerSection = () => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const video = videoRef.current;

//     const handleScroll = () => {
      
//       const rect = video.getBoundingClientRect();

    
//       const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    
//       if (isVisible) {
//         video.play();
//       } else {
//         video.pause();
//       }
//     };

   
//     window.addEventListener('scroll', handleScroll);

    
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (

//     <section className="speciality" id="features-section">
// <div className="shape right" />
// <div className="container">
//     <div className="row">
//         <div className="col-12">
//             <div className="block-text center">
//                 <h6 className="sub-heading"><span>Future of Living</span></h6>
//                 <h3 className="heading wow"> How it works 
//                  </h3>
//         </div>
//     </div>
//     <video
//         ref={videoRef}
//         src="https://adlrobotics.com/adl-demo-video.mp4" 
//         type="video/mp4"
//         autoPlay
//         controls
//         muted 
//         loop 
//         style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//       />
    
// </div>
// </div>
// </section >
//   );
// };
// export default VideoPlayerSection;

import { useRef, useEffect, useState } from 'react';

const VideoPlayerSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);
  const [isPausedByScroll, setIsPausedByScroll] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const handleScroll = () => {
      const rect = video.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      if (isVisible && !isManuallyPaused) {
        video.play();
        setIsPlaying(true);
        setIsPausedByScroll(false);
      } else if (!isVisible) {
        video.pause();
        setIsPlaying(false);
        setIsPausedByScroll(true);
      }
    };

    const handleManualPause = () => {
      video.pause();
      setIsPlaying(false);
      setIsManuallyPaused(true);
      setIsPausedByScroll(false);
    };

    const handleManualPlay = () => {
      setIsManuallyPaused(false);
      video.play();
      setIsPlaying(true);
    };

    window.addEventListener('scroll', handleScroll);
    video.addEventListener('pause', handleManualPause);
    video.addEventListener('play', handleManualPlay);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      video.removeEventListener('pause', handleManualPause);
      video.removeEventListener('play', handleManualPlay);
    };
  }, [isManuallyPaused]);

  return (
    <section className="speciality" id="features-section">
      <div className="shape right" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="block-text center">
              <h6 className="sub-heading">
                <span>Future of Living</span>
              </h6>
              <h3 className="heading wow">How it works</h3>
            </div>
          </div>
          <video
            ref={videoRef}
            src="https://adlrobotics.com/adl-demo-video.mp4"
            type="video/mp4"
            autoPlay
            controls
            muted
            loop
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
};

export default VideoPlayerSection;