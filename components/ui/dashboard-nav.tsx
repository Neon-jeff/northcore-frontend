"use client";
import React from "react";
import { LogoSmall } from "../logo";
import {
  IconAppsFilled,
  IconBell,
  IconBroadcast,
  IconGraph,
  IconIconsFilled,
  IconLibraryFilled,
  IconMenu,
  IconMessage,
  IconReceiptDollarFilled,
  IconUserCircle,
  IconWorldUpload,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { checkActiveRoute } from "@/utils/route";
import { usePathname } from "next/navigation";
import Link from "next/link";

const DashboardNav = () => {
  const routes = [
    { name: "Dashboard", path: "/user/dashboard", icon: IconAppsFilled },
    {
      name: "Cashier",
      path: "/user/cashier",
      icon: IconReceiptDollarFilled,
    },
    { name: "My Wallet", path: "/user/account", icon: IconLibraryFilled },
    { name: "Copy Trading", path: "/user/copy-trading", icon: IconWorldUpload },
    {
      name: "Market Data",
      path: "/user/market-data",
      icon: IconGraph,
    },
    { name: "Premium Signals", path: "/user/signals", icon: IconBroadcast },
    { name: "Subscription", path: "/user/subscription", icon: IconIconsFilled },
  ];
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <nav className="flex fixed items-center justify-between bg-white lg:px-20 p-4 left-0 right-0   top-0 z-10">
      <div className="flex justify-between w-full items-center" >
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden ">
          <IconMenu className="size-7 text-zinc-700 hover:text-zinc-800 transition duration-200" />
        </button>
        <LogoSmall className="max-lg:hidden" />
        <h1 className="text-zinc-800 font-bold text-center max-lg:hidden">
          Dashboard
        </h1>
        <div className="flex items-center *:size-6 lg:gap-10 gap-5   rounded-full">
          <IconBell className="text-zinc-600 hover:scale-110 hover:text-zinc-800 transition duration-200" />
          <IconMessage className="text-zinc-600 hover:scale-110 hover:text-zinc-800 transition duration-200" />
          <IconUserCircle className="text-zinc-600 hover:scale-110 hover:text-zinc-800 transition duration-200" />
        </div>
      </div>
      {/* mobile side bar */}
    { isOpen && <div className="lg:hidden bg-black/70 fixed top-0 left-0 right-0 bottom-0">
        <div className="bg-white h-full flex flex-col w-4/5 py-10 px-5 ">
          <button className="self-end pb-2" onClick={() => setIsOpen(false)}>
            <IconX className="text-black" />
          </button>
          {/* profile section */}
          <div className="flex justify-between items-end border-b border-gray-100 pb-4">
            <div className="flex flex-col gap-2">
              <span className="bg-primary text-white text-xl font-bold p-3 w-fit rounded-full">
                N J
              </span>
              <span className="text-zinc-800  text-base font-bold">Neon Jeff</span>
            </div>
            <span className=" bg-gray-100 text-black p-1.5 px-3 text-xs rounded-full  w-fit font-bold">
              View Profile
            </span>
          </div>
          <div className="mt-5">
            {routes.map((route) => (
              <Link
                href={route.path}
                key={route.name}
                className={cn(
                  "flex text-xs cursor-pointer transition-all duration-150 ease-in rounded-lg text-zinc-500 mb-2 items-center space-x-2 p-3 hover:bg-gray-100",
                  checkActiveRoute(route.path, pathname) &&
                    "bg-primary/10 hover:bg-primary/10 text-primary"
                )}
              >
                <route.icon className="h-5 w-5" />
                <span>{route.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>}
    </nav>
  );
};

export default DashboardNav;
