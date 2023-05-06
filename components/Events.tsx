
import SectionTitle from "./SectionTitle";
import TimeTable from "./TimeTable";
function EventTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-bold md:text-center mb-4">{children}</h2>
}
function EventContent({ children }: { children: React.ReactNode }) {
  return <p>{children}</p>
}
function EventBox({ children, border = false }: { children: React.ReactNode, border?: boolean }) {
  return <div className={`py-6 px-10 rounded-xl bg-white bg-opacity-10 relative ${border ? `border-2 border-white` : ``}`}>
    {children}
  </div>
}
function StorySection() {
  return <EventBox border>
    <img
      src="./images/leaf-hat.svg"
      className="absolute
       -top-8 right-4
       md:top-auto md:-bottom-[1px]
       w-8 h-8"
    />
    <EventTitle>故事劇情</EventTitle>
    <EventContent>
      延續 2021 年的故事，在 SITCON 艦艇號成功把小石帶回地球後，目前小石產生的開源力已經足夠讓地球完全恢復，但是人類文明的基礎——通訊系統還沒有成形，需要能操縱開源力的開拓者們重新建構，讓文明可以再次活躍；於是我們準備再次啟航，巡迴地球建立新的文明。
      <br />
      同時，一個前所未見的危機，即將襲擊 SITCON 艦艇與嶄新的人類文明……
      <br /><br />
      這一次，我們能一如既往的突破重重考驗、順利完成任務，讓 2000 多年前的美麗文明再次復甦嗎？
    </EventContent>
  </EventBox>
}
export default function Events() {
  return <div className="container">
    <SectionTitle id="events">課程活動</SectionTitle>
    {/* <TimeTable />
    <div className="mt-12 md:mt-6" /> */}
    <StorySection />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <EventBox>
        <EventTitle>主線課程</EventTitle>
        <EventContent>
          講師們會帶著大家從零開始認識 Python，從基礎語法、各式容器，到 function、套件管理，最終目標是做出屬於自己的 Telegram 聊天機器人！
          在課程中，透過講師的精心準備的課程，穿插多個動手實作練習，並即時搭配多位助教及講師的協助，確保每位學員都能夠得到充分的關注和指導，讓每一位學員都可以跟上課程進度，並且在課程中不斷進步。
        </EventContent>
      </EventBox>
      <EventBox>
        <EventTitle>Hackathon</EventTitle>
        <EventContent>
          黑客松（Hackathon）是「黑客」（Hack；原指早期為電腦系統找尋不完美的地方，或是探索不同的解法，來改善電腦系統）與「馬拉松」（Marathon）的組合字，顧名思義，也就像是程式設計、工程界的馬拉松：由有興趣的一群人在有限的時間內，發揮自己的專長做出一個有特色的專案。
        </EventContent>
      </EventBox>
      <EventBox>
        <EventTitle>廣度課程</EventTitle>
        <EventContent>
          為避免單一的教學方式限制了學員對資訊領域的視野，夏令營在設計時，特別安排了廣度課程。讓學員在學習基礎課程之餘，也能學到資訊領域的其他層面，增加自身資訊技能的廣度。其中，我們邀請到了許多在資訊圈打滾多年的權威人士分享自身經驗，期許能為迷茫中的學員，點亮未來的一盞明燈，找到屬於自己的資訊路。
        </EventContent>
      </EventBox>
      <EventBox>
        <EventTitle>視界咖啡館</EventTitle>
        <EventContent>
          視界咖啡館參考自世界咖啡館（The World Café），在本次夏令營中，我們邀請到各領域及社群知名前輩，將傳統座談會形式改以聊天的樣貌呈現。學員可以與資訊界的名人們近距離互動，期望透過縮短講者與學員之間的距離，講者可以更針對學員給出建議，也鼓勵學員踴躍提問、參與，進而產生良好的雙向交流。
        </EventContent>
      </EventBox>
      <EventBox>
        <EventTitle>資訊技能樹</EventTitle>
        <EventContent>
          資訊領域廣大無邊，你知道他們的相互的關聯嗎? 剛接觸資訊領域，卻被各種專業名詞給轟炸嗎? 資訊技能樹，將資訊領域内重要的詞彙串連在一起，讓你以一個更全面的角度，來理解其中的知識與專業技能。在營期途中，學員將探索和收集散落在各處的知識點數，點亮屬於你獨一無二的技能樹。
        </EventContent>
      </EventBox>
      <EventBox>
        <EventTitle>開源精神與社群</EventTitle>
        <EventContent>
          開源精神短講將邀請在開源社群中活躍多年的前輩，期許能夠透過前輩的經驗分享來讓學員更加認識開源（Open Source），並鼓勵學員參與往後的社群活動。同時，我們也會邀請許多和資訊相關的社群前來擺攤，藉由互動遊戲、影片欣賞、專人介紹、闖關集點...等方式，讓學員認識所謂的「社群」，並對開源活動有初步了解。
        </EventContent>
      </EventBox>
    </div>
  </div >
}