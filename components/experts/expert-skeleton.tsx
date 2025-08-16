
import React from "react";

const ExpertSkeleton = () => {
  return (
    <div className="rounded-2xl bg-white shadow-md p-6 w-full max-w-md expert-pulse">
      <style>{`
        .expert-pulse > div, .expert-pulse .expert-pulse-item {
          animation: expert-pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes expert-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
      <div className="h-32 w-full bg-gray-200 rounded-t-2xl mb-[-48px]" />
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-gray-200 border-4 border-white -mt-12 mb-2 expert-pulse-item" />
        <div className="h-5 w-32 bg-gray-200 rounded mb-1 expert-pulse-item" />
        <div className="h-4 w-24 bg-gray-100 rounded mb-3 expert-pulse-item" />
        <div className="h-8 w-40 bg-gray-200 rounded mb-1 expert-pulse-item" />
        <div className="h-4 w-28 bg-gray-100 rounded mb-2 expert-pulse-item" />
        <div className="h-4 w-36 bg-gray-100 rounded mb-4 expert-pulse-item" />
        <div className="flex flex-col gap-2 w-full mt-2 mb-4">
          <div className="flex justify-between">
            <div className="h-4 w-32 bg-gray-100 rounded expert-pulse-item" />
            <div className="h-4 w-16 bg-gray-100 rounded expert-pulse-item" />
          </div>
          <div className="flex justify-between">
            <div className="h-4 w-32 bg-gray-100 rounded expert-pulse-item" />
            <div className="h-4 w-16 bg-gray-100 rounded expert-pulse-item" />
          </div>
          <div className="flex justify-between">
            <div className="h-4 w-32 bg-gray-100 rounded expert-pulse-item" />
            <div className="h-4 w-16 bg-gray-100 rounded expert-pulse-item" />
          </div>
          <div className="flex justify-between">
            <div className="h-4 w-32 bg-gray-100 rounded expert-pulse-item" />
            <div className="h-4 w-16 bg-gray-100 rounded expert-pulse-item" />
          </div>
        </div>
        <div className="h-12 w-64 bg-blue-200 rounded-full mt-4 expert-pulse-item" />
      </div>
    </div>
  );
};

export default ExpertSkeleton;
