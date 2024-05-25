/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import schedule from "../public/schedule.json";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import useWindowSize from "@/hooks/useWindowSize";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import InfoIcon from "./InfoIcon";

export default function TimeTable() {
  function parseTime(time: Date, colon: Boolean = true): string {
    let res = new Date(time).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Taipei",
    });
    return colon ? res : res.replace(":", "");
  }
  function parseSessionStyle(session: any) {
    let start = "🥞" + parseTime(session.start, false);
    let end = "🥞" + parseTime(session.end, false);
    return {
      gridColumnStart: `🥞${session.room}`,
      gridRow: `${start} / ${end}`,
    };
  }
  const rooms: { [key: string]: string } = {
    Day1: "7/17 (三)",
    Day2: "7/18 (四)",
    Day3: "7/19 (五)",
    Day4: "7/20 (六)",
    Day5: "7/21 (日)",
  };
  const times = [
    ...new Set(
      [
        ...schedule.sessions.map(({ start }) => start),
        ...schedule.sessions.map(({ end }) => end),
      ]
        .map((x) => new Date(x))
        .map((x) => parseTime(x))
    ),
  ].sort();
  const gridTemplateColumns = [
    "[🥞time]",
    "auto",
    Object.keys(rooms)
      .map((x) => `[🥞${x}]`)
      .join(" 1fr ") + "1fr",
    "[🥞end]",
  ].join(" ");
  const gridTemplateRows = [
    "[roomname]",
    ...times.map((x) => `[🥞${x.replace(":", "")}]`),
    "[🥞end]",
  ].join(" auto ");
  // for mobile
  const [activeDay, setActiveDay] = useState(Object.keys(rooms)[0]);
  const x = useMotionValue(0);
  const size = useWindowSize();
  useEffect(() => {
    let vw = window.innerWidth;
    let rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    x.set((-vw + rem) * Object.keys(rooms).indexOf(activeDay));
    document.getElementById(`item-${activeDay}`)?.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
      block: "nearest",
    });

    DayTranslateX.set(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeDay, size.width]);
  const springX = useSpring(x, { stiffness: 300, damping: 35 });
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) =>
    Math.abs(offset) * velocity;
  const DayTranslateX = useMotionValue(0);

  interface SessionMessage {
    zh: {
      title: string;
      description: string;
    };
    speakers: any;
    slide: string;
    co_write: string;
  }

  const [sessionMessage, setSessionMessage] = useState<SessionMessage | null>(
    null
  );
  const openSessionBox = (sessionData: any) => {
    if (sessionData.zh.description || sessionData.speakers.length)
      setSessionMessage(sessionData);
  };
  const closeSessionBox = () => {
    setSessionMessage(null);
  };

  function hyperlinkRenderer(props: any) {
    return (
      <a href={props.href} target="_blank">
        {props.children}
      </a>
    );
  }

  return (
    <>
      <div
        className="hidden gap-1 lg:grid"
        style={{
          gridTemplateColumns,
          gridTemplateRows,
        }}
      >
        <div
          style={{
            gridColumnStart: "🥞Day1",
            gridRowStart: "roomname",
            gridColumnEnd: "🥞end",
            gridRowEnd: "🥞2130",
          }}
          className="bg-[#01405D] bg-opacity-30 rounded-xl"
        />
        {times.map((time, i) => (
          <div
            className="mr-4 -translate-y-4 time-item"
            style={{
              gridColumnStart: "🥞time",
              gridRowStart: `🥞${time.replace(":", "")}`,
            }}
            key={time}
          >
            <div
              className={`text-[#1E3D6C] font-bold ${time.endsWith("30") ? "text-opacity-70" : ""}`}
            >
              {time}
            </div>
          </div>
        ))}
        {Object.keys(rooms).map((room, i) => (
          <div
            style={{
              gridColumnStart: `🥞${room}`,
              gridRowStart: "roomname",
            }}
            className={`text-center py-2 bg-white bg-opacity-[.02] text-[#1E3D6C] ${i === 0 && "rounded-tl-xl"} ${i === 4 && "rounded-tr-xl"}`}
            key={room}
          >
            <div className="text-xl font-bold">{room}</div>
            <div className="text-[#1E3D6C] text-opacity-80">{rooms[room]}</div>
          </div>
        ))}
        {schedule.sessions.map((session: any, i) => (
          <div
            style={parseSessionStyle(session)}
            className={
              "bg-white bg-opacity-[.08] flex flex-col justify-center items-center p-4 text-[#1E3D6C] transition-all relative border border-[#1E3D6C] border-opacity-0 " +
              ((session.zh.description != "" || session.speakers.length != 0) &&
                "hover:bg-opacity-20 hover:cursor-pointer hover:shadow-lg hover:border-opacity-40")
            }
            key={`${session.room}-${session.zh.title}`}
            onClick={() => openSessionBox(session)}
          >
            <div className="font-bold">{session.zh.title.split("\n")[0]}</div>
            {session.zh.title.split("\n").length >= 2 && (
              <div className="text-sm text-[#1E3D6C] text-opacity-80">
                {session.zh.title.split("\n")[1]}
              </div>
            )}

            {(session.zh.description != "" || session.speakers.length != 0) && (
              <div className="absolute bottom-0 right-0 flex items-center justify-center w-6 h-6 scale-75">
                <InfoIcon />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="lg:hidden">
        <div className="flex flex-row justify-between gap-1 overflow-x-scroll">
          {Object.keys(rooms).map((room, i) => (
            <div
              className={
                "flex flex-col whitespace-nowrap px-[2rem] py-1 cursor-pointer relative"
              }
              id={`item-${room}`}
              onClick={() => setActiveDay(room)}
              key={room}
            >
              {activeDay === room && (
                <motion.div
                  className="absolute inset-0 h-full bg-[#CBD2E0] rounded-xl"
                  layout
                  layoutId="activeDay"
                />
              )}
              <div className="z-10 font-bold text-[#1E3D6C] text-center">{room}</div>
              <div className="z-10 mb-1 text-xs text-[#1E3D6C] text-opacity-80 text-center">
                {rooms[room]}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full overflow-x-hidden">
          <motion.div
            className="w-[calc((100vw)*5)] flex flex-row flex-nowrap gap-[3rem]"
            style={{
              x: springX,
            }}
            onClick={(e) => {
              DayTranslateX.set(0);
            }}
          >
            {Object.keys(rooms).map((item: string, i: number) => (
              <motion.div
                className="flex flex-col gap-2 mt-2 min-w-[calc(100vw-4rem)]"
                key={item}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.05}
                dragTransition={{ bounceStiffness: 5000, bounceDamping: 100 }}
                drag="x"
                style={{ x: DayTranslateX }}
                dragSnapToOrigin={true}
                whileTap={{ x: 0 }}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    setActiveDay(
                      Object.keys(rooms)[Math.min(
                        Object.keys(rooms).length - 1,
                        Object.keys(rooms).indexOf(activeDay) + 1
                      )
                      ]
                    );
                  } else if (swipe > swipeConfidenceThreshold) {
                    setActiveDay(Object.keys(rooms)[
                      Math.max(0, Object.keys(rooms).indexOf(activeDay) - 1)
                    ]
                    );
                  }
                }}
              >
                {schedule.sessions
                  .filter(({ room }) => room === item)
                  .map((session: any, i) => (
                    <div
                      className="flex items-center px-4 py-2 overflow-hidden text-[#1E3D6C] bg-[#CBD2E0] border border-[#1E3D6C] rounded-xl"
                      onClick={() => openSessionBox(session)}
                      key={`${session.room}-${session.zh.title}`}
                    >
                      <div className="flex flex-col flex-1">
                        <div className="text-sm">
                          {parseTime(session.start)} ~ {parseTime(session.end)}
                        </div>
                        <div className="font-bold">
                          {session.zh.title.split("\n")[0]}
                          {session.zh.title.split("\n").length >= 2 && (
                            <span className="ml-1 font-normal text-[#1E3D6C] text-opacity-60">
                              {session.zh.title.split("\n")[1]}
                            </span>
                          )}
                        </div>
                      </div>
                      {(session.zh.description != "" ||
                        session.speakers.length != 0) && <InfoIcon />}
                    </div>
                  ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {sessionMessage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer backdrop-blur"
            onClick={closeSessionBox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="session-box bg-[linear-gradient(#E6E9F1,#C5CFE0)] text-[#1E3D6C] rounded-xl md:rounded-3xl p-5 md:p-8 border border-black border-opacity-20 container max-h-[calc((85vh-1rem))] w-[calc((100vw-2rem))] lg:max-h-[calc((90vh-1rem))] overflow-y-scroll cursor-auto"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
            >
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="text-2xl font-bold md:text-3xl">
                    {sessionMessage.zh.title.split("\n")[0]}
                  </div>
                  <div className="text-xl md:text-2xl text-[#1E3D6C]/[.85] mt-1">
                    {sessionMessage.zh.title.split("\n")[1]}
                  </div>
                </div>
                <button
                  onClick={closeSessionBox}
                  className="text-[#1E3D6C] hover:opacity-50 font-['Anicons_Regular'] text-xl transition-all -mt-10"
                  style={{
                    fontVariationSettings: "\"TIME\" 100",
                  }}
                >
                  A
                </button>
              </div>
              <hr className="my-4 md:my-7 border-[1.3px]" />

              <div className="flex items-start">
                <img src="/2024/icon/pin.svg" className="w-5 h-5 mt-1 mr-2" />
                <div>
                  <h2 className="text-xl font-bold">課程介紹</h2>
                  <div className="mt-2 text-md">
                    {sessionMessage.zh.description
                      .split("\n")
                      .map((item: any, i: number) => {
                        if (i === 0 && item == "")
                          return <span key={i}>這節課沒有介紹！</span>;
                        return (
                          <ReactMarkdown
                            key={i}
                            components={{
                              a: hyperlinkRenderer,
                            }}
                            rehypePlugins={[rehypeRaw]}
                            // eslint-disable-next-line react/no-children-prop
                            children={item}
                          />
                        );
                      })}
                  </div>
                  <div className="flex gap-2 mt-2 text-md">
                    {sessionMessage.slide && (
                      <a
                        href={sessionMessage.slide}
                        target="_blank"
                        className="slide"
                      >
                        課程簡報
                      </a>
                    )}
                    {sessionMessage.co_write && (
                      <a
                        href={sessionMessage.co_write}
                        target="_blank"
                        className="slide"
                      >
                        課程共筆
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div
                className={`mt-4 ${sessionMessage.speakers.length < 1 ? "hidden" : ""}`}
              >
                {sessionMessage.speakers
                  .map((item: any) =>
                    schedule.speakers.find(({ id }) => id === item)
                  )
                  .map((item: any, i: number) => (
                    <div className="flex items-start mt-10" key={i}>
                      <img
                        src="/2024/icon/speaker.svg"
                        className="w-5 h-5 mt-1 mr-2"
                      />
                      <div className="w-full">
                        <h2 className="text-xl font-bold">
                          講者介紹 - {item.zh.name}
                        </h2>
                        <div className="flex mt-2">
                          {/* items-start */}
                          <div className="grow">
                            {item.zh.bio
                              .split("\n")
                              .map((item: any, i: number) => (
                                <ReactMarkdown
                                  key={i}
                                  components={{
                                    a: hyperlinkRenderer,
                                  }}
                                  rehypePlugins={[rehypeRaw]}
                                  // eslint-disable-next-line react/no-children-prop
                                  children={item}
                                />
                              ))}
                          </div>
                          <div className="flex-none ml-[21px] w-20 h-20 md:w-32 md:h-32">
                            <img
                              src={item.avatar}
                              alt={`${item.zh.name}'s Avatar`}
                              className="object-cover w-20 h-20 border rounded-full md:w-32 md:h-32 border-[#1E3D6C]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
