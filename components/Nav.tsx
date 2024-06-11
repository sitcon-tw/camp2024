import { useState } from "react";
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
      className="text-white hover:opacity-80 font-medium text-lg border-b-[1px] border-blue-50 py-4 lg:border-0"
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
    { href: "/coc", text: "行為準則" },
    { href: "/teams", text: "籌備團隊" },
  ];
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[999999999999999]" >
        <nav className="bg-opacity-80 bg-gradient-to-b from-[#060A11] to-[#0C142020] py-3 px-6 lg:py-2 lg:px-10 flex items-center justify-between shadow-2xl transition-all h-[4rem] lg:h-auto lg:bg-[linear-gradient(90deg,rgba(12,20,32,1)_0%,rgba(50,84,134,1)_60%,rgba(12,20,32,1)_100%)]">
          <Link href="/" className="font-bold">
            <img src="/2024/icon/logo.svg" className="h-10" alt="Logo" />
          </Link>
          <div className="flex flex-row gap-4">
            <div className="hidden mr-3 space-x-4 text-right lg:flex">
              {navItems.map((item, index) => (
                <NavItem href={item.href} key={index} setIsNavOpen={setIsNavOpen}>
                  {item.text}
                </NavItem>
              ))}
            </div>
            <div className="flex-1 my-auto">
              <div className="flex mx-auto my-auto">
                <a
                  className="bg-gradient-to-b from-[#78C2FF] to-[#9C7DFF] rounded-full p-1 opacity-60 cursor-not-allowed"
                  // href="https://sitcon.kktix.cc/events/sitcon-camp2024"
                  target="_blank"
                >
                  <p className="bg-white text-lg font-medium text-[#1E3D6C] px-4 py-1 rounded-full h-full">報名截止</p>
                </a>
              </div>
            </div>
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
