import React from "react";
import FeatherStats from "../ui/award";
import { useTranslation } from "react-i18next";


const Awards = () => {
  const { t } = useTranslation();
  const awards = [
    {
      title: "components.mostTrustedBroker",
      year: 2022,
      description: "components.cfiBestForexBrokerAward",
      notes: "components.thisAwardHighlightsOurCommitment"
    },
    {
      title: "components.bestCustomerServiceGlobal",
      year: 2021,
      description: "components.globalForexAwards2024",
      notes: "components.thisAwardUnderscoresOurDedication"
    },
    {
      title: "components.bestPartnerProgramme",
      year: 2020,
      description: "components.fxTrustScore2024",
      notes: "components.thisAwardReflectsOurCommitment"
    },
  ];
  return (
    <div className="mx-auto flex max-md:flex-col lg:mt-20 items-center h-full lg:gap-10 gap-5">
      {awards.map((item) => (
        <div key={item.title} className="lg:w-4/5 w-full relative h-[400px] flex flex-col p-5 gap-10 justify-center items-center  bg-gray-50 rounded-xl">
          <FeatherStats title={t(item.title)} description={t(item.description)} />
        </div>
      ))}
    </div>
  );
};

export default Awards;
