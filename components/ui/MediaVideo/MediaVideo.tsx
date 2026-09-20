import type { ReactElement } from "react";
import "@/components/ui/MediaVideo/media-video.css";

type MediaVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  ariaLabel: string;
};

export const MediaVideo = ({
  src,
  poster,
  className = "",
  ariaLabel,
}: MediaVideoProps): ReactElement => {
  const classes = ["media-video", className].filter(Boolean).join(" ");

  return (
    <div className={classes} role="img" aria-label={ariaLabel}>
      <video
        className="media-video__el"
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};
