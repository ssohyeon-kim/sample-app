import {
  ComponentPropsWithoutRef,
  memo,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { css } from "@emotion/react";

interface RingProps extends ComponentPropsWithoutRef<"div"> {
  sizeVar: string;
  borderSizeVar: string;
  borderColor: string;
  startAnimation: boolean;
}

function Ring({
  sizeVar,
  borderSizeVar,
  borderColor,
  startAnimation,
  children,
}: RingProps): ReactElement {
  const circleWrapStyle = css`
    width: var(--circle-width);
    height: var(--circle-width);
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const basicCircleStyle = css`
    width: var(--circle-width);
    height: var(--circle-width);
    position: absolute;
    border-radius: 50%;
  `;
  const circleMaskStyle = css`
    clip: rect(
      0px,
      var(--circle-width),
      var(--circle-width),
      calc(var(--circle-width) / 2)
    );
  `;
  const circleInsideStyle = css`
    width: calc(var(--circle-width) - calc(2 * var(--border-size)));
    height: calc(var(--circle-width) - calc(2 * var(--border-size)));
    border-radius: 50%;
    background: #fff;
    position: absolute;
    z-index: 100;
  `;
  const fillProgressBarStyle = css`
    clip: rect(0px, calc(var(--circle-width) / 2), var(--circle-width), 0px);
    background-color: ${borderColor};
  `;
  const animateFillStyle = css`
    animation: ${startAnimation ? "fill ease-in-out 1s" : ""};
    transform: ${startAnimation ? "rotate(180deg)" : "rotate(0deg)"};

    @keyframes fill {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(180deg);
      }
    }
  `;

  return (
    <div
      className="circle-wrap"
      css={circleWrapStyle}
      style={
        {
          "--circle-width": sizeVar,
          "--border-size": borderSizeVar,
        } as Record<string, string>
      }
    >
      <div
        className="mask full"
        css={[basicCircleStyle, circleMaskStyle, animateFillStyle]}
      >
        <div
          className="fill"
          css={[basicCircleStyle, fillProgressBarStyle, animateFillStyle]}
        ></div>
      </div>
      <div className="mask half" css={[basicCircleStyle, circleMaskStyle]}>
        <div
          className="fill"
          css={[basicCircleStyle, fillProgressBarStyle, animateFillStyle]}
        ></div>
      </div>
      <div className="inside-circle" css={circleInsideStyle}>
        {children}
      </div>
    </div>
  );
}

function PhotoShootButton({ tick }: { tick: number }): ReactElement {
  const [startAnimation, setStartAnimation] = useState(true);

  useEffect(() => {
    setStartAnimation(false);

    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [tick]);

  return (
    <Ring
      sizeVar="var(--photo-shoot-button-diameter)"
      borderSizeVar="4px"
      borderColor="red"
      startAnimation={startAnimation}
    >
      <div
        css={css`
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: #fff;
          padding: 2px;
        `}
      ></div>
    </Ring>
  );
}

export default memo(PhotoShootButton);
