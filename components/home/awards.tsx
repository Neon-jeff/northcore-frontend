import React from "react";
import FeatherStats from "../ui/award";


const Awards = () => {
  const awards = [
    {
      title: "Most trusted broker",
      year: 2022,
      description: "CFI Best Forex Broker Award.",
      notes: "This award highlights our commitment to pushing boundaries."
    },
    {
      title: "Best Customer Service - Global",
      year: 2021,
      description: "Global Forex Awards 2024",
      notes: "This award underscores our dedication to user-centric design."
    },
    {
      title: "Best Partner Programme",
      year: 2020,
      description: "FX trust score 2024",
      notes: "This award reflects our commitment to excellence."
    },
  ];
  return (
    <div className="mx-auto flex max-md:flex-col lg:mt-20 items-center h-full lg:gap-10 gap-5">
      {awards.map((item) => (
        <div key={item.title} className="lg:w-4/5 w-full relative h-[400px] flex flex-col p-5 gap-10 justify-center items-center  bg-gray-50 rounded-xl">
          <FeatherStats title={item.title} description={item.description} />
        </div>
      ))}
    </div>
  );
};

export default Awards;
