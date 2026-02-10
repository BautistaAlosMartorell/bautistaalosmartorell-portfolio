import { FaLocationArrow, FaGithub, FaLinkedinIn } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Link from "next/link";

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> =
  {
    "/git.svg": FaGithub,
    "/link.svg": FaLinkedinIn,
  };

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* Background grid — pure CSS gradient instead of image */}
      <div className="absolute inset-x-0 -bottom-72 h-96 bg-[radial-gradient(ellipse_at_bottom,rgba(203,172,249,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="flex flex-col items-center gap-6 relative z-10">
        <h2 className="heading lg:max-w-[45vw]">
          ¿Listo para{" "}
          <span className="text-purple">trabajar juntos</span>?
        </h2>
        <p className="text-white-200 text-sm md:text-base text-center max-w-lg">
          Si tenés un proyecto, una idea o simplemente querés charlar, escribime.
        </p>
        <Link href="mailto:alosmartorellbautista@gmail.com">
          <MagicButton
            title="¡Contactame!"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>

      <div className="flex mt-16 md:flex-row flex-col gap-4 justify-between items-center relative z-10">
        <p className="text-sm text-white/40">
          © {year} Bautista Alós Martorell
        </p>

        <div className="flex items-center gap-3">
          {socialMedia.map((info) => {
            const Icon = socialIcons[info.img];
            return (
              <a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={info.link.includes("github") ? "GitHub" : "LinkedIn"}
                className="w-10 h-10 flex justify-center items-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:bg-white/10 hover:border-white/20"
              >
                {Icon ? (
                  <Icon className="w-5 h-5 text-white/70" />
                ) : (
                  <span className="text-white/70 text-xs">•</span>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;