import dynamic from "next/dynamic";
import React from "react";

const SingleTickerNoSSR = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.SingleTicker),
  {
    ssr: false,
  }
);

const MarketItem = ({ symbol }: { symbol: string }) => {
  return (
    <div>
      <SingleTickerNoSSR
        symbol={symbol}
        colorTheme="light"
        locale="en"
        width="100%"
        copyrightStyles={{
          parent: {
            display: "none",
          },
        }}
      />
    </div>
  );
};

export default MarketItem;
