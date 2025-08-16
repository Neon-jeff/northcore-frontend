/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { Icon, IconArrowRight } from "@tabler/icons-react";
import React from "react";
import { Button } from "./button";

interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn("grid grid-cols-1 lg:grid-cols-3 gap-5", className)}
      {...props}
    >
      {children}
    </div>
  );
};

BentoGrid.displayName = "BentoGrid";

interface BentoGridItemProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  Icon?: Icon;
  image?: string;
}

const BentoGridItem = ({
  title,
  className,
  description,
  Icon,
  children,
  image,
}: BentoGridItemProps) => {
  return (
    <div
      className={cn(
        "flex flex-col relative gap-4 border border-gray-100/20 bg-gray-50 p-5 overflow-clip lg:rounded-3xl rounded-xl",
        className
      )}
    >
      <img
        src={image}
        alt={title}
        className="absolute top-0 right-0 left-0 bottom-0 h-full w-full  object-cover rounded-md"
      />
      <div className="absolute lg:p-10 p-2 top-0 left-0 right-0 bottom-0 bg-black/50 text-white space-y-1 z-40">
        {Icon && (
          <div className="w-fit rounded-full p-2 h-fit">
            <Icon size={28} color="#fff" />
          </div>
        )}
        <h3 className="lg:text-4xl text-2xl font-bold lg:w-1/2 ">{title}</h3>
        <p className="text-sm ">{description}</p>
        <Button className="absolute bottom-5 right-5 w-fit border bg-white/10 text-white backdrop-filter backdrop-blur-xl flex flex-col border-gray-50/90 font-bold rounded-lg"> Get Started Now
          <IconArrowRight className=" size-6"/>
        </Button>
      </div>
      {children}
    </div>
  );
};
BentoGridItem.displayName = "BentoGrid.Item";

BentoGrid.Item = BentoGridItem;

export default BentoGrid;
