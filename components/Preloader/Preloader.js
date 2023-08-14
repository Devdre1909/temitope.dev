"use client";

import { useRef } from "react";
import gsap from "gsap";

import { useIsomorphicLayoutEffect } from "@/helpers/useIsomorphicLayoutEffect";
import { welcomes } from "@/configs/constants";

import style from "./preloader.module.scss";
import minimalisticStyle from "@/components/Minimalistic/minimalistic.module.scss";

export default function Preloader({ onComplete }) {
  const trans = useRef(null);

  useIsomorphicLayoutEffect(() => {
    // const wrapperEl = document.querySelector(`.${minimalisticStyle.wrapper}`);

    // wrapperEl.style.overflow = "hidden";

    const hightlightColors = ["#61c9c9", "#7661c9", "#c7c961", "#c96161"];

    const randomColor =
      hightlightColors[Math.floor(Math.random() * hightlightColors.length)];
    document.documentElement.style.setProperty(
      "--hightlight-color",
      randomColor
    );

    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          onComplete && onComplete();
        }, 1200);
      },
    });

    const texts = document.querySelectorAll(
      `.${style.preloader__textContainer__text}`
    );
    texts.forEach((text, index) => {
      tl.to(text, {
        opacity: 1,
        duration: 0.15,
        ease: "power2.inOut",
        y: 10,
      }).to(text, {
        opacity: 0,
        duration: 0.15,
        delay: 0.15,
        y: -10,
        ease: "power2.inOut",
      });
    });

    tl.to(`.${style.preloader__wrapper}`, {
      y: "-100%",
      duration: 1.5,
      ease: "Power2.easeInOut",
    });

    // wrapperEl.style.overflow = "unset";
  }, []);

  return (
    <main className={style.preloader__wrapper}>
      <div className={style.preloader__textContainer}>
        {welcomes.map((word, index) => {
          return (
            <p
              key={index}
              className={style.preloader__textContainer__text}
              style={{
                opacity: 0,
              }}
            >
              {word}
            </p>
          );
        })}
      </div>
    </main>
  );
}
