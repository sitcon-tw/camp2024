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
    let start = `🥞` + parseTime(session.start, false);
    let end = `🥞` + parseTime(session.end, false);
    return {
      gridColumnStart: `🥞${session.room}`,
      gridRow: `${start} / ${end}`,
    };
  }
  const rooms: { [key: string]: string } = {
    Day1: "7/20（四）",
    Day2: "7/21（五）",
    Day3: "7/22（六）",
    Day4: "7/23（日）",
    Day5: "7/24（一）",
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
        className="gap-1 hidden lg:grid"
        style={{
          gridTemplateColumns,
          gridTemplateRows,
        }}
      >
        <div
          style={{
            gridColumnStart: `🥞Day1`,
            gridRowStart: `roomname`,
            gridColumnEnd: `🥞end`,
            gridRowEnd: `🥞2200`,
          }}
          className="bg-[#01405D] bg-opacity-30 rounded-xl"
        />
        {times.map((time, i) => (
          <div
            className="time-item -translate-y-4 mr-4"
            style={{
              gridColumnStart: `🥞time`,
              gridRowStart: `🥞${time.replace(":", "")}`,
            }}
            key={time}
          >
            <div
              className={`text-white font-bold ${
                time.endsWith("30") ? `text-opacity-70` : ``
              }`}
            >
              {time}
            </div>
          </div>
        ))}
        {Object.keys(rooms).map((room, i) => (
          <div
            style={{
              gridColumnStart: `🥞${room}`,
              gridRowStart: `roomname`,
            }}
            className={`text-center py-2 bg-white bg-opacity-[.02] text-white ${
              i === 0 && `rounded-tl-xl`
            } ${i === 4 && `rounded-tr-xl`}`}
            key={room}
          >
            <div className="text-xl font-bold">{room}</div>
            <div className="text-white text-opacity-80">{rooms[room]}</div>
          </div>
        ))}
        {schedule.sessions.map((session: any, i) => (
          <div
            style={parseSessionStyle(session)}
            className={
              `bg-white bg-opacity-[.08] flex flex-col justify-center items-center p-4 text-white transition-all relative border border-white border-opacity-0 ` +
              ((session.zh.description != "" || session.speakers.length != 0) &&
                `hover:bg-opacity-20 hover:cursor-pointer hover:shadow-lg hover:border-opacity-40`)
            }
            key={`${session.room}-${session.zh.title}`}
            onClick={() => openSessionBox(session)}
          >
            <div className="font-bold">{session.zh.title.split("\n")[0]}</div>
            {session.zh.title.split("\n").length >= 2 && (
              <div className="text-sm text-white text-opacity-80">
                {session.zh.title.split("\n")[1]}
              </div>
            )}

            {(session.zh.description != "" || session.speakers.length != 0) && (
              <div className="absolute bottom-0 right-0 w-6 h-6 flex justify-center items-center scale-75">
                <InfoIcon />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="lg:hidden">
        <div className="flex flex-row overflow-x-scroll gap-1">
          {Object.keys(rooms).map((room, i) => (
            <div
              className={`flex flex-col whitespace-nowrap px-2 py-1 cursor-pointer relative`}
              id={`item-${room}`}
              onClick={() => setActiveDay(room)}
              key={room}
            >
              {activeDay === room && (
                <motion.div
                  className="absolute inset-0 h-full bg-white bg-opacity-10 rounded-xl shadow-xl"
                  layout
                  layoutId="activeDay"
                />
              )}
              <div className="font-bold z-10">{room}</div>
              <div className="text-white text-opacity-80 text-xs z-10 mb-1">
                {rooms[room]}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full overflow-x-hidden">
          <motion.div
            className="min-w-[calc((100vw-1rem)*5)] flex flex-row flex-nowrap gap-4"
            style={{
              x: springX,
            }}
            onClick={(e) => {
              DayTranslateX.set(0);
            }}
          >
            {Object.keys(rooms).map((item: string, i: number) => (
              <motion.div
                className="flex flex-col gap-1 mt-2 w-[calc(100vw-2rem)]"
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
                      Object.keys(rooms)[
                        Math.min(
                          Object.keys(rooms).length - 1,
                          Object.keys(rooms).indexOf(activeDay) + 1
                        )
                      ]
                    );
                  } else if (swipe > swipeConfidenceThreshold) {
                    setActiveDay(
                      Object.keys(rooms)[
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
                      className="bg-black bg-opacity-10 border border-black border-opacity-20 flex items-center px-4 py-2 text-white rounded-xl overflow-hidden shadow-sm"
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
                            <span className="ml-1 text-white text-opacity-80 font-normal">
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
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 cursor-pointer backdrop-blur"
            onClick={closeSessionBox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="session-box bg-[#2A4E63] text-white rounded-xl md:rounded-3xl p-5 md:p-8 border border-black border-opacity-20 container max-h-[calc((85vh-1rem))] w-[calc((100vw-2rem))] lg:max-h-[calc((90vh-1rem))] overflow-y-scroll cursor-auto"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
            >
              <div className="flex justify-between items-center mb-2">
                <div>
                  <div className="font-bold text-2xl md:text-3xl">
                    {sessionMessage.zh.title.split("\n")[0]}
                  </div>
                  <div className="text-xl md:text-2xl text-white/[.85] mt-1">
                    {sessionMessage.zh.title.split("\n")[1]}
                  </div>
                </div>
                <button
                  onClick={closeSessionBox}
                  className="text-white hover:text-[#F9A8D4] font-['Anicons_Regular'] text-xl transition-all"
                  style={{
                    fontVariationSettings: `"TIME" 100`,
                  }}
                >
                  A
                </button>
              </div>
              <hr className="my-4 md:my-7 border-[1.3px]" />

              <div className="flex items-start">
                <img src="/2023/icon/pin.svg" className="w-5 h-5 mt-1 mr-2" />
                <div>
                  <h2 className="text-xl font-bold">課程介紹</h2>
                  <div className="mt-2 text-md">
                    {sessionMessage.zh.description
                      .split("\n")
                      .map((item: any, i: number) => {
                        if (i === 0 && item == "")
                          return <span>這節課沒有介紹！</span>;
                        return (
                          <ReactMarkdown
                            key={i}
                            rehypePlugins={[rehypeRaw]}
                            // eslint-disable-next-line react/no-children-prop
                            children={item}
                          />
                        );
                      })}
                  </div>
                </div>
              </div>

              <div
                className={`mt-4 ${
                  sessionMessage.speakers.length < 1 ? "hidden" : ""
                }`}
              >
                {sessionMessage.speakers
                  .map((item: any) =>
                    schedule.speakers.find(({ id }) => id === item)
                  )
                  .map((item: any, i: number) => (
                    <div className="flex items-start mt-10" key={i}>
                      <img
                        src="/2023/icon/speaker.svg"
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
                              src={`/2023/speakers-avatar/${item.id}.jpeg`}
                              alt={`${item.zh.name}'s Avatar`}
                              className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover"
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
