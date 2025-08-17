'use client'
import { cn } from "@/lib/utils";
import React from "react";
import {motion} from 'motion/react'

interface SectionsProps  {
  className?: string;
  children?: React.ReactNode;
}

const Section = ({ className, children }: SectionsProps) => {
  return (
    <motion.section
      className={cn("lg:w-4/5 mx-auto pl-0  px-4 py-8", className)}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  );
};

Section.displayName = "Section";

const Description = ({
  className,
  children,
}: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.h1
      className={cn(
        "text-sm text-gray-700  ",
        className
      )}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.h1>
  );
};

Description.displayName = "Section.Description";

const Title = ({
  className,
  children,
  ...props
}: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.p
      className={cn(
        "lg:text-5xl lg:w-1/2 text-2xl font-bold text-zinc-700",
        className
      )}
      {...props}
    >
      {children}
    </motion.p>
  );
};
Title.displayName = "Section.Title";

const Content = ({
  className,
  children,
  ...props
}: { children: React.ReactNode; className?: string }) => {
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
}: { children: React.ReactNode; className?: string }) => {
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


