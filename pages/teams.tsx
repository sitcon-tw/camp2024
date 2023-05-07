import SectionTitle from "../components/SectionTitle";
export default function Teams() {
  return (
    <>
      <SectionTitle id="teams">籌備團隊</SectionTitle>
      <h2 className="text-center text-2xl font-bold -mt-4 mb-4">
        About SITCON
      </h2>
      <div className="container">
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
            <a href="https://groups.google.com/g/sitcon-general">郵件論壇</a> 或{" "}
            <a href="https://sitcon.org/telegram">Telegram 群組</a>{" "}
            一起來規劃討論。
          </p>
        </div>
      </div>
    </>
  );
}
