import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="pb-20 pt-36" aria-label="Introducción">
      {/* Content first in DOM = browser paints text before decorative layers */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center gap-4">

          <h1 className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            <span className="text-white">Bautista</span>{" "}
            <span className="text-purple">Alós Martorell</span>
          </h1>

          <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white/90 max-w-3xl leading-snug">
            Full-Stack Developer &amp; Data Engineer
          </p>

          <p className="text-center text-xs sm:text-sm md:text-base text-white-200 max-w-xl leading-relaxed">
            Estudiante avanzado de Ingeniería en Sistemas. Desarrollo proyectos
            full-stack y data-driven que combinan ingeniería de software y toma
            de decisiones basada en datos.
          </p>

          <Link href="#projects" className="mt-4">
            <MagicButton
              title="Ver mis proyectos"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
      </div>

      {/* Decorative: grid background */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
          absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
            bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Decorative: spotlights — CSS radial gradients, zero GPU filter cost */}
      <div aria-hidden="true">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
    </section>
  );
};

export default Hero;