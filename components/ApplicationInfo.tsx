import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import Button from "./Button";
function PriceCard({ type, price }: { type: string; price: number }) {
  return (
    <div className="bg-[#013249] py-4 px-6 rounded-xl flex-1">
      <div className="border-b border-white border-opacity-20 pb-1 mb-1 text-xl flex items-center justify-between">
        <div>{type}</div>
        <div className="hidden sm:block">
          {Array.from({ length: type === "團體報名" ? 3 : 1 }).map((_, i) => (
            <i key={i} className={`bx bx-user`}></i>
          ))}
        </div>
      </div>
      <div className="md:text-xl">
        <span className="text-2xl md:text-3xl font-bold mr-2">
          {price.toLocaleString()}
        </span>
        <span>元/人</span>
      </div>
    </div>
  );
}
function ApplicationCard({
  children,
  icon,
  dense = false,
}: {
  children: React.ReactNode;
  icon?: string;
  dense?: boolean;
}) {
  return (
    <div className={`bg-[#013249] rounded-xl ${dense ? `py-2 px-6` : `py-4 px-6 lg:py-6`} relative overflow-hidden mb-4`}>
      <div className="relative z-10">{children}</div>
      {icon && <i
        className={`absolute text-[96px] h-[96px] w-[96px] bottom-0 top-0 right-4 m-auto text-[#015C85] opacity-50 bx ${icon}`}
      ></i>}
    </div>
  );
}
function ApplicationTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-bold mb-2">{children}</h2>;
}
function ApplicationContent({ children }: { children: React.ReactNode }) {
  return <h3 className="text-2xl lg:text-3xl">{children}</h3>;
}
export default function ApplicationInfo() {
  return (
    <div className="container">
      <SectionTitle id="application-info">報名資訊</SectionTitle>
      <ApplicationCard icon="bx-calendar">
        <ApplicationTitle>日期</ApplicationTitle>
        <ApplicationContent>07/20 ~ 07/24</ApplicationContent>
      </ApplicationCard>
      <ApplicationCard icon="bx-map-alt">
        <ApplicationTitle>地點</ApplicationTitle>
        <ApplicationContent>陽明交通大學 光復校區</ApplicationContent>
      </ApplicationCard>
      <ApplicationCard icon="bx-time">
        <ApplicationTitle>報名時間</ApplicationTitle>
        <ApplicationContent>即日起 ~ 05/26</ApplicationContent>
      </ApplicationCard>
      <div className="flex gap-4 w-full">
        <PriceCard type="個人報名" price={8800} />
        <PriceCard type="團體報名" price={7600} />
      </div>
      <div className="flex items-center justify-center my-8">
        <motion.a
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 40,
          }}
          href="https://sitcon.kktix.cc/events/sitcon-camp2023"
          className="bg-[#015C85] hover:bg-[#034D6F] bg-opacity-80 backdrop-blur-xl rounded-full py-5 px-12 shadow-2xl text-4xl font-bold"
          target="_blank"
        >
          立即報名
        </motion.a>
      </div>
      <ApplicationCard dense>
        <div className="flex flex-col-reverse my-2 md:my-0 md:flex-row items-center md:items-center justify-between gap-2 md:gap-4">
          <div className="text-sm md:text-base">
            將 SITCON Camp 重要日程加入行事曆
          </div>
          <Button href="/2023/events.ics" className="bg-blue-300 bg-opacity-10 hover:bg-blue-300 hover:bg-opacity-20 rounded-xl">
            <i className='bx bx-calendar-plus'></i>
            加入行事曆
          </Button>
        </div>
      </ApplicationCard >
      <div className="mt-4 p-4 lg:p-6 bg-[#013249] rounded-xl lg:flex gap-4 lg:gap-6 items-center">
        <div className="text-2xl font-bold min-w-max">注意事項</div>
        <div className="mt-4 lg:mt-0 lg:border-l lg:border-white lg:pl-6">
          <ol className="list-decimal list-inside leading-7">
            <li>三人同時報名，視為團體報名，每團以三人為限。</li>
            <li>
              本次夏令營預計招收學員 60
              名，我們會針對報名資料做簡易審查，非先報先贏。
            </li>
            <li>
              正取學員名單將於 06/11 公佈，屆時請關注 SITCON 相關社群媒體。
            </li>
            <li>
              正取學員需完成報名費繳交，始完成報名程序；另設有補助名額，請詳閱{" "}
              <a
                href="https://drive.google.com/file/d/1lDPRoSkzFcM0FI5peNmJbDJA_NvWJZ5h/view"
                target="_blank"
                className="link"
              >
                補助辦法
              </a>
              。
            </li>
            <li>
              關於退費事宜，請見{" "}
              <a
                href="https://drive.google.com/file/d/1Cn78OIo5xOYwsL7eti4SmzNjZxt5bhG_/view"
                target="_blank"
                className="link"
              >
                退費說明文件
              </a>
              。
            </li>
          </ol>
        </div>
      </div>
    </div >
  );
}
