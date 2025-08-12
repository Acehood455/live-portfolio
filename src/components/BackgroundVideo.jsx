import { useState } from "react";

export default function BackgroundVideo() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
      {videoFailed ? (
        <img
          src="/images/bg.png"
          alt="Background fallback"
          className="w-full h-full object-cover"
        />
      ) : (
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoFailed(true)}
        >
          <source src="/videos/bg.mp4" type="video/mp4" />
          {/* You can remove the webm source if you don't have it */}
          <source src="/videos/bg.webm" type="video/webm" />
          {/* No img tag here */}
        </video>
      )}
    </div>
  );
}

  