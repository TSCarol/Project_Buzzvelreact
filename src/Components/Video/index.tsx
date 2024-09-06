import React, { useEffect, useRef } from 'react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    const videoElement = videoRef.current;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,  
    });

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div style={{ width: '80%', height: 'auto', position: 'relative' }}>
      <video
        ref={videoRef}
        muted
        controls
        poster={poster}
        style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
        loop  
      >
        <source src={src} type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
    </div>
  );
};

export default VideoPlayer;
