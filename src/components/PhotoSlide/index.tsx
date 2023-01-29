import { memo, useEffect, useState } from "react";
import { css } from "@emotion/react";
import Image from "next/image";

interface PhotoSlideProps {
  tick: number;
}

function PhotoSlide({ tick }: PhotoSlideProps) {
  const photos = Array.from({ length: 10 }, (_, i) => i).map(
    (index: number) => `/photos/${index}.png`
  );
  const currentPhotoIndex = tick % photos.length;
  const nextPhotoIndex =
    currentPhotoIndex + 1 === photos.length ? 0 : currentPhotoIndex + 1;
  const startAnimation = false;

  return (
    <div
      css={css`
        width: var(--photo-width);
        height: var(--phone-height);
        overflow: hidden;
      `}
    >
      <div
        css={css`
          position: relative;
        `}
      >
        <div
          css={css`
            position: absolute;
            animation: ${startAnimation ? "slideout 1s" : ""};

            @keyframes slideout {
              from {
                left: 0;
              }

              to {
                left: calc(calc(var(--phone-width) - 10px) * -1);
              }
            }
          `}
        >
          <Image
            src={
              startAnimation
                ? photos[currentPhotoIndex]
                : photos[nextPhotoIndex]
            }
            alt="image"
            width={300}
            height={600}
          />
        </div>

        <div
          css={css`
            position: relative;
            top: calc(var(--phone-height) * - 1);
            left: calc(var(--phone-width) - 10px);
            animation: ${startAnimation ? "slidein 1s" : ""};

            @keyframes slidein {
              to {
                left: 0;
              }
            }
          `}
        >
          <Image
            src={photos[nextPhotoIndex]}
            alt="image"
            width={300}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}

export default memo(PhotoSlide);
