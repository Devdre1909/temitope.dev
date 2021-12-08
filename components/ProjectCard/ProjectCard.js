import React, { useRef, useEffect } from "react";

const ProjectCard = ({ name, image, stack = [], link, imageAlt }) => {
  const cardRef = useRef(null);

  // useEffect(() => {
  //   const scrollInImageDown = (e) => {
  //     const card = cardRef.current;
  //     card.scrollTop = card.scrollHeight;
  //   };
  //   const scrollInImageUp = (e) => {
  //     const card = cardRef.current;
  //     card.scrollTop = 0;
  //   };
  //   window.addEventListener("mouseenter", scrollInImageDown);
  //   window.addEventListener("mouseout", scrollInImageUp);
  //   return () => {
  //     window.removeEventListener("mouseenter", scrollInImageDown);
  //     window.removeEventListener("mouseout", scrollInImageUp);
  //   };
  // }, []);

  return (
    <>
      <div
        ref={cardRef}
        className="overflow-x-hidden overflow-y-scroll no-scrollbar relative shadow-md"
        style={{ height: "400px" }}
      >
        <img alt={imageAlt} src={image} />
        <div className="w-full sticky bottom-0 bg-brand-blue-darker py-6 px-2">
          <a
            href={link}
            target="_blank"
            className="text-brand-light font-semibold"
          >
            {name}
          </a>
          <div className="mt-3">
            {stack.map((item, index) => (
              <span key={index} className="text-brand-orange text-sm mx-1">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
