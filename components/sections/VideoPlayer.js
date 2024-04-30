import { useRef, useEffect } from 'react';

const VideoPlayerSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleScroll = () => {
      
      const rect = video.getBoundingClientRect();

    
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    
      if (isVisible) {
        video.play();
      } else {
        video.pause();
      }
    };

   
    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
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
    </section>
  );
};
// /assets/images/background/thumbanil.png
export default VideoPlayerSection;

// import { useEffect, useRef } from 'react';
// import videojs from 'video.js';
// import 'video.js/dist/video-js.css';

// const VideoPlayerSection = () => {
//   const videoRef = useRef(null);
//   const playerRef = useRef(null);

//   useEffect(() => {
//     const video = videoRef.current;

//     // Initialize the video.js player
//     const player = videojs(video, {
//       controls: true,
//       sources: [
//         {
//           src: 'https://adlrobotics.com/adl-demo-video.mp4',
//           type: 'video/mp4'
//         }
//       ]
//     });
//     playerRef.current = player;

//     const handleScroll = () => {
//       const rect = video.getBoundingClientRect();
//       const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

//       if (isVisible) {
//         player.play();
//       } else {
//         player.pause();
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       player.dispose();
//     };
//   }, []);

//   return (
//     <section>
//      <div>
//      <video
//         ref={videoRef}
//         className="video-js vjs-default-skin"
//         controls
//         preload="auto"
//         style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//       />
//      </div>
//     </section>
//   );
// };

// export default VideoPlayerSection;