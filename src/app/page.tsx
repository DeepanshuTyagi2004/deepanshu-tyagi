"use client";

import { useEffect, useState } from "react";
import { InteractiveGridPattern } from "../components/ui/interactive-grid-pattern";

const Home = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="min-h-screen min-w-full bg-background relative overflow-hidden font-display antialiased selection:bg-pink-600 selection:text-foreground">
      <InteractiveGridPattern />
      
    </div>
  );
};

export default Home;
