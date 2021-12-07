import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Linkedin = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("https://www.linkedin.com/in/dtemitope/");
  });

  return <div></div>;
};

export default Linkedin;
