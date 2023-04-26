function AboutSection({ className, children }: { children: React.ReactNode, className?: string }) {
  return (
    <section className={`mt-16 lg:flex lg:items-start gap-8 relative ${className}`}>
      {children}
    </section>
  )
}
function AboutTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold my-4 pb-2 lg:min-w-max lg:mt-0 border-b border-white lg:sticky lg:top-40">{children}</h2>
  )
}
function AboutContent({ children }: { children: React.ReactNode }) {
  return (
    <p>{children}</p>
  )
}
export default function About() {
  return <div className="container">
    <AboutSection>
      <AboutTitle>
        關於 CAMP
      </AboutTitle>
      <AboutContent>
        有鑑於資訊領域逐漸成為科技時代的重要學門，社群與開源精神亦持續抬頭，SITCON 團隊認為將資訊教育向下扎根，為在資訊科學領域有興趣的學生提供一個親切而良好的機會入門，並播灑開源種子，是一件相當重要且值得去做的事情。
        <br />
        <br />
        2014 年至今，SITCON 夏令營已將邁入第六屆，在此之前課程內容涵蓋開放原始碼、資訊安全、Maker、Python、後端的 Node.js、前端的資料爬蟲、視覺化、Telegram bot 等。另外更有社群闖關、視界咖啡館、黑客松等活動，讓學員充分吸收新知、動手實作、尋找自己的愛好及興趣，進而加入我們一起推動 Open Source。
        <br />
        <br />
        2023 年度，SITCON 夏令營將於陽明交通大學光復校區舉辦，以「開源文明，源力擴張」為主軸，帶領各位一同進入開源宇宙。傳承歷屆夏令營的概念，今年的夏令營將會有從基礎 Python 程式語言到做出自己的聊天機器人的實作課程，介紹各資訊領域議題的廣度課程，並透過社群闖關讓學員更加了解各個社群的理念與文化。開源宇宙也將更進一步把故事和營隊整合，配合豐富的課程、座談會及社群闖關，絕對能讓學員擁有截然不同的營隊體驗。
      </AboutContent>
    </AboutSection>
    <AboutSection className="lg:flex-row-reverse">
      <AboutTitle>
        關於 SITCON
      </AboutTitle>
      <AboutContent>
        SITCON 學生計算機年會是由學生自發舉辦，投身學生資訊教育與推廣開源精神的社群， 也是一個由學生主辦、學生擔任講者、以學生為主軸的資訊研討會，給學生們一個發表交流技術的舞台。 除了技術研討之外，還有許多從學生角度出發的經驗分享、專題研究成果或探討學生相關議題等等議程。
        我們也曾舉辦黑客松、工作坊，和各地學校社團舉辦聯合講座等等。
      </AboutContent>
    </AboutSection>
    <AboutSection>
      <AboutTitle>
        行為準則
        <br />
        Code of Conduct
      </AboutTitle>
      <AboutContent>
        SITCON 歡迎不同身分、來自不同背景的與會者，也非常鼓勵女性、性少數與多元背景的參與者。
        為了讓大家都能愉快的參加 SITCON，我們要求所有參與者閱讀社群的的行為準則（Code of Conduct），共同創造一個友善的環境。
      </AboutContent>
    </AboutSection>
  </div>
}