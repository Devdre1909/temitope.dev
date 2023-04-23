import React from "react";
import styles from "./minimalistic.module.scss";

const Minimalistic = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.gridContainer}>
        <div className={styles.leftSide}>
          <div>
            <h1 className={styles.leftSide__title}>Adegoke Temitope</h1>
            <h2 className={styles.leftSide__jobRole}>
              Full stack Engineer (FE Heavy)
            </h2>
            <p className={styles.leftSide__desc}>
              I'm a software engineer. I create interactive web experiences
              using frontend technology. I am interested in user experience,
              accessibility, design systems, gaming, web3 and web animations.
            </p>
          </div>
          <div>
            <div>01 - Recent</div>
            <div>02 - Work History</div>
            <div>02 - Works</div>

          </div>
          <div>Github</div>
        </div>
        <div className={styles.rightSide}>
          <p className={styles.information}>
            ✨ Presently open to freelance work. Contact me on{" "}
            <a href="mailto:adegoketemitope1909@gmail.com">
              adegoketemitope1909@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Minimalistic;
