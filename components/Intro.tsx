import { motion } from "framer-motion";
export default function Intro() {
  return (
    <>
      <div className="bg-[#0C1420] container p-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-medium text-sm"
        >
          樂趣之餘，不忘學習
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-md font-bold"
        >
          由資訊社群所打造，超高知識含量的夏令營
        </motion.h1>
        <div className="flex flex-col items-center justify-center gap-8 mt-8 lg:flex-row">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xs font-thin tracking-wider leading-relaxed"
          >
            有鑑於資訊領域逐漸成為科技時代的重要學門，社群與開源精神亦持續抬頭，SITCON 團隊認為將資訊教育向下扎根，為在資訊科學領域有興趣的學生提供一個親切而良好的機會入門，並播灑開源種子，是一件相當重要且值得去做的事情。
            <br />
            <br />
            2014 年至今，SITCON 夏令營已將邁入第八屆，在此之前營隊的課程內容涵蓋開放原始碼、資訊安全、Maker、Python、後端的 Node.js、前端的資料爬蟲、視覺化、Telegram bot 等。另外更有社群闖關、視界咖啡館、黑客松等活動，讓學員充分吸收新知、動手實作、尋找自己的愛好及興趣，進而加入我們一起推動 Open Source。
            <br />
            <br />
            今年 SITCON 夏令營將於陽明交通大學光復校區舉辦，以「拉麵加點 source，麵向開源界」為主軸。正如同拉麵的麵條和配料可以隨個人喜好自由搭配組合，在程式設計中也可以讓每個人根據自己的想法和需求，選用不同的程式模組和元件，打造獨一無二的作品。透過兩者結合，傳達開源及資訊的無限可能性，在動手實作的過程中，激發創意靈感，發掘個人興趣所在，進而體會開源的樂趣與價值。
          </motion.p>
          <img
            src="/2024/images/48711198528_e7ac02a80b_k.jpg"
            className="object-cover w-full rounded-3xl shadow lg:w-80 lg:rotate-3"
            alt="SITCON Camp Image"
          />
        </div>
      </div>
    </>
  );
}
