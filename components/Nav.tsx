import { useEffect, useState } from "react";
import { motion, useAnimate, stagger } from "framer-motion";
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
      className="text-white hover:text-[#F9A8D4] font-bold"
      onClick={() => setIsNavOpen(false)}
      scroll={!href.startsWith("/#")}
    >
      {children}
    </Link>
  );
}
function useMenuAnimation(isOpen: boolean) {
  const staggerMenuItems = stagger(0.1, { startDelay: 0.05 });
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "#mobile-nav",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(0% 10% 100% 90% round 10px)",
        y: isOpen ? 0 : -20,
        opacity: isOpen ? 1 : 0,
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );

    animate(
      "#mobile-nav a",
      isOpen
        ? { opacity: 1, filter: "blur(0px)", scale: 1 }
        : { opacity: 0, filter: "blur(10px)", scale: 0.3 },
      {
        duration: 0.15,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [animate, isOpen, staggerMenuItems]);

  return scope;
}
export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const scope = useMenuAnimation(isNavOpen);
  const navItems = [
    { href: "/#events", text: "課程活動" },
    { href: "/#records", text: "過往紀錄" },
    { href: "/#application-info", text: "報名資訊" },
    { href: "/coc", text: "行為準則" },
    { href: "/teams", text: "籌備團隊" },
  ];
  return (
    <>
      <div className="container fixed top-0 left-0 right-0 z-50" ref={scope}>
        <nav className="bg-[#01405D] bg-opacity-80 backdrop-blur-xl rounded-full py-3 px-6 mt-4 lg:py-3 lg:px-10 lg:mt-8 flex items-center justify-between shadow-2xl transition-all">
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
          <div className="relative lg:hidden">
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="text-white hover:text-[#F9A8D4] font-['Anicons_Regular'] text-xl transition-all"
              style={{
                fontVariationSettings: isNavOpen ? "\"TIME\" 100" : "\"TIME\" 1",
              }}
            >
              A
            </button>
            <div
              className="w-[200px] max-w-[80vw] absolute top-6 -right-4 m-auto bg-[#01405D] bg-opacity-80 backdrop-blur-xl rounded-2xl  mt-8 shadow-2xl lg:hidden overflow-hidden z-50"
              style={{
                pointerEvents: isNavOpen ? "auto" : "none",
                clipPath: "inset(5% 5% 95% 95% round 10px)",
              }}
              id="mobile-nav"
            >
              <div className="flex flex-col justify-between px-6 py-4 space-y-4">
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
        </nav>
      </div>
    </>
  );
}
