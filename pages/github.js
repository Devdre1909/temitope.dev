import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Github = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("https://github.com/devdre1909");
  });

  return <div></div>;
};

export default Github;
