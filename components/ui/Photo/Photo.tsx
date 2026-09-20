import Image from "next/image";
import type { ReactElement } from "react";
import "@/components/ui/Photo/photo.css";

type PhotoProps = {
  tag: string;
  src?: string;
  className?: string;
  variant?: "dark" | "light";
  priority?: boolean;
};

export const Photo = ({
  tag,
  src,
  className = "",
  variant = "dark",
  priority = false,
}: PhotoProps): ReactElement => {
  const classes = ["photo", variant === "light" ? "light" : "", className]
    .filter(Boolean)
    .join(" ");

  if (src) {
    return (
      <div className={`${classes} photo--media`}>
        <Image
          className="photo__img"
          src={src}
          alt={tag}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div className={classes} role="img" aria-label={tag}>
      <span className="photo__tag">{tag}</span>
    </div>
  );
};
