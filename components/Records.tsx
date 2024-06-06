import SectionTitle from "./SectionTitle";
import { useEffect, useRef } from "react";
import {
  motion,
  useTime,
  useTransform,
  useMotionValue,
  useSpring,
  useScroll,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import useScrollSize from "../hooks/useScrollSize";
import Button from "./Button";
interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity: number;
}

function Parallax({ children, baseVelocity }: ParallaxProps) {
  const [rail, { scrollWidth }] = useScrollSize();
  // calc rail width and sync to scroll
  const railWidth = useMotionValue(scrollWidth / 3);
  useEffect(() => {
    railWidth.set(scrollWidth / 3);
  }, [railWidth, scrollWidth]);

  const animationTime = 5 * 1000;

  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5]);
  const directionFactor = useRef<number>(1);
  useAnimationFrame((time, delta) => {
    let moveBy =
      (railWidth.get() / animationTime) *
      baseVelocity *
      directionFactor.current;

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * velocityFactor.get() * moveBy;

    baseX.set(baseX.get() + moveBy);
    if (baseX.get() < railWidth.get() * -2) {
      baseX.set(railWidth.get() * -1);
    }
    if (baseX.get() > railWidth.get() * -1) {
      baseX.set(railWidth.get() * -2);
    }
  });
  return (
    <>
      <div className="relative flex overflow-hidden flex-nowrap whitespace-nowrap">
        <motion.div
          ref={rail}
          style={{ x: baseX }}
          className="flex gap-4 whitespace-nowrap flex-nowrap"
        >
          <div className="flex gap-4 flex-nowrap whitespace-nowrap min-w-max">
            {children}
          </div>
          <div className="flex gap-4 flex-nowrap whitespace-nowrap min-w-max">
            {children}
          </div>
          <div className="flex gap-4 flex-nowrap whitespace-nowrap min-w-max">
            {children}
          </div>
        </motion.div>
      </div>
    </>
  );
}
export default function Records() {
  // const imgRow1 = [
  //   "./images/53110516472_b081fd3d1a_c.jpg",
  //   "./images/53110519457_81e1bc3781_c.jpg",
  //   "./images/53111096906_8957a8857f_c.jpg",
  //   "./images/53111098411_c2fb7a1bcd_c.jpg",
  //   "./images/53111100071_8a4e7dd19b_c.jpg",
  //   "./images/53111305319_71e7df2bdd_c.jpg",
  //   "./images/53111601933_33b0392702_c.jpg",
  // ];
  // const imgRow2 = [
  //   "./images/53111301199_3a9ebea5dd_c.jpg",
  //   "./images/53111303304_4947c6c347_c.jpg",
  //   "./images/53111304989_64db175cda_c.jpg",
  //   "./images/53111511580_604ecbd2d8_c.jpg",
  //   "./images/53111513390_7fd95246eb_c.jpg",
  //   "./images/53111600553_81f2d2127e_c.jpg",
  //   "./images/53111602443_d4050f381a_c.jpg",
  //   "./images/53111604048_911606f8a9_c.jpg",
  // ];
  return (
    <div className="bg-[#0E1826] -z-50 relative pt-[5rem]">
      <div className="flex py-8">
        <div className="flex items-center gap-2 mx-auto text-3xl font-bold text-center">
          <h1 className="text-2xl text-center text-[#ffffff]">過往紀錄與回饋</h1>
        </div>
      </div>
      <div className="flex mb-8 text-left">
        <div className="mx-auto px-[2rem]">
          SITCON 夏令營在為學員帶來扎實內容的同時，也希望整個學習的過程有趣且精彩 !
          <br />
          以下為過往活動的紀錄與回饋，讓您更了解 SITCON 夏令營的精彩內容！
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex items-center justify-center w-full gap-4 my-4 pb-[2rem]"
      >
        <Button
          href="https://www.youtube.com/watch?v=oAtiOrpj6DQ"
          target="_blank"
          className="bg-transparent border border-white"
        >
          <i className="text-xl bx bx-video" />
          觀賞回顧影片
        </Button>
        <Button
          href="https://www.flickr.com/photos/sitcon/albums"
          target="_blank"
          className="bg-transparent border border-white"
        >
          <i className="text-xl bx bx-image" />
          查看更多照片
        </Button>
      </motion.div>
      <img src={"/2024/images/53111287494_19d4bec65f_k.png"} alt="picture" className="mx-auto" />
      {/* <Parallax baseVelocity={1}>
        {imgRow1.map((img, index) => (
          <img key={index} src={img} className="inline rounded h-36 lg:h-64" alt={"Image Row 1-" + index} />
        ))}
      </Parallax>
      <div className="h-8"></div>
      <Parallax baseVelocity={-1}>
        {imgRow2.map((img, index) => (
          <img key={index} src={img} className="inline rounded h-36 lg:h-64" alt={"Image Row 2-" + index} />
        ))}
      </Parallax> */}
    </div>
  );
}
