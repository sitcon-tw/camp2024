import { motion } from "framer-motion";

export default function Visual() {
  return (
    <div className="bg-[#01405D] bg-[url('/2024/visual/visual-background.png')] bg-center bg-cover ">
      <div className="h-[65dvh] flex flex-col px-4 pt-20 pb-24 items-stretch box-border relative lg:max-w-[70rem] mx-auto">
        <div className="flex flex-col items-end self-end title">
          <p className="lg:absolute lg:text-4xl text-3xl font-bold drop-shadow-2xl bg-clip-text lg:top-[8rem] lg:right-[4rem]">
            學生計算機年會<span className={"camp-text"}>夏令營</span>
          </p>
          <style>
          .text-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
          </style>
          <p className="lg:text-[#EAD377] lg:text-2xl lg:absolute text-lg lg:top-[10.5rem] lg:right-[4rem]">2024 SITCON Camp</p>
        </div>
        <div className="box-border self-start flex-grow overflow-hidden">
          <motion.img
            drag
            whileDrag={{ scale: 0.8, rotate: -5 }}
            whileTap={{ scale: 0.8, rotate: -5 }}
            dragConstraints={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
            dragElastic={0.2}
            className="absolute w-auto max-h-full lg:top-[10rem] lg:h-[60%] lg:left-[5rem] max-lg:h-[55%] max-lg:top-[8rem] max-lg:left-0"
            src="/2024/visual/visual-cat.png"
            alt="cat and text"
          />
        </div>
        <div className="absolute -bottom-[5.5rem] left-[50vw] -translate-x-1/2 w-[calc(100%-4rem)] lg:hidden">
          <div className="bg-gradient-to-br from-[#2E4B7680] to-[#060A10] backdrop-blur-sm relative h-[11rem] min-w-[20rem] w-[45dvw] rounded-tr-[4rem] rounded-l-2xl rounded-br-2xl mx-auto">
            <div className="w-full h-full">
              <div className="flex flex-col p-4">
                <div className="flex items-center gap-2">
                  <img
                    src="/2024/visual/clock-for-activity-date.png"
                    alt="clock"
                    className="w-6 h-6"
                  />
                  <p className="font-medium text-sm text-[#EAD377] -translate-y-1">
                    活動日期
                  </p>
                </div>
                <div className="pl-8 text-xl font-medium ">07/17-07/21</div>
              </div>
              <div className="flex flex-col p-4">
                <div className="flex items-center gap-2">
                  <img
                    src="/2024/visual/map-marker-for-location.png"
                    alt="clock"
                    className="w-6 h-6"
                  />
                  <p className="font-medium text-sm text-[#EAD377] -translate-y-1">
                    活動地點
                  </p>
                </div>
                <div className="pl-8 text-xl font-medium ">
                  陽明交通大學光復校區
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute max-lg:hidden text-right items-end bottom-[4rem] right-[4rem]">
          <div className="py-2 bg-gradient-to-br from-[#2E4B7680] to-[#060A10] backdrop-blur-sm relative h-auto w-auto rounded-tl-[8rem] rounded-r-2xl rounded-bl-2xl mx-auto">
            <div className="w-full h-full p-[2rem]">
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2">
                  <img
                    src="/2024/visual/clock-for-activity-date.png"
                    alt="clock"
                    className="w-8 h-8"
                  />
                  <p className="font-medium text-xl text-[#EAD377] -translate-y-1">
                    活動日期
                  </p>
                </div>
                <div className="text-3xl font-bold event-info">07/17-07/21</div>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2">
                  <img
                    src="/2024/visual/map-marker-for-location.png"
                    alt="clock"
                    className="w-8 h-8"
                  />
                  <p className="font-medium text-xl text-[#EAD377] -translate-y-1">
                    活動地點
                  </p>
                </div>
                <div className="text-3xl font-bold event-info">
                  陽明交通大學光復校區
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
