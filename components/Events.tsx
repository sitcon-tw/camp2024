import { motion } from "framer-motion";
import TimeTable from "./TimeTable";
export function EventTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="flex mb-[1rem] text-2xl font-bold text-center text-black ">
      <div className="flex justify-between gap-2 max-lg:mx-auto">{children}</div>
    </h2>
  );
}
export function EventContent({ children }: { children: React.ReactNode }) {
  return <div className="text-black lg:w-[calc(100%-28.5rem)]">{children}</div>;
}
export function EventBox({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
      className={
        "lg:py-6 lg:pr-6 max-lg:pb-6 max-lg:px-6 rounded-[3rem] bg-white relative mb-[2rem] shadow-2xl max-lg:h-full z-50 lg:h-full"
      }
    >
      {children}
    </motion.div>
  );
}
export function EventImg({ src }: { src: string }) {
  return (
    <img
      src={src}
      className="max-lg:w-full max-lg:mt-[2rem] shadow-xl rounded-[2rem] lg:h-[17rem] lg:w-[25rem] lg:object-cover my-auto lg:ml-[1rem]"
      alt={"Event Image"}
    />
  );
}
export default function Events() {
  return (
    <div className="bg-[linear-gradient(#E6E9F1,#C3CEDF)] rounded-[2rem] -mt-5 -mb-10 px-[2rem] pb-[2rem]">
      <div className=" max-w-[1024px] mx-auto">
        <div className="flex py-8">
          <div className="flex items-center gap-2 mx-auto text-3xl font-bold text-center">
            <span>
              <img
                src="/2024/images/sitcon.svg"
                height="2rem"
                width="auto"
                alt="sitcon1"
              />
            </span>
            <h1 className="text-2xl text-center text-[#1E3D6C]">課程活動</h1>
            <span>
              <img
                src="/2024/images/sitcon.svg"
                height="2rem"
                width="auto"
                alt="sitcon2"
              />
            </span>
          </div>
        </div>
        <TimeTable />
        <div className="mt-[5rem]" />
        <EventBox>
          <div className="flex mb-[2rem] lg:hidden">
            <div className="bg-[linear-gradient(90deg,#EAB9D4,#E78EBF)] w-[50%] h-[1rem] mx-auto rounded-b-full" />
          </div>
          <div className="lg:flex">
            <div className="bg-[linear-gradient(180deg,#EAB9D4,#E78EBF)] h-[12rem] w-[1rem] mx-auto rounded-r-full max-lg:hidden my-auto mr-[2rem]" />
            <EventContent>
              <EventTitle>
                <img
                  src="/2024/images/main-course.svg"
                  alt="主線課程"
                  className="h-[2rem] w-[2rem]"
                />
                主線課程
              </EventTitle>
              講師們會帶著大家從零開始認識 Python，從基礎語法、各種資料結構，到
              function、套件管理，最終目標是做出屬於自己的 Telegram 聊天機器人！
              <br />
              <br />
              在課程中，透過講師的精心準備的課程，穿插多個動手實作練習，並即時搭配多位助教及講師的協助，確保每位學員都能夠得到充分的關注和指導，讓每一位學員都可以跟上課程進度，並且在課程中不斷進步。
            </EventContent>
            <EventImg src="./images/53111094241_0442d799b2_c.jpg" />
          </div>
        </EventBox>
        <EventBox>
          <div className="flex mb-[2rem] lg:hidden">
            <div className="bg-[linear-gradient(90deg,#B1DAED,#809CF3)] w-[50%] h-[1rem] mx-auto rounded-b-full" />
          </div>
          <div className="lg:flex">
            <div className="bg-[linear-gradient(180deg,#B1DAED,#809CF3)] h-[12rem] w-[1rem] mx-auto rounded-r-full max-lg:hidden my-auto mr-[2rem]" />
            <EventContent>
              <EventTitle>
                <img
                  src="/2024/images/hackathon.svg"
                  alt="Hackathon"
                  className="h-[2rem] w-[2rem]"
                />
                Hackathon
              </EventTitle>
              黑客松（Hackathon）是「黑客」（Hack；原指早期為電腦系統找尋不完美的地方，或是探索不同的解法，來改善電腦系統）與「馬拉松」（Marathon）的組合字，顧名思義，也就像是程式設計、工程界的馬拉松：由有興趣的一群人在有限的時間內，發揮自己的專長做出一個有特色的專案。
            </EventContent>
            <EventImg src="./images/48711682947_ebcb764c42_c.jpg" />
          </div>
        </EventBox>
        <EventBox>
          <div className="flex mb-[2rem] lg:hidden">
            <div className="bg-[linear-gradient(90deg,#92EBEB,#55C6C6)] w-[50%] h-[1rem] mx-auto rounded-b-full" />
          </div>
          <div className="lg:flex">
            <div className="bg-[linear-gradient(180deg,#92EBEB,#55C6C6)] h-[12rem] w-[1rem] mx-auto rounded-r-full max-lg:hidden my-auto mr-[2rem]" />
            <EventContent>
              <EventTitle>
                <img
                  src="/2024/images/breadth.svg"
                  alt="廣度課程"
                  className="h-[2rem] w-[2rem]"
                />
                廣度課程
              </EventTitle>
              為避免單一的教學方式限制了學員對資訊領域的視野，夏令營在設計時，特別安排了廣度課程。讓學員在學習基礎課程之餘，也能學到資訊領域的其他層面，增加自身資訊技能的廣度。其中，我們邀請到了許多在資訊圈打滾多年的權威人士分享自身經驗，期許能為迷茫中的學員，點亮未來的一盞明燈，找到屬於自己的資訊路。
            </EventContent>
            <EventImg src="./images/48711498916_9f781599dc_c.jpg" />
          </div>
        </EventBox>
        <EventBox>
          <div className="flex mb-[2rem] lg:hidden">
            <div className="bg-[linear-gradient(90deg,#FFAE6D,#F98849)] w-[50%] h-[1rem] mx-auto rounded-b-full" />
          </div>
          <div className="lg:flex">
            <div className="bg-[linear-gradient(180deg,#FFAE6D,#F98849)] h-[12rem] w-[1rem] mx-auto rounded-r-full max-lg:hidden my-auto mr-[2rem]" />
            <EventContent>
              <EventTitle>
                <img
                  src="/2024/images/view-coffee.svg"
                  alt="視界咖啡館"
                  className="h-[2rem] w-[2rem]"
                />
                視界咖啡館
              </EventTitle>
              視界咖啡館參考自世界咖啡館（The World
              Café），在本次夏令營中，我們邀請到各領域及社群知名前輩，將傳統座談會形式改以聊天的樣貌呈現。學員可以與資訊界的名人們近距離互動，期望透過縮短講者與學員之間的距離，講者可以更針對學員給出建議，也鼓勵學員踴躍提問、參與，進而產生良好的雙向交流。
            </EventContent>
            <EventImg src="./images/53110517522_254f76817b_c.jpg" />
          </div>
        </EventBox>
        <EventBox>
          <div className="flex mb-[2rem] lg:hidden">
            <div className="bg-[linear-gradient(90deg,#FF8585,#FF5858)] w-[50%] h-[1rem] mx-auto rounded-b-full" />
          </div>
          <div className="lg:flex">
            <div className="bg-[linear-gradient(180deg,#FF8585,#FF5858)] h-[12rem] w-[1rem] rounded-r-full max-lg:hidden my-auto mr-[2rem]" />
            <EventContent>
              <EventTitle>
                <img
                  src="/2024/images/source-mind.svg"
                  alt="開源精神與社群"
                  className="h-[2rem] w-[2rem]"
                />
                開源精神與社群
              </EventTitle>
              開源精神短講將邀請在開源社群中活躍多年的前輩，期許能夠透過前輩的經驗分享來讓學員更加認識開源（Open
              Source），並鼓勵學員參與往後的社群活動。同時，我們也會邀請許多和資訊相關的社群前來擺攤，藉由互動遊戲、影片欣賞、專人介紹、闖關集點...等方式，讓學員認識所謂的「社群」，並對開源活動有初步了解。
            </EventContent>
            <EventImg src="./images/53111600473_89d572cbcb_c.jpg" />
          </div>
        </EventBox>
        <EventBox>
          <div className="flex mb-[2rem] lg:hidden">
            <div className="bg-[linear-gradient(90deg,#6C5AC1,#C2A5F4)] w-[50%] h-[1rem] mx-auto rounded-b-full" />
          </div>
          <div className="lg:flex">
            <div className="bg-[linear-gradient(180deg,#6C5AC1,#C2A5F4)] h-[12rem] w-[1rem] mx-auto rounded-r-full max-lg:hidden my-auto mr-[2rem]" />
            <EventContent>
              <EventTitle>
                <img
                  src="/2024/images/breakthrough-game.svg"
                  alt="闖關活動"
                  className="h-[2rem] w-[2rem]"
                />
                闖關活動
              </EventTitle>
              在遊戲中融入程式，讓夏令營的學員們可以在團隊合作中，一起享受解謎的樂趣和刺激，同時學習更多元的知識內容。有趣的故事和豐富的解謎，歡迎挑戰！
            </EventContent>
            <EventImg src="./images/53111601698_7e4ba45812_c.jpg" />
          </div>
        </EventBox>
      </div>
    </div>
  );
}
