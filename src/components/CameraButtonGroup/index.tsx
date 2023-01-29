import { memo } from "react";
import { css } from "@emotion/react";
import Image from "next/image";
import PhotoShootButton from "@/components/PhotoShootButton";

function CameraButtonGroup({ tick }: { tick: number }) {
  return (
    <div
      css={css`
        width: 100%;
        height: calc(var(--phone-height) * 0.2);
        color: #fff;
        background-color: #000;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: center;
          width: 100%;
          height: var(--font-size);
          margin: var(--font-size) 0;
        `}
      >
        <ul
          css={css`
            display: flex;
            gap: var(--font-size);
            list-style: none;

            font-size: var(--font-size);
            font-weight: 700;
            line-height: 1;
          `}
        >
          <li
            css={css`
              color: yellow;
            `}
          >
            사진
          </li>
          <li>동영상</li>
        </ul>
      </div>

      <div
        css={css`
          width: 100%;
          height: calc(var(--phone-height) * 0.2 - var(--font-size) * 3);
          display: flex;
          justify-content: center;
          align-items: center;
          gap: calc(var(--font-size) * 2);
        `}
      >
        <ul
          css={css`
            list-style: none;
            line-height: 1.5;
            margin-left: 20px;
          `}
        >
          <li
            css={css`
              color: yellow;
            `}
          >
            1s
          </li>
          <li>2s</li>
          <li>3s</li>
        </ul>

        <div
          css={css`
            width: var(--camera-button-diameter);
            height: var(--camera-button-diameter);
            border-radius: calc(var(--camera-button-diameter) / 2);
          `}
          style={
            {
              "--photo-shoot-button-diameter": "var(--camera-button-diameter)",
            } as Record<string, string>
          }
        >
          <PhotoShootButton tick={tick} />
        </div>

        <Image
          css={css`
            width: calc(var(--camera-button-diameter) * 0.8);
            height: calc(var(--camera-button-diameter) * 0.8);
          `}
          src="/change.png"
          width={200}
          height={200}
          alt="change front/back camera image"
        />
      </div>
    </div>
  );
}

export default memo(CameraButtonGroup);
