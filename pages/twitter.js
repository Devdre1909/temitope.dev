import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Linkedin = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("https://www.twitter.com/temitope_dev");
  });

  return <div></div>;
};

export default Linkedin;
