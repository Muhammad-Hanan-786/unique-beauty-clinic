import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/unique-beauty-logo.png";

type LogoProps = {
  className?: string;
  imgClassName?: string;
  animate?: boolean;
  linkTo?: boolean;
  priority?: boolean;
};

export function Logo({
  className = "",
  imgClassName = "h-12 w-auto md:h-14",
  animate = true,
  linkTo = true,
  priority = false,
}: LogoProps) {
  const content = (
    <span className={`relative inline-flex items-center ${className}`}>
      {animate && (
        <motion.span
          aria-hidden
          initial={{ opacity: 0.35, scale: 0.9 }}
          animate={{ opacity: [0.35, 0.7, 0.35], scale: [0.9, 1.05, 0.9] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 -z-10 rounded-full bg-primary/25 blur-2xl"
        />
      )}
      <motion.img
        src={logoAsset}
        alt="Unique Beauty Salon"
        fetchPriority={priority ? "high" : "auto"}
        loading={priority ? "eager" : "lazy"}
        initial={animate ? { opacity: 0, y: -6 } : false}
        animate={animate ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        whileHover={animate ? { scale: 1.04 } : undefined}
        className={`select-none object-contain drop-shadow-[0_0_18px_rgba(212,175,110,0.35)] ${imgClassName}`}
        draggable={false}
      />
    </span>
  );

  if (!linkTo) return content;
  return (
    <Link to="/" aria-label="Unique Beauty Salon — Home" className="inline-flex items-center">
      {content}
    </Link>
  );
}
