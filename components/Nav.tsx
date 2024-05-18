import { useEffect, useState } from "react";
import { motion, useAnimate, stagger } from "framer-motion";
import StartRegister from "./nav/StartRegister";
import Link from "next/link";
function NavItem({
  href,
  children,
  setIsNavOpen,
}: {
  href: string;
  children: React.ReactNode;
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Link
      href={href}
      className="text-white hover:text-[#F9A8D4] font-medium text-xl border-b-[1px] border-blue-50 py-6 lg:border-0"
      onClick={() => setIsNavOpen(false)}
      scroll={!href.startsWith("/#")}
    >
      {children}
    </Link>
  );
}
export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navItems = [
    { href: "/", text: "開始報名" },
    { href: "/#about", text: "關於我們" },
    { href: "/#events", text: "課程活動" },
    { href: "/#records", text: "過往紀錄" },
    { href: "/#application-info", text: "報名資訊" },
    { href: "/coc", text: "行為準則" },
    { href: "/teams", text: "籌備團隊" },
  ];
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50" >
        <nav className="bg-opacity-80 bg-gradient-to-b from-[#060A11] to-[#0C142020] py-3 px-6 lg:py-3 lg:px-10 flex items-center justify-between shadow-2xl transition-all">
          <Link href="/" className="font-bold">
            <img src="/2024/icon/logo.svg" className="h-10" alt="Logo" />
          </Link>
          <div className="hidden space-x-4 lg:flex">
            {navItems.map((item, index) => (
              <NavItem href={item.href} key={index} setIsNavOpen={setIsNavOpen}>
                {item.text}
              </NavItem>
            ))}
          </div>
          <div className="flex flex-row gap-4">
            <StartRegister></StartRegister>
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="text-white font-['Anicons_Regular'] text-xl transition-all lg:hidden"
              style={{
                fontVariationSettings: isNavOpen ? "\"TIME\" 100" : "\"TIME\" 1",
              }}
            >
              A
            </button>
          </div>
        </nav>
        <div className="lg:hidden">
          <div
            className="w-[100vw] h-[100dvh] absolute top-0 m-auto bg-[#0E1826] lg:hidden overflow-hidden -z-10 transition-all pt-16"
            style={{
              pointerEvents: isNavOpen ? "auto" : "none",
              right: isNavOpen ? "0" : "-100vw",
            }}
            id="mobile-nav"
          >
            <div className="flex flex-col justify-between px-10 py-4 space-y-4">
              {navItems.map((item, index) => (
                <NavItem
                  href={item.href}
                  key={index}
                  setIsNavOpen={setIsNavOpen}
                >
                  {item.text}
                </NavItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
