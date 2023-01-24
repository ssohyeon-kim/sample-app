import { css } from "@emotion/react";
import Image from "next/image";

import { ComponentPropsWithoutRef, memo, ReactElement } from "react";

function IphoneFrame({
  children,
  ...restProps
}: ComponentPropsWithoutRef<"div">): ReactElement {
  return (
    <div
      {...restProps}
      css={css`
        border: solid 1px #abc;
        width: 352px;
        height: 702px;
      `}
    >
      <div
        css={css`
          width: var(--phone-width);
          height: var(--phone-height);
          border-radius: var(--phone-radius);
          background: #e0e1e3;
        `}
      >
        <div
          css={css`
            width: calc(var(--phone-width) - calc(var(--phone-border) * 2));
            height: calc(var(--phone-height) - calc(var(--phone-border) * 2));
            position: relative;
            border-radius: var(--phone-radius);
            top: var(--phone-border);
            left: var(--phone-border);
            border: var(--phone-border) solid #bbb9bf;
          `}
        >
          <div
            css={css`
              position: relative;
              width: calc(var(--phone-width) - calc(var(--phone-border) * 6));
              height: calc(var(--phone-height) - calc(var(--phone-border) * 6));
              top: var(--phone-border);
              left: var(--phone-border);
              border-radius: var(--phone-radius);
              background: #fff;
            `}
          >
            <div
              css={css`
                width: calc(var(--phone-width) * 0.2);
                height: calc(var(--phone-width) * 0.2 * 0.3);
                display: flex;
                flex-direction: row-reverse;
                border-radius: var(--phone-radius);
                align-items: center;
                background: #1d1d1b;
                position: relative;
                z-index: 1;

                top: calc(var(--phone-width) * 0.2 * 0.3 * 0.5);
                left: calc(50% - calc(var(--phone-width) * 0.2 * 0.5));

                & > img {
                  width: calc(var(--phone-width) * 0.2 * 0.3 * 0.5);
                  height: calc(var(--phone-width) * 0.2 * 0.3 * 0.5);
                  margin-right: calc(var(--phone-width) * 0.2 * 0.3 * 0.5);
                }
              `}
            >
              <Image src="/Lens.png" alt="lens" width={500} height={500} />
            </div>

            <div
              css={css`
                position: relative;
                border: calc(var(--phone-border) * 2.5) solid #000;
                top: calc(var(--phone-width) * 0.2 * 0.3 * -1);
                width: calc(var(--phone-width) - calc(var(--phone-border) * 6));
                height: calc(
                  var(--phone-height) - calc(var(--phone-border) * 6)
                );
                border-radius: var(--phone-radius);
                overflow: hidden;
              `}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(IphoneFrame);
