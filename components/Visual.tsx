import {
  motion,
  useTime,
  useTransform,
  useSpring,
  useScroll,
  easeInOut
} from "framer-motion";

import useScrollSize from "../utils/useScrollSize";
export default function Visual() {
  const [visualRef, { width, height }] = useScrollSize()
  const { scrollY } = useScroll()
  const time = useTime()
  const warpTime = useTransform(time, t => t % 8000);
  const warpScrollY = useTransform(scrollY, [0, height], [0, 1]);
  const springScrollY = useSpring(warpScrollY, {
    damping: 50,
    stiffness: 400
  })
  const vw = width / 100
  const logoY = useTransform(warpScrollY, [0, 1], [0, 70]);
  const catX = useTransform(springScrollY, [0, 1], [0, -10 * vw]);
  const catY = useTransform(springScrollY, [0, 1], [0, 25]);
  const astronautX = useTransform(springScrollY, [0, 1], [0, 10 * vw]);
  const astronautY = useTransform(springScrollY, [0, 1], [0, 50]);
  const planetY = useTransform(warpTime, [0, 4000, 8000], [0, 25, 0], { ease: easeInOut })
  const infoY = useTransform(warpScrollY, [0, 1], [0, -70]);
  const dateOpacity = useTransform(warpTime, [0, 2000, 6000, 8000], [1, 0, 0, 1]);
  const dateHeight = useTransform(warpTime, [0, 2000, 6000, 8000], ["auto", 0, 0, "auto"]);
  const date2Opacity = useTransform(warpTime, [0, 2000, 6000, 8000], [0, 1, 1, 0]);
  const date2Height = useTransform(warpTime, [0, 2000, 6000, 8000], [0, "auto", "auto", 0]);

  return <div className="w-full h-[100vh]  overflow-hidden " ref={visualRef}>
    <div className="container relative">
      <motion.img
        style={{ y: logoY }}
        className="absolute top-[12.5vh] w-40 md:w-60 left-0 right-0 m-auto" src="/2023/visual/logo.svg" alt="logo" />
      <motion.img
        style={{ x: catX, y: catY }}
        className="absolute top-[35vh] w-[150px] sm:w-[180px] md:w-[300px] right-0 m-auto" src="/2023/visual/cat.svg" alt="cat" />
      <motion.img
        style={{ x: astronautX, y: astronautY }}
        className="absolute top-[35vh] w-[160px] sm:w-[200px] md:w-[320px] left-0 m-auto" src="/2023/visual/astronaut.svg" alt="astronaut" />
      <motion.img
        style={{ y: planetY }}
        className="absolute top-[45vh] w-[250px] sm:w-[450px] md:w-[400px] left-0 right-0 m-auto" src="/2023/visual/planet.svg" alt="planet" />
      <motion.div
        style={{ y: infoY }}
        className="absolute top-[75vh] m-auto w-full flex flex-col items-start gap-1 lg:gap-2 text-white leading-4">
        <div className="lg:text-xl bg-[#012637] bg-opacity-80 backdrop-blur-xl rounded mt-2 p-1">地點</div>
        <div className="text-2xl font-bold lg:text-4xl bg-[#012637] bg-opacity-80 backdrop-blur-xl rounded p-1">陽明交通大學 光復校區</div>
        <div className="flex gap-8">
          <div>

            <motion.div className="lg:text-xl bg-[#012637] bg-opacity-80 backdrop-blur-xl rounded p-1">
              日期
            </motion.div>
            <motion.div className="text-2xl font-bold lg:text-4xl bg-[#012637] bg-opacity-80 backdrop-blur-xl rounded p-1">
              07/20 ~ 07/24
            </motion.div>
          </div>
          <div>
            <motion.div className="lg:text-xl bg-[#012637] bg-opacity-80 backdrop-blur-xl rounded p-1">
              報名期限
            </motion.div>
            <motion.div className="text-2xl font-bold lg:text-4xl bg-[#012637] bg-opacity-80 backdrop-blur-xl rounded p-1">
              即日起 ~ 05/26
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  </div >
}