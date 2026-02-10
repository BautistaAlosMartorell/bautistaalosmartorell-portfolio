"use client"

import { useState, useCallback } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { IoCheckmarkDone } from "react-icons/io5";

import Image from "next/image";

import { cn } from "@/lib/util";


import { BackgroundGradientAnimation } from "./GradientBg";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const techSections = [
    {
      title: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Backend & Data",
      items: ["Python", "Java", "SQL", "PostgreSQL", "ETL"],
    },
    {
      title: "Machine Learning & Análisis",
      items: [
        "scikit-learn",
        "PyTorch",
        "EDA",
        "Model evaluation",
      ],
    },
    {
      title: "Infra & Tools",
      items: ["Git", "Docker"],
    },
  ];

  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    const text = "alosmartorellbautista@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  }, []);

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute inset-0">
          {img && (
            <Image
              src={img}
              alt={title ? String(title) : ""}
              width={800}
              height={800}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
              fetchPriority="low"
              quality={70}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt=""
              width={600}
              height={600}
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              fetchPriority="low"
              quality={70}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation interactive={false}>
          </BackgroundGradientAnimation>
        )}
        {id === 2 && (
          <BackgroundGradientAnimation interactive={false}>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-white-200 z-10">
            {description}
          </div>

          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>


          {id === 3 && (
            <div className="mt-4 w-full">
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {techSections.map((section) => (
                  <div
                    key={section.title}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 backdrop-blur"
                  >
                    <p className="text-sm font-semibold text-white/90">
                      {section.title}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {section.items.map((item) => (
                        <span
                          key={item}
                          className="text-[11px] sm:text-xs text-white/80 rounded-full border border-white/10 bg-black/30 px-2.5 py-1"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <MagicButton
                title={copied ? "¡Email copiado!" : "Copiar mi email"}
                icon={copied ? <IoCheckmarkDone /> : <IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};