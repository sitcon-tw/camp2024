import schedule from '../public/schedule.json'
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

  const times = [...new Set(
    [...schedule.sessions.map(({ start }) => start),
    ...schedule.sessions.map(({ end }) => end),]
  )]
    .map(x => new Date(x))
    .sort()
  const gridTemplateColumns = ['[🥞time]', 'auto', Object.keys(rooms).map(x => `[🥞${x}]`).join(' 1fr ') + '1fr', '[🥞end]'].join(' ')
  const gridTemplateRows = ['[roomname]',
    ...times
      .map(x => parseTime(x, false))
      .sort()
      .map(x => `[🥞${x}]`),
    '[🥞end]'].join(' auto ')
  return (<>
    <div className='gap-1 hidden lg:grid'
      style={{
        gridTemplateColumns,
        gridTemplateRows,
      }}
    >
      {
        times.map((time, i) => (
          <div
            className="time-item"
            style={{
              gridColumnStart: `🥞time`,
              gridRowStart: `🥞${parseTime(time, false)}`,
            }}>
            <div className="time-item-content">
              {parseTime(time)}
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
            className='text-center'
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
            className='bg-white bg-opacity-10 flex flex-col justify-center items-center p-4 text-white'
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
  </>)
}