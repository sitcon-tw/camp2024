import SectionTitle from "../components/SectionTitle";
import { EventBox, EventImg, EventContent, EventTitle } from "@/components/Events";
export default function Teams() {
  const members = [
    {
      group: "總召組",
      name: "Arnoldsky",
      md5: "98688144e5d35e16ecdbcadd7d0880dd",
    },
    { group: "總召組", name: "心妤", md5: "1f14cebdf292c2103fb7b96cfb5990b2" },
    { group: "行政組", name: "TC", md5: "9ae8ff2c7e70c5a72b26898f6d2d066f" },
    { group: "行政組", name: "Peggy", md5: "4926b19b5def0d3979f403a9e23d5c68" },
    { group: "行政組", name: "康喔", md5: "018e4b6c4242d321d467d3294b30c240" },
    { group: "行政組", name: "免免", md5: "728867f3f88dc83787ef34dc1de07348" },
    { group: "財務組", name: "小知", md5: "a6b6898ed8d1c570e68b6629158f51fb" },
    { group: "財務組", name: "Leaf", md5: "602818418612b2ea7b2ea810cc60a900" },
    { group: "財務組", name: "Chloe", md5: "7ae6faa48a8f69d086243f93c3a6720a" },
    { group: "課活組", name: "綠葉", md5: "d34b64266f50a6aefbdccaabc15d3dbb" },
    {
      group: "課活組",
      name: "Jayinnn",
      md5: "e4413693c34974fac75a438ffe2cc630",
    },
    { group: "課活組", name: "提姆", md5: "a4999e655448b211af76b6e80854cb5e" },
    {
      group: "課活組",
      name: "Vincent55",
      md5: "cdade6f4871313de8425f02471da9679",
    },
    { group: "課活組", name: "Sean", md5: "598f6906350d4774bb4385f4e5121f66" },
    { group: "課活組", name: "Hugo", md5: "fdade09e4bf1802d2bbedadfbe11a703" },
    {
      group: "課活組",
      name: "Wesley",
      md5: "01540bc1c21d1f9fc3789029fa17b59c",
    },
    { group: "課活組", name: "雞塊", md5: "23813ebc21459db66833ac86a5713ffb" },
    {
      group: "課活組",
      name: "火龍果",
      md5: "da341890bdee17b781c37606072de694",
    },
    { group: "課活組", name: "柚子", md5: "cbd02ef486d0b3e5659b9af17c51077c" },
    {
      group: "課活組",
      name: "百變怪",
      md5: "2e56ca02be3716b82b633e9cbbdddc02",
    },
    { group: "課活組", name: "顏顏", md5: "692b20b089da47c2e83e5c151032caaf" },
    { group: "課活組", name: "火山", md5: "093b3496782564d86dce4914cb410f99" },
    { group: "課活組", name: "大牛", md5: "9e411303f591ac63255629dca6e9a38f" },
    {
      group: "課活組",
      name: "Camille",
      md5: "f6ef351f2c8b012bc346e3209a57bdc7",
    },
    { group: "課活組", name: "小yun", md5: "b7b58c3619604d527a1a028558a1e67c" },
    { group: "庶務組", name: "CPY", md5: "2162367e6dd93f5c602644317af3cfcd" },
    { group: "庶務組", name: "咪路", md5: "0d3eba022a4e0eda175441d9cf1e9061" },
    {
      group: "庶務組",
      name: "__shaun_0124",
      md5: "203ea1d3afdeec0eadec07c55e974f29",
    },
    { group: "庶務組", name: "白兔", md5: "947ce8d237a4a9090aa59866edd77949" },
    { group: "庶務組", name: "Peggy", md5: "4926b19b5def0d3979f403a9e23d5c68" },
    { group: "庶務組", name: "康喔", md5: "018e4b6c4242d321d467d3294b30c240" },
    {
      group: "紀錄組",
      name: "William Mou",
      md5: "9a51023daf8ec97748277899cf9683f7",
    },
    { group: "紀錄組", name: "小松", md5: "713f2def3fec307948c66574b9057995" },
    { group: "紀錄組", name: "家康", md5: "951fb6649a3587f85cdbe63277b6ac14" },
    { group: "紀錄組", name: "Alvin", md5: "bbb80adf99a3200c6d03069f054bb530" },
    {
      group: "隊輔組",
      name: "Justin",
      md5: "1ca72aef2ae3152cdc8b2f898d4bb986",
    },
    {
      group: "隊輔組",
      name: "yc油成",
      md5: "bf5797545199284bfc73b5a372f49f8c",
    },
    { group: "隊輔組", name: "Rong", md5: "284313f3541e3f1cf248f9c06ed17368" },
    { group: "隊輔組", name: "146", md5: "1d74229af9b2a1001c2ac1a9705366b3" },
    { group: "隊輔組", name: "星星", md5: "9a6168159e18086e733a6552e31c611d" },
    { group: "隊輔組", name: "小勝", md5: "5429a75b83c3675e0183927fd63ba810" },
    {
      group: "隊輔組",
      name: "長條貓",
      md5: "9e5aa1c6c977843583d9b02fe77a2e03",
    },
    { group: "隊輔組", name: "御痕", md5: "ffa64e21d87872b52a39187eef5d28eb" },
    { group: "隊輔組", name: "小婕", md5: "7fa5131f96fcef011b7691202a526d41" },
    {
      group: "隊輔組",
      name: "Bentley",
      md5: "345b5ebe962d96480a4f9cd8c574cf8f",
    },
    { group: "隊輔組", name: "南瓜", md5: "6f8832aee90b9aeac21afe23fdd48c8d" },
    { group: "隊輔組", name: "terry", md5: "79f77d3b3f54f3fcc6087489a45bc725" },
    { group: "隊輔組", name: "芷瑜", md5: "aad325111bfc9a29a8eda8dc36b15413" },
    {
      group: "隊輔組",
      name: "Derick",
      md5: "9c4af92f2691a8fe82521d02801c4ab6",
    },
    { group: "隊輔組", name: "Aaron", md5: "b3c249a642b44ccba5724b3add9e5836" },
    { group: "隊輔組", name: "仙草", md5: "9170c8377525befaa6932244812b528d" },
    {
      group: "隊輔組",
      name: "dyes1107",
      md5: "b908fa119f27a122bb37f8e7f685b4a8",
    },
    { group: "隊輔組", name: "Chumy", md5: "c840f49e781c1e3201bb2baf943dd7d1" },
    { group: "隊輔組", name: "Kris", md5: "5167b13f79acf7042f7b12200c0bd245" },
    { group: "隊輔組", name: "佑佑", md5: "3a02649b8c1c9607fc49643e3fb7995f" },
    {
      group: "隊輔組",
      name: "蔡語宸",
      md5: "06ad4892732e0227aed784c753e4909b",
    },
    { group: "編輯組", name: "蓋蓋", md5: "4d0a2e7961d9ff36a2bb04c7036d84c2" },
    { group: "編輯組", name: "柒柒", md5: "316da172360bb856bfa41787b11e5a4e" },
    { group: "行銷組", name: "HM", md5: "5147c378d434178134bc21e52a3ee87a" },
    {
      group: "行銷組",
      name: "Denny Huang",
      md5: "9c08215f31eb6005a25be6521bf47b0a",
    },
    { group: "行銷組", name: "白兔", md5: "947ce8d237a4a9090aa59866edd77949" },
    { group: "行銷組", name: "火山", md5: "093b3496782564d86dce4914cb410f99" },
    {
      group: "資訊組",
      name: "可愛勝勝寶寶",
      md5: "0ec6b0bf31c378645f536452d46adfb0",
    },
    {
      group: "資訊組",
      name: "yc油成",
      md5: "bf5797545199284bfc73b5a372f49f8c",
    },
    { group: "資訊組", name: "Yuan", md5: "7e487b51f2f300989673a7bc749d75f6" },
  ];
  //@ts-ignore
  const groups = [...new Set(members.map((x) => x.group))];
  return (
    <>
      <div className="container">
        <div>
          <SectionTitle id="teams">籌備團隊</SectionTitle>
          <h2 className="text-center text-2xl font-bold -mt-4 mb-4">
            About SITCON
          </h2>
          <div>
            <h2 className="text-2xl font-bold mb-2">SITCON 學生計算機年會</h2>
            <p>
              SITCON
              學生計算機年會是由學生自發舉辦，投身學生資訊教育與推廣開源精神的社群，也是一個由學生主辦、學生擔任講者、以學生為主軸的資訊研討會，給學生們一個發表交流技術的舞台。
              <br />
              <br />
              除了技術研討之外，還有許多從學生角度出發的經驗分享、專題研究成果或探討學生相關議題等等議程。
              我們也曾舉辦黑客松、工作坊，和各地學校社團舉辦聯合講座等等。
              <br />
              <br />
              對我們所做的事情感興趣？ 歡迎加入{" "}
              <a
                href="https://groups.google.com/g/sitcon-general"
                className="link"
              >
                郵件論壇
              </a>{" "}
              或{" "}
              <a href="https://sitcon.org/telegram" className="link">
                Telegram 群組
              </a>{" "}
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
                也舉辦定期聚，將全台灣各地對於資訊科技相關領域有興趣的學生們串聯起來，透過彼此共享、交流來切磋精進，砥礪自主自學的風氣。
              </p>
            </EventContent>
            <EventImg src="../images/16009925241_a20363623a_c.jpg" />
          </EventBox>
        </div>
        <div>
          <SectionTitle id="member">夏令營籌備團隊</SectionTitle>

          {groups.map((name, index) => {
            return (
              <>
                <h2 className="text-2xl font-bold mt-8 mb-4">{name}</h2>
                <div
                  className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-4"
                  key={index}
                >
                  {members
                    .filter((member) => member.group === name)
                    .map((member, index) => (
                      <div className="flex flex-col items-center" key={index}>
                        <img
                          src={`https://secure.gravatar.com/avatar/${member.md5}?s=512&d=https://sitcon.camp/2023/images/default_avatar.jpg`}
                          className="h-24 inline rounded-full"
                        />
                        <div className="text-center mt-2 opacity-80">
                          {member.name}
                        </div>
                      </div>
                    ))}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
