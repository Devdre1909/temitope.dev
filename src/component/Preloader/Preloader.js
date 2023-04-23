"use client";

import gsap from "gsap";

import style from "./preloader.module.scss";
import { useIsomorphicLayoutEffect } from "@/helpers/useIsomorphicLayoutEffect";
import { useRef } from "react";

const WelcomeHello = [
  "Bonjour",
  "Hola",
  "こんにちは",
  "Sannu",
  "مرحبًا",
  "Hallo",
  "Ciao",
  "Olá",
  "Здравствуйте",
  "你好",
  "안녕하세요",
  "नमस्ते",
  "Здраво",
  "Привет",
  "Hej",
  "Sveiki",
  "Halo",
  "Hello",
];

const start = "M 0 100 V 50 Q 50 0 100 50 V 100 z";
const end = "M 0 100 V 0 Q 50 0 100 0 V 100 z";

export default function Preloader() {
  const trans = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const tl = gsap.timeline();
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
  }, []);

  return (
    <main className={style.preloader__wrapper}>
      <div className={style.preloader__textContainer}>
        {WelcomeHello.map((word, index) => {
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
