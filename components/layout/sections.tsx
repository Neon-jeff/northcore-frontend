import { cn } from "@/lib/utils";
import React from "react";

interface SectionsProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children?: React.ReactNode;
}

const Section = ({ className, children, ...props }: SectionsProps) => {
  return (
    <section
      className={cn("lg:w-4/5 mx-auto pl-0  px-4 py-8", className)}
      {...props}
    >
      {children}
    </section>
  );
};

Section.displayName = "Section";

const Description = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadElement>) => {
  return (
    <h1
      className={cn(
        "text-sm text-gray-700  ",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

Description.displayName = "Section.Description";

const Title = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      className={cn(
        "lg:text-5xl lg:w-1/2 text-2xl font-bold text-zinc-700",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};
Title.displayName = "Section.Title";

const Content = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
Content.displayName = "Section.Content";

const DescriptionContainer = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

DescriptionContainer.displayName = "Section.DescriptionContainer";


Section.Description = Description;
Section.Title = Title;
Section.Content = Content;
Section.DescriptionContainer = DescriptionContainer;

export default Section;


