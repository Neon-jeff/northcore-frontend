'use client'
import { cn } from "@/lib/utils";
import { checkActiveRoute } from "@/utils/route";
import {
  IconAppsFilled,
  IconBroadcast,
  IconGraph,
  IconIconsFilled,
  IconReceiptDollarFilled,
  IconWallet,
  IconWorldUpload,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideBar = () => {
  const routes = [
    { name: "Dashboard", path: "/user/dashboard", icon: IconAppsFilled },
    {
      name: "Cashier",
      path: "/user/cashier",
      icon: IconReceiptDollarFilled,
    },
    { name: "My Wallets", path: "/user/wallet", icon: IconWallet },
    { name: "Copy Trading", path: "/user/copy-trading", icon: IconWorldUpload },
    { name: "Market Data", path: "/user/market-data", icon:IconGraph },
    { name: "Premium Signals", path: "/user/signals", icon: IconBroadcast },
    { name: "Subscription", path: "/user/subscription", icon: IconIconsFilled },
  ];
  const pathname = usePathname()
  return (
    <div className="flex flex-col sticky max-lg:hidden top-24 mt-16 rounded-2xl gap-3 w-[16%] h-[80vh] bg-white text-white p-4">
      {routes.map((route) => (
        <Link
          key={route.name}
          href={route.path}
          className={cn("flex text-xs cursor-pointer rounded-xl text-zinc-500 items-center space-x-2 p-3 hover:bg-gray-100",checkActiveRoute(route.path,pathname) && "bg-primary/10 text-primary" )}
        >
          <route.icon className="h-5 w-5" />
          <span>{route.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
