"use client";
import ExpertCard from "@/components/experts/expert-card";
import { useExperts } from "@/hooks/experts";
import React from "react";

const ExpertPage = () => {
  const { data, isLoading } = useExperts();
  console.log(data, isLoading);
  return (
    <div className="lg:w-11/12 w-full py-10 p-2 space-y-5 lg:min-h-5/6 max-md:min-h-screen rounded-2xl bg-white lg:p-10 ">
      <div>
        <h1 className="text-2xl text-black font-bold pb-2">Copy trading experts</h1>
        <p className="text-sm">
          Our experts are here to help you maximize your trading potential.{" "}
        </p>
      </div>
    
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
        {data?.experts.map((expert) => (
          <ExpertCard key={expert.id} {...expert} />
        ))}
      </div>
    </div>
  );
};

export default ExpertPage;
