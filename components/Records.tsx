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
  }, [scrollWidth]);

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
      <div className="relative overflow-hidden flex flex-nowrap whitespace-nowrap">
        <motion.div
          ref={rail}
          style={{ x: baseX }}
          className="whitespace-nowrap flex-nowrap flex gap-4"
        >
          <div className="flex flex-nowrap whitespace-nowrap gap-4 min-w-max">
            {children}
          </div>
          <div className="flex flex-nowrap whitespace-nowrap gap-4 min-w-max">
            {children}
          </div>
          <div className="flex flex-nowrap whitespace-nowrap gap-4 min-w-max">
            {children}
          </div>
        </motion.div>
      </div>
    </>
  );
}
export default function Records() {
  const imgRow1 = [
    `/2024/records/48711514086_fe8bcd70a3_k.jpg`,
    `/2024/records/48711521701_10787293f0_c.jpg`,
    `/2024/records/48711645867_304b3f2727_k.jpg`,
    `/2024/records/48711654047_e36f5fe98d_k.jpg`,
    `/2024/records/48711655747_6f4d128066_k.jpg`,
    `/2024/records/48711667217_a251f33169_k.jpg`,
    `/2024/records/48711673932_dd4e775482_k.jpg`,
    `/2024/records/48711675447_324a2915f4_k.jpg`,
    `/2024/records/48711678192_f77e8b5d4b_c.jpg`,
    `/2024/records/48711684617_e8d23396b3_k.jpg`,
    `/2024/records/50694221331_e465f84efc_k.jpg`,
    `/2024/records/51260350196_1e24756478_5k.jpg`,
  ];
  const imgRow2 = [
    `/2024/records/48711478201_f0b3b61d1f_k.jpg`,
    `/2024/records/48711148968_c0c5b92648_k.jpg`,
    `/2024/records/48711158398_a9e76fe8c6_k.jpg`,
    `/2024/records/48711173683_6a5438b593_k.jpg`,
    `/2024/records/48711180203_df7f6ba7b3_k.jpg`,
    `/2024/records/48711185743_0289ac2d95_k.jpg`,
    `/2024/records/48711198528_e7ac02a80b_k.jpg`,
    `/2024/records/48711417321_9811d901a1_k.jpg`,
    `/2024/records/48711432406_1dc02a6270_k.jpg`,
    `/2024/records/48711460716_f573528caf_k.jpg`,
    `/2024/records/48711504911_54e1d297c7_k.jpg`,
    `/2024/records/48711513221_eddbacab82_k.jpg`,
  ];
  return (
    <>
      <SectionTitle id="records">過往紀錄與回饋</SectionTitle>
      <div className="container mb-8 text-center">
        SITCON 夏令營在為學員帶來扎實內容的同時，也希望整個學習的過程有趣且精彩 ! 
        <br />
        以下為過往活動的影音紀錄。
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex justify-center items-center w-full my-4 gap-4"
      >
        <Button
          href="https://www.youtube.com/watch?v=oAtiOrpj6DQ"
          target="_blank"
        >
          觀賞回顧影片<i className="bx bx-video text-xl"></i>
        </Button>
        <Button
          href="https://www.flickr.com/photos/sitcon/albums"
          target="_blank"
        >
          查看更多照片<i className="bx bx-image text-xl"></i>
        </Button>
      </motion.div>
      <Parallax baseVelocity={1}>
        {imgRow1.map((img, index) => (
          <img key={index} src={img} className="h-36 lg:h-64 inline rounded" />
        ))}
      </Parallax>
      <div className="h-8"></div>
      <Parallax baseVelocity={-1}>
        {imgRow2.map((img, index) => (
          <img key={index} src={img} className="h-36 lg:h-64 inline rounded" />
        ))}
      </Parallax>
    </>
  );
}
