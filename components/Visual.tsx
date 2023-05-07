
import {
  motion,
  useTime,
  useTransform,
  useSpring,
  useScroll,
  easeInOut
} from "framer-motion";
import { useRef } from "react";
export default function Visual() {
  if (!process.browser) return <></>
  const visualRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll()
  const time = useTime()
  const warpTime = useTransform(time, t => t % 8000);
  const warpScrollY = useTransform(scrollY, [0, window.innerHeight], [0, 1]);
  const springScrollY = useSpring(warpScrollY, {
    damping: 50,
    stiffness: 400
  })
  const vw = window.innerWidth / 100
  const catX = useTransform(springScrollY, [0, 1], [0, -10 * vw]);
  const catY = useTransform(springScrollY, [0, 1], [0, 25]);
  const astronautX = useTransform(springScrollY, [0, 1], [0, 10 * vw]);
  const astronautY = useTransform(springScrollY, [0, 1], [0, 50]);
  const planetY = useTransform(warpTime, [0, 4000, 8000], [0, 25, 0], { ease: easeInOut })
  return <div className="w-full h-[100vh]  overflow-hidden " ref={visualRef}>
    <div className="container relative">
      < img className="absolute top-[15vh] w-40 md:w-60 left-0 right-0 m-auto" src="/2023/visual/logo.svg" alt="logo" />
      <motion.img
        style={{ x: catX, y: catY }}
        className="absolute top-[35vh] w-[150px] sm:w-[180px] md:w-[300px] right-0 m-auto" src="/2023/visual/cat.svg" alt="cat" />
      <motion.img
        style={{ x: astronautX, y: astronautY }}
        className="absolute top-[35vh] w-[160px] sm:w-[200px] md:w-[320px] left-0 m-auto" src="/2023/visual/astronaut.svg" alt="astronaut" />
      <motion.img
        style={{ y: planetY }}
        className="absolute top-[50vh] w-[350px] sm:w-[450px] md:w-[400px] left-0 right-0 m-auto" src="/2023/visual/planet.svg" alt="planet" />
    </div>
  </div >
}