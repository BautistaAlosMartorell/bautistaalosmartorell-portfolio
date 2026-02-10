"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import {
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiThreedotjs,
  SiNextdotjs,
  SiSupabase,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiPytorch,
  SiPostgresql,
} from "react-icons/si";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    react: SiReact,
    tailwind: SiTailwindcss,
    tailwindcss: SiTailwindcss,
    typescript: SiTypescript,
    three: SiThreedotjs,
    threejs: SiThreedotjs,
    nextjs: SiNextdotjs,
    supabase: SiSupabase,
    javascript: SiJavascript,
    html: SiHtml5,
    css: SiCss3,
    python: SiPython,
    "scikit-learn": SiScikitlearn,
    pandas: SiPandas,
    numpy: SiNumpy,
    pytorch: SiPytorch,
    postgresql: SiPostgresql,
  };

  return (
    <section
      className="py-20"
      id="projects"
      aria-label="Proyectos recientes"
      style={{ contentVisibility: "auto", containIntrinsicSize: "900px" }}
    >
      <h2 className="heading">
        Mis últimos{" "}
        <span className="text-purple">proyectos</span>
      </h2>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-8 gap-y-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title={item.title}
              href={item.link}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-6 rounded-2xl">
                <div
                  className="relative w-full h-full overflow-hidden"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image
                    src="/bg.png"
                    alt=""
                    fill
                    sizes="(max-width: 768px) 80vw, 384px"
                    className="object-cover"
                  />
                </div>
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 80vw, 384px"
                  quality={80}
                  loading="lazy"
                  fetchPriority="low"
                  className="z-10 object-contain object-bottom"
                />
              </div>

              <h2 className="font-bold lg:text-xl md:text-lg text-base line-clamp-1">
                {item.title}
              </h2>

              <p className="text-xs sm:text-sm lg:text-sm font-light text-white/60 line-clamp-3 min-h-[3rem] mt-1 leading-relaxed">
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-5 mb-2">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => {
                    const Icon = iconMap[icon];
                    return (
                      <div
                        key={index}
                        className="border border-white/10 rounded-full bg-black/80 lg:w-9 lg:h-9 w-7 h-7 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        {Icon ? (
                          <Icon className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-white/80" />
                        ) : (
                          <span className="text-[9px] text-white/60 px-1">
                            {icon}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-sm text-purple">Ver código</span>
                  <FaLocationArrow className="text-xs" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;