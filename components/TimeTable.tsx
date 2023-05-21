import schedule from '../public/schedule.json'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence, spring, useMotionValue, useSpring } from 'framer-motion'
import useWindowSize from '@/hooks/useWindowSize'
export default function TimeTable() {
  function parseTime(time: Date, colon: Boolean = true): string {
    let res = new Date(time).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'Asia/Taipei'
    })
    return colon ? res : res.replace(':', '')
  }
  function parseSessionStyle(session: any) {
    let start = `🥞` + parseTime(session.start, false)
    let end = `🥞` + parseTime(session.end, false)
    return ({
      'gridColumnStart': `🥞${session.room}`,
      'gridRow': `${start} / ${end}`,
    })
  }
  const rooms: { [key: string]: string } = { "Day1": "7/20（四）", "Day2": "7/21（五）", "Day3": "7/22（六）", "Day4": "7/23（日）", "Day5": "7/24（一）" }

  const times =
    [
      ...new Set(
        [
          ...schedule.sessions.map(({ start }) => start),
          ...schedule.sessions.map(({ end }) => end)
        ]
          .map(x => new Date(x))
          .map(x => parseTime(x))
      )
    ]
      .sort()
  const gridTemplateColumns = ['[🥞time]', 'auto', Object.keys(rooms).map(x => `[🥞${x}]`).join(' 1fr ') + '1fr', '[🥞end]'].join(' ')
  const gridTemplateRows = ['[roomname]',
    ...times.map(x => `[🥞${x.replace(":", "")}]`),
    '[🥞end]'].join(' auto ')
  // for mobile
  const [activeDay, setActiveDay] = useState(Object.keys(rooms)[0])
  const x = useMotionValue(0)
  const size = useWindowSize()
  useEffect(() => {
    let vw = window.innerWidth
    let rem = parseFloat(getComputedStyle(document.documentElement).fontSize)
    x.set((-vw + rem) * Object.keys(rooms).indexOf(activeDay))
    DayTranslateX.set(0)
    document.getElementById(`item-${activeDay}`)?.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' })
  }, [activeDay, size.width])
  const springX = useSpring(x, { stiffness: 300, damping: 35 })
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;
  const DayTranslateX = useMotionValue(0)


  return (<>
    <div className='gap-1 hidden lg:grid'
      style={{
        gridTemplateColumns,
        gridTemplateRows,
      }}
    >
      <div style={{
        gridColumnStart: `🥞Day1`,
        gridRowStart: `roomname`,
        gridColumnEnd: `🥞end`,
        gridRowEnd: `🥞2200`,
      }}
        className='bg-blue-500 bg-opacity-5 rounded-xl'
      />
      {
        times.map((time, i) => (
          <div
            className="time-item -translate-y-4 mr-4"
            style={{
              gridColumnStart: `🥞time`,
              gridRowStart: `🥞${time.replace(":", "")}`,
            }}
            key={time}
          >
            <div className={`text-white font-bold ${time.endsWith('30') ? `text-opacity-70` : ``}`}>
              {time}
            </div>
          </div>
        ))
      }
      {
        Object.keys(rooms).map((room, i) => (
          <div style={{
            gridColumnStart: `🥞${room}`,
            gridRowStart: `roomname`,
          }}
            className={`text-center py-2 bg-white bg-opacity-[.025] text-white ${i === 0 && `rounded-tl-xl`} ${i === 4 && `rounded-tr-xl`}`}
            key={room}
          >
            <div className="text-xl font-bold">
              {room}
            </div>
            <div className="text-white text-opacity-80">
              {rooms[room]}
            </div>
          </div>
        ))
      }
      {
        schedule.sessions.map((session: any, i) => (
          <div style={parseSessionStyle(session)}
            className='bg-white bg-opacity-5 flex flex-col justify-center items-center p-4 text-white'
            key={`${session.room}-${session.zh.title}`}
          >
            <div className='font-bold'>
              {session.zh.title.split('\n')[0]}
            </div>
            {session.zh.title.split('\n').length >= 2 &&
              <div className="text-sm text-white text-opacity-80">
                {session.zh.title.split('\n')[1]}
              </div>
            }
          </div>
        ))
      }
    </div>
    <div className='lg:hidden'>
      <div className="flex flex-row overflow-x-scroll gap-1">
        {
          Object.keys(rooms).map((room, i) => (
            <div
              className={`flex flex-col whitespace-nowrap px-2 py-1 cursor-pointer relative`}
              id={`item-${room}`}
              onClick={() => setActiveDay(room)}
              key={room}
            >
              {activeDay === room && <motion.div
                className='absolute inset-0 h-full bg-black bg-opacity-10 border border-black border-opacity-20 rounded-xl shadow-xl'
                layout
                layoutId='activeDay'
              />}
              <div className="font-bold z-10">
                {room}
              </div>
              <div className="text-white text-opacity-80 text-xs z-10 mb-1">
                {rooms[room]}
              </div>
            </div>
          ))
        }
      </div>
      <div className='w-full overflow-x-hidden'>
        <motion.div className='min-w-[calc((100vw-1rem)*5)] flex flex-row flex-nowrap gap-4'
          style={{
            x: springX
          }}
        >
          {
            Object.keys(rooms).map((item: string, i: number) => (
              <motion.div
                className="flex flex-col gap-1 mt-2 w-[calc(100vw-2rem)]"
                key={item}
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(10px)' }}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                drag='x'
                style={{ x: DayTranslateX }}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    setActiveDay(Object.keys(rooms)[Math.min(Object.keys(rooms).length - 1, Object.keys(rooms).indexOf(activeDay) + 1)])
                  } else if (swipe > swipeConfidenceThreshold) {
                    setActiveDay(Object.keys(rooms)[Math.max(0, Object.keys(rooms).indexOf(activeDay) - 1)])
                  }
                }}
              >
                {
                  schedule.sessions.filter(({ room }) => room === item).map((session: any, i) => (
                    <motion.div
                      key={`${session.room}-${session.zh.title}`}
                    >
                      <div className='bg-black bg-opacity-10 border border-black border-opacity-20 flex flex-col px-4 py-2 text-white rounded-xl overflow-hidden shadow-sm'>
                        <div className='text-sm'>
                          {parseTime(session.start)} ~ {parseTime(session.end)}
                        </div>
                        <div className='font-bold'>
                          {session.zh.title.split('\n')[0]}
                          {session.zh.title.split('\n').length >= 2 &&
                            <span className="ml-1 text-white text-opacity-80 font-normal">
                              {session.zh.title.split('\n')[1]}
                            </span>
                          }
                        </div>

                      </div>
                    </motion.div>
                  ))
                }
              </motion.div>))
          }
        </motion.div>
      </div>
    </div>
  </>)
}