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
  IconLogout,
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
import { useUserStore } from "@/store/user";
import { useGetNotifications } from "@/hooks/transactions";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";
import Script from "next/script";

const DashboardNav = () => {
  const routes = [
    { name: "Dashboard", path: "/user/dashboard", icon: IconAppsFilled },
    {
      name: "Cashier",
      path: "/user/cashier",
      icon: IconReceiptDollarFilled,
    },
    { name: "My Wallet", path: "/user/wallet", icon: IconLibraryFilled },
    { name: "Copy Trading", path: "/user/copy-trading", icon: IconWorldUpload },
    {
      name: "Market Data",
      path: "/user/market-data",
      icon: IconGraph,
    },
    { name: "Premium Signals", path: "/user/signals", icon: IconBroadcast },
    { name: "Subscription", path: "/user/subscription", icon: IconIconsFilled },
    { name: "Account", path: "/user/account", icon: IconUserCircle},
  ];
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const { data, logout } = useUserStore();
  const { data: notifications, isLoading } = useGetNotifications();
  return (
    <nav className="flex fixed items-center justify-between bg-white lg:px-20 p-4 left-0 right-0   top-0 z-10">
      <div className="flex justify-between w-full items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden ">
          <IconMenu className="size-7 text-zinc-700 hover:text-zinc-800 transition duration-200" />
        </button>
        <LogoSmall className="max-lg:hidden" />
        <h1 className="text-zinc-800 font-bold text-center max-lg:hidden">
          Dashboard
        </h1>
        <div className="flex items-center *:size-6 lg:gap-10 gap-5   rounded-full">
          <DropdownMenu>
            <DropdownMenuTrigger className="relative">
              <IconBell className="text-zinc-600 hover:scale-110 hover:text-zinc-800 transition duration-200" />
              <p className="absolute size-4 flex items-center justify-center rounded-full -top-1 -right-1 bg-primary text-white text-[.55rem]">
                {notifications?.notifications.length ?? 0}
              </p>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="space-y-2 ">
              <p className="text-base font-bold">Notifications</p>
              {notifications && notifications.notifications.length > 0 && (
                <ScrollArea className="lg:max-h-[40vh] max-h-[60vh]">
                  {(notifications?.notifications || [])?.map((notification) => (
                    <div
                      key={notification.id}
                      className="flex flex-col text-gray-500 space-y-1 rounded-lg w-full hover:bg-white p-2 border border-gray-100/50 text-xs"
                    >
                      <p className="text-[.55rem] text-green-800 capitalize bg-green-100 p-1.5 w-fit rounded-full px-4">
                        {notification.notification_type}
                      </p>
                      <div className="flex flex-col justify-between gap-1">
                        <p className="font-bold text-black ">
                          {notification.title}
                        </p>
                        <p className="text-[.55rem]">
                          {new Date(notification.created_at).toLocaleString()}
                        </p>
                      </div>
                      <p className="text-[.65rem]"> {notification.message}</p>
                    </div>
                  ))}
                </ScrollArea>
              )}
              {isLoading && (
                <div className="w-full h-10 bg-zinc-200 animate-pulse rounded-lg" />
              )}
              {notifications?.notifications?.length === 0 && (
                <p className="text-center text-gray-500">No notifications</p>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          <button id="message-button">
            <IconMessage className="text-zinc-600 hover:scale-110 hover:text-zinc-800 transition duration-200" />
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2">
              <IconUserCircle className="text-zinc-600 hover:scale-110 hover:text-zinc-800 transition duration-200" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white rounded-lg shadow-md p-4 text-xs space-y-4">
              <p className="text-sm font-bold">
                {data?.first_name} {data?.last_name}
              </p>
              <Link
                href="/user/wallet"
                className="block text-gray-500 hover:text-gray-800"
              >
                View Wallet
              </Link>
              <Link
                href="/user/copy-trading"
                className="block text-gray-500 hover:text-gray-800"
              >
                Copy Trading
              </Link>
              <Button
                className="flex items-center gap-2"
                variant={"ghost"}
                onClick={logout}
              >
                <IconLogout />
                Logout
              </Button>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      {/* mobile side bar */}
      {isOpen && (
        <div className="lg:hidden bg-black/70 fixed top-0 left-0 right-0 bottom-0">
          <div className="bg-white h-full flex flex-col w-4/5 py-10 px-5 ">
            <button className="self-end pb-2" onClick={() => setIsOpen(false)}>
              <IconX className="text-black" />
            </button>
            {/* profile section */}
            <div className="flex justify-between items-end border-b border-gray-100 pb-4">
              <div className="flex flex-col gap-2">
                <span className="bg-primary text-white text-xl font-bold p-3 w-fit rounded-full">
                  {data?.first_name.charAt(0)} {data?.last_name.charAt(0)}
                </span>
                <span className="text-zinc-800  text-base font-bold">
                  {data?.first_name} {data?.last_name}
                </span>
              </div>
              {/* <span className=" bg-gray-100 text-black p-1.5 px-3 text-xs rounded-full  w-fit font-bold">
                View Profile
              </span> */}
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
        </div>
      )}
      <Script id="chat-button" strategy="afterInteractive">
        {`
            var chatButton = document.querySelector('#message-button');
            chatButton.addEventListener('click', function() {
              console.log('Chat button clicked');
              smartsupp('chat:show')
            });
            `}
      </Script>
    </nav>
  );
};

export default DashboardNav;
