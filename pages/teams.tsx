import SectionTitle from "../components/SectionTitle";
function EventTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-center lg:text-left text-2xl font-bold mb-4">
      {children}
    </h2>
  );
}
function EventContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
function EventBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`py-6 px-6 lg:py-5 lg:px-6 rounded-xl bg-black bg-opacity-10 border border-black border-opacity-20 relative mb-4 lg:flex lg:gap-8 lg:items-center`}
    >
      {children}
    </div>
  );
}
function EventImg({ src }: { src: string }) {
  return (
    <img src={src} className="w-full lg:w-80 rounded shadow-xl mt-4 lg:mt-0" />
  );
}
export default function Teams() {
  return (
    <>
      <div className="container">
        <div>
          <SectionTitle id="teams">籌備團隊</SectionTitle>
          <h2 className="text-center text-2xl font-bold -mt-4 mb-4">
            About SITCON
          </h2>
          <div>
            <h2 className="text-2xl font-bold">SITCON 學生計算機年會</h2>
            <p>
              SITCON
              學生計算機年會是由學生自發舉辦，投身學生資訊教育與推廣開源精神的社群，也是一個由學生主辦、學生擔任講者、以學生為主軸的資訊研討會，給學生們一個發表交流技術的舞台。
            </p>
            <p>
              除了技術研討之外，還有許多從學生角度出發的經驗分享、專題研究成果或探討學生相關議題等等議程。
              我們也曾舉辦黑客松、工作坊，和各地學校社團舉辦聯合講座等等。
            </p>
            <p>
              對我們所做的事情感興趣？ 歡迎加入{" "}
              <a href="https://groups.google.com/g/sitcon-general">郵件論壇</a>{" "}
              或 <a href="https://sitcon.org/telegram">Telegram 群組</a>{" "}
              一起來規劃討論。
            </p>
          </div>
        </div>
        <div>
          <SectionTitle id="history">我們舉辦過的活動</SectionTitle>
          <EventBox>
            <EventContent>
              <EventTitle>SITCON 年會</EventTitle>
              <p>
                SITCON
                年會是由一群熱愛分享、熱愛資訊領域的學生自主籌辦的活動，致力於資訊教育的普及與推廣。
              </p>
              <p>
                藉由舉辦多軌議程、議程、論壇的交流與討論，期望將資訊領域的知識與不同領域背景人才交換新知！
              </p>
            </EventContent>
            <EventImg src="../images/sitcon.jpg" />
          </EventBox>
          <EventBox>
            <EventContent>
              <EventTitle>Hour of Code</EventTitle>
              <p>
                Hour of Code
                是個一小時介紹計算機科學的活動，希望在揭開程式設計的神秘面紗的同時，說明它是任何人都可以學習的基礎知識，並期望擴展人們在計算機科學領域的參與。
              </p>
            </EventContent>
            <EventImg src="../images/50694221331_e465f84efc_k.jpg" />
          </EventBox>
          <EventBox>
            <EventContent>
              <EventTitle>SITCON 夏令營</EventTitle>
              <p>
                SITCON
                團隊認為將資訊教育向下扎根、為對資訊科學領域有興趣的學生提供一個親切而良好的機會入門，並撒播開源種子，是一件相當重要且值得去做的事情。
              </p>
              <p>
                透過主線課程、社群闖關、視界咖啡館、黑客松等活動，讓學員充分吸收新知、動手實作、尋找自己的愛好及興趣，進而加入我們一起推動
                Open Source。
              </p>
            </EventContent>
            <EventImg src="../images/51260350196_1e24756478_5k.jpg" />
          </EventBox>
          <EventBox>
            <EventContent>
              <EventTitle>SITCON 定期聚</EventTitle>
              <p>
                除了辦理大型活動外，SITCON
                也舉辦定期聚，將全台灣各地對於資訊科技相關領域有興趣的學生們串聯起來，透過彼此共享、交流來切磋精進，砥礪自主自學的風氣
              </p>
            </EventContent>
            <EventImg src="../images/16009925241_a20363623a_c.jpg" />
          </EventBox>
        </div>
      </div>
    </>
  );
}
