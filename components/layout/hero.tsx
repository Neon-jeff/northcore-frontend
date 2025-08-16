import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

interface HeroRootProps {
  children?: React.ReactNode;
  className?: string;
  variant?: "light" | "dark" | "secondary";
}

const HeroRoot = ({ children, className }: HeroRootProps) => {
  return (
    <div className={cn(" text-white",className)}>
      {children}
    </div>
  );
};

HeroRoot.displayName = "HeroRoot";

interface HeroTextContentProps {
  tooltip?: string;
  title?: string;
  description?: string;
  ctaPrimaryTitle?: string;
  ctaSecondaryTitle?: string | React.ReactNode;
  ctaPrimaryLink?: string;
  ctaSecondaryLink?: string
  className?: string;
  children?: React.ReactNode;
}
const HeroTextContent = ({
  className,
  tooltip,
  title,
  description,
  ctaPrimaryTitle,
  ctaPrimaryLink,
  ctaSecondaryTitle,
  ctaSecondaryLink,
  children,
}: HeroTextContentProps) => {
  return (
    <div className={cn(className, "space-y-4")}>
      {tooltip && <span>{tooltip}</span>}
      <div className="space-y-5">
        <p className="lg:text-7xl text-4xl">{title}</p>
        <p className="lg:text-lg text-sm text-zinc-400">{description}</p>
      </div>
      <div className="flex items-center gap-4 mt-10 ">
        {ctaPrimaryTitle && ctaPrimaryLink && (
          <Link href={ctaPrimaryLink} className="">
            <Button>{ctaPrimaryTitle}</Button>
          </Link>
        )}
        {ctaSecondaryTitle && ctaSecondaryLink && (
          <Link href={ctaSecondaryLink} className="">
            <Button variant="secondary" className="max-md:bg-gray-300 max-md:text-gray-700 flex items-center gap-2">{ctaSecondaryTitle}</Button>
          </Link>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};
HeroTextContent.displayName = "HeroTextContent";

const HeroSecondaryContent = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn(className, "")}>
      {children}
    </div>
  );
};

export const Hero = {
  Root: HeroRoot,
  TextContent: HeroTextContent,
  SecondaryContent: HeroSecondaryContent,
};

export default Hero;
