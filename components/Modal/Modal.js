import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai"
import styles from "./styles.module.css";

const Modal = ({ isOpen = false, handleClose, children }) => {

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);


  return (
    <div>
      <div className={`${styles["modal-wrapper"]} ${isOpen ? styles["open"] : ""}`}>
        <div className={styles["modal-content"]}>
          <div  className="flex items-center justify-end cursor-pointer">
            <div onClick={handleClose}  className="modal-close-button">
             <AiOutlineClose />
            </div>
          </div>

          <div className="mx-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
