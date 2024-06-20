import SectionTitle from "../components/SectionTitle";
import { motion } from "framer-motion";
import members from "@/public/members.json";
import {
  EventBox,
  EventImg,
  EventContent,
  EventTitle,
} from "@/components/Events";
import { useState } from "react";

function MemberCard({ name, sha256 }: { name: string; sha256: string }) {
  const [clickCount, setClickCount] = useState(0);
  const [rotation, setRotation] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
    if (clickCount === 6) {
      setRotation(rotation + 360);
    }
  };

  return (
    <div
      className="flex flex-col items-center"
      onClick={handleClick}
    >
      <motion.img
        drag
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        whileTap={{ scale: 0.8 }}
        whileDrag={{ scale: 0.8 }}
        dragConstraints={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        dragElastic={0.05}
        src={`https://secure.gravatar.com/avatar/${sha256}?s=512&d=https://sitcon.camp/2024/images/default_avatar.jpg`}
        className="inline h-24 rounded-full cursor-grab active:cursor-grabbing"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-2 text-center opacity-80"
      >
        {clickCount >= 8 ? (
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            🥞{" "}
          </motion.span>
        ) : (
          ""
        )}
        {name}
        {clickCount >= 8 ? (
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {" "}
            🥞
          </motion.span>
        ) : (
          ""
        )}
      </motion.div>
    </div>
  );
}

export default function Teams() {
  //@ts-ignore
  const groups = [...new Set(members.map((x) => x.group))];
  return (
    <>
      <div className="bg-[url('/2024/images/coc-bg.svg')] pt-[4rem] pb-[5rem] bg-cover w-full px-[2rem]">
        <div className="max-w-[1024px] mx-auto">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-3xl font-bold text-[#FFF] text-center pt-[4rem]"
            id={"coc"}
          >
            籌備團隊
          </motion.h1>
          <h2 className="mb-[3rem] text-xl text-center">
            About SITCON
          </h2>
          <div className="px-6">
            <h2 className="mb-2 text-xl font-bold text-center">SITCON 學生計算機年會</h2>
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
        <div className="mt-[5rem] max-w-[1024px] mx-auto">
          <SectionTitle id="history">我們舉辦過的活動</SectionTitle>
          <EventBox>
            <div className="flex mb-[2rem] lg:hidden">
              <div className="bg-[linear-gradient(90deg,#B8FD90,#07A920)] w-[50%] h-[1rem] mx-auto rounded-b-full" />
            </div>
            <div className="lg:flex">
              <div className="bg-[linear-gradient(180deg,#B8FD90,#07A920)] h-[10rem] w-[1rem] mx-auto rounded-r-full max-lg:hidden my-auto mr-[2rem]" />
              <EventContent>
                <EventTitle>
                  SITCON 年會
                </EventTitle>
                SITCON
                年會是由一群熱愛分享、熱愛資訊領域的學生自主籌辦的活動，致力於資訊教育的普及與推廣。
                藉由舉辦多軌議程、議程、論壇的交流與討論，期望將資訊領域的知識與不同領域背景人才交換新知！
              </EventContent>
              <EventImg src="../images/sitcon.jpg" />
            </div>
          </EventBox>
          <EventBox>
            <div className="flex mb-[2rem] lg:hidden">
              <div className="bg-[linear-gradient(90deg,#C68BFA,#3C07AA)] w-[50%] h-[1rem] mx-auto rounded-b-full" />
            </div>
            <div className="lg:flex">
              <div className="bg-[linear-gradient(180deg,#C68BFA,#3C07AA)] h-[10rem] w-[1rem] mx-auto rounded-r-full max-lg:hidden my-auto mr-[2rem]" />
              <EventContent>
                <EventTitle>
                  Hour of Code
                </EventTitle>
                Hour of Code
                是個一小時介紹計算機科學的活動，希望在揭開程式設計的神秘面紗的同時，說明它是任何人都可以學習的基礎知識，並期望擴展人們在計算機科學領域的參與。
              </EventContent>
              <EventImg src="../images/50694221331_e465f84efc_k.jpg" />
            </div>
          </EventBox>
          {/* <EventBox>
            <EventContent>
              <EventTitle><p className="mt-5">SITCON 夏令營</p></EventTitle>
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
          </EventBox> */}
          <EventBox>
            <div className="flex mb-[2rem] lg:hidden">
              <div className="bg-[linear-gradient(90deg,#FFDF8F,#EAA826)] w-[50%] h-[1rem] mx-auto rounded-b-full" />
            </div>
            <div className="lg:flex">
              <div className="bg-[linear-gradient(180deg,#FFDF8F,#EAA826)] h-[10rem] w-[1rem] mx-auto rounded-r-full max-lg:hidden my-auto mr-[2rem]" />
              <EventContent>
                <EventTitle>
                  SITCON 夏令營
                </EventTitle>
                SITCON
                團隊認為將資訊教育向下扎根、為對資訊科學領域有興趣的學生提供一個親切而良好的機會入門，並撒播開源種子，是一件相當重要且值得去做的事情。
                <br />
                <br />
                透過主線課程、社群闖關、視界咖啡館、黑客松等活動，讓學員充分吸收新知、動手實作、尋找自己的愛好及興趣，進而加入我們一起推動
                Open Source。
              </EventContent>
              <EventImg src="../images/sitcon.jpg" />
            </div>
          </EventBox>
          <EventBox>
            <div className="flex mb-[2rem] lg:hidden">
              <div className="bg-[linear-gradient(90deg,#FF9191,#FF5454)] w-[50%] h-[1rem] mx-auto rounded-b-full" />
            </div>
            <div className="lg:flex">
              <div className="bg-[linear-gradient(180deg,#FF9191,#FF5454)] h-[10rem] w-[1rem] mx-auto rounded-r-full max-lg:hidden my-auto mr-[2rem]" />
              <EventContent>
                <EventTitle>
                  SITCON 定期聚
                </EventTitle>
                除了辦理大型活動外，SITCON
                也舉辦定期聚，將全台灣各地對於資訊科技相關領域有興趣的學生們串聯起來，透過彼此共享、交流來切磋精進，砥礪自主自學的風氣。
              </EventContent>
              <EventImg src="../images/16009925241_a20363623a_c.jpg" />
            </div>
          </EventBox>
        </div>
        <div className="max-w-[1024px] mx-auto mt-[5rem]">
          <SectionTitle id="member"><p className="mt-5">夏令營籌備團隊</p></SectionTitle>

          {groups.map((name, index) => {
            return (
              <>
                <h2 className="mt-12 mb-8 text-2xl font-bold">{name}</h2>
                <div
                  className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-4"
                  key={index}
                >
                  {members
                    .filter((member) => member.group === name)
                    .map((member, index) => (
                      <MemberCard
                        name={member.name}
                        sha256={member.sha256}
                        key={index}
                      />
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
