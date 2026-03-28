import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

interface HeroRootProps {
  children?: React.ReactNode;
  className?: string;
  variant?: "light" | "dark" | "secondary";
}

const HeroRoot = ({ children, className }: HeroRootProps) => {
  return <div className={cn(" text-white", className)}>{children}</div>;
};

HeroRoot.displayName = "HeroRoot";

interface HeroTextContentProps {
  tooltip?: string;
  badge?: string;
  title?: string;
  description?: string;
  ctaPrimaryTitle?: string;
  ctaSecondaryTitle?: string | React.ReactNode;
  ctaPrimaryLink?: string;
  ctaSecondaryLink?: string;
  className?: string;
  children?: React.ReactNode;
}
const HeroTextContent = ({
  className,
  tooltip,
  badge,
  title,
  description,
  ctaPrimaryTitle,
  ctaPrimaryLink,
  ctaSecondaryTitle,
  ctaSecondaryLink,
  children,
}: HeroTextContentProps) => {
  // If badge is provided, we use it. Otherwise, we try to split the title.
  // This helps handle languages without spaces (like Japanese).
  let badgeText = badge;
  let mainTitle = title;

  if (!badge && title) {
    const spaceIndex = title.indexOf(" ");
    const commaIndex = title.indexOf("、") !== -1 ? title.indexOf("、") : title.indexOf(",");
    
    if (spaceIndex !== -1) {
      const words = title.split(" ");
      if (words.length >= 2) {
        badgeText = words.slice(0, 2).join(" ");
        mainTitle = words.slice(2).join(" ");
      } else {
        badgeText = title;
        mainTitle = "";
      }
    } else if (commaIndex !== -1) {
      // Handle CJK languages splitting at the first comma
      badgeText = title.substring(0, commaIndex + 1);
      mainTitle = title.substring(commaIndex + 1);
    } else {
      // No spaces or commas - we just put it in the main title
      badgeText = "";
      mainTitle = title;
    }
  }

  return (
    <div className={cn(className, "space-y-4")}>
      {tooltip && <span>{tooltip}</span>}
      <div className="space-y-5">
        {badgeText && (
          <p className="text-sm p-2 px-5 bg-primary/10 border border-primary/15 rounded-full w-fit text-primary">
            {badgeText}
          </p>
        )}
        <p className="lg:text-8xl text-4xl">{mainTitle}</p>
        <p className="lg:text-base lg:w-2/3 text-sm text-zinc-400">
          {description}
        </p>
      </div>
      <div className="flex items-center gap-4 mt-10 ">
        {ctaPrimaryTitle && ctaPrimaryLink && (
          <Link href={ctaPrimaryLink} className="">
            <Button>{ctaPrimaryTitle}</Button>
          </Link>
        )}
        {ctaSecondaryTitle && ctaSecondaryLink && (
          <Link href={ctaSecondaryLink} className="">
            <Button
              variant="secondary"
              className="bg-transparent text-white flex items-center gap-2"
            >
              {ctaSecondaryTitle} <ArrowRight />
            </Button>
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
  return <div className={cn(className, "")}>{children}</div>;
};

export const Hero = {
  Root: HeroRoot,
  TextContent: HeroTextContent,
  SecondaryContent: HeroSecondaryContent,
};

export default Hero;
