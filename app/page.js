"use client";

import { useState } from "react";
import Minimalistic from "@/components/Minimalistic/Minimalistic";
import Preloader from "@/components/Preloader/Preloader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const handleComplete = () => {
    setLoading(false);
  };

  return (
    <div className="h-full bg-dark-300">
      <Preloader onComplete={handleComplete} />
      {!loading && <Minimalistic />}
    </div>
  );
}
