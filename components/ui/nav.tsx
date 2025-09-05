"use client";
import React from "react";
import { LogoSmall } from "../logo";
import Link from "next/link";
import { Button } from "./button";
import { IconMenu, IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { checkActiveRoute } from "@/utils/route";
import { usePathname, useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Nav = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Company", href: "/company" },
    { name: "Markets", href: "/market-data" },
    { name: "Learn", href: "/learn" },
    // { name: "Reach Us", href: "/" },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();
  useGSAP(() => {
    if (isMobileMenuOpen) {
      gsap.from("#mobile-modal", {
        y: "50%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [isMobileMenuOpen]);
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  const router = useRouter()
  return (
    <>
      <nav className=" fixed bg-black/10  backdrop-blur-3xl backdrop-filter  left-0 right-0 top-0 lg:p-10 lg:py-5 p-3 px-4 z-50 flex  justify-between  items-center ">
        <LogoSmall />
        <div className="flex items-center justify-between gap-16 max-md:hidden">
          <ul className="flex items-center gap-8 text-sm">
            {links.map((link) => {
              const isActive = checkActiveRoute(link.href, pathname);
              return (
                <li key={link.name} className="inline-block">
                  <Link
                    href={link.href}
                    className={cn(
                      "text-gray-400 hover:text-black",
                      isActive &&
                        "text-primary font-jakarta  hover:text-primary p-2 px-5 rounded-full bg-black/2 font-semibold"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div>
            <Link href="/auth/signup">
              <Button>Create Account</Button>
            </Link>
            <Link href="/auth/login">
              <Button variant="secondary" className="ml-2 text-black">
                Login
              </Button>
            </Link>
          </div>
        </div>
        <button className="md:hidden" onClick={handleMobileMenuToggle}>
          <IconMenu
            size={34}
            color="#000"
            strokeWidth={1.2}
            className="md:hidden"
          />
        </button>
      </nav>
      {isMobileMenuOpen && (
        <div className="fixed lg:hidden top-0 bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm backdrop-filter z-50 flex flex-col justify-end ">
          <div
            className="h-3/4 w-full relative bg-white px-10 flex flex-col gap-10 pt-20 rounded-t-3xl"
            id="mobile-modal"
          >
            <button
              className="absolute top-8 right-8"
              onClick={handleMobileMenuToggle}
            >
              <IconX color="#000" size={25} />
            </button>
            <ul className="flex flex-col  gap-6 text-base">
              {links.map((link) => {
                const isActive = checkActiveRoute(link.href, pathname);
                return (
                  <li
                    key={link.name}
                    className="flex flex-col w-fit items-center gap-2"
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "text-gray-500 hover:text-white text-sm",
                        isActive &&
                          "text-black text-xl pb-1 border-b-2 border-black font-semibold"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-col gap-5 justify-between mt-10">
              <Button className="bg-black" onClick={()=>{router.push('/auth/signup')}}>Create Account</Button>
              <Button variant="secondary" onClick={()=>{router.push('/auth/login')}}>Login to account</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
