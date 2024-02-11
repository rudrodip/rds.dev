"use client";

import * as React from "react";
import videojs from "video.js";

// Styles
import "video.js/dist/video-js.css";

interface IVideoPlayerProps {
  options: videojs.PlayerOptions;
  fallbackImageUrl: string;
}

const initialOptions: videojs.PlayerOptions = {
  autoplay: true,
  controls: false,
  fluid: true,
  loop: true,
};

export const VideoJs = ({ options, fallbackImageUrl }: IVideoPlayerProps) => {
  const videoNode = React.useRef<HTMLVideoElement | null>(null);
  const player = React.useRef<videojs.Player>();

  React.useEffect(() => {
    player.current = videojs(videoNode.current, {
      ...initialOptions,
      ...options,
    }).ready(function () {});
    return () => {
      if (player.current) {
        player.current.dispose();
      }
    };
  }, [options]);

  return (
    <div className="w-full aspect-video flex justify-center items-center">
      <video
        ref={videoNode}
        className="video-js w-full aspect-video"
        poster={fallbackImageUrl}
        placeholder="fallback image"
        preload="none"
      />
    </div>
  );
};
