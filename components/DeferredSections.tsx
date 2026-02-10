"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const DeferredSections = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Minimum 800ms delay ensures Hero text is measured as LCP
    // before grid images start loading.
    const MIN_DELAY = 800;

    const idle = (window as any).requestIdleCallback;
    const cancelIdle = (window as any).cancelIdleCallback;

    let timer: ReturnType<typeof setTimeout>;
    let idleId: number | undefined;

    if (idle) {
      timer = setTimeout(() => {
        idleId = idle(() => setShow(true));
      }, MIN_DELAY);
    } else {
      timer = setTimeout(() => setShow(true), MIN_DELAY + 400);
    }

    return () => {
      clearTimeout(timer);
      if (cancelIdle && idleId !== undefined) cancelIdle(idleId);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="animate-[fadeIn_0.4s_ease-out]">
      <Grid />
      <RecentProjects />
      <Footer />
    </div>
  );
};

export default DeferredSections;
