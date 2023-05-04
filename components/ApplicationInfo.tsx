
import SectionTitle from "./SectionTitle";
function PriceBox({ type, price }: { type: string, price: number }) {
  return (
    <div className="border border-white rounded-xl flex p-4 mb-2 justify-between items-center font-bold text-xl flex-1">
      <div>{type}</div>
      <div>
        <span className="text-3xl mr-2">{price.toLocaleString()}</span>
        <span>元/人</span>
      </div>
    </div>
  )
}
export default function ApplicationInfo() {
  return <div className="container">
    <SectionTitle id="application-info">報名資訊</SectionTitle>
    <div className="flex gap-8 flex-col lg:flex-row">
      <div className="w-full">
        <h2 className="text-2xl font-bold lg:text-center">報名時間</h2>
        <h2 className="text-4xl font-bold mt-8">即日起 ~ 00/00</h2>
      </div>
      <div className="w-full">
        <h2 className="text-2xl font-bold lg:text-center">報名費用</h2>
        <div className="mt-4 lg:mt-8 flex gap-3 flex-col sm:flex-row lg:flex-col">
          <PriceBox type="個人費用" price={8800} />
          <PriceBox type="團體費用" price={7600} />
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center mt-8">
      <a href="#" className="bg-[#7A44AF] bg-opacity-80 backdrop-blur-xl rounded-full py-4 px-8 shadow-2xl text-2xl font-bold">
        立即報名
      </a>
    </div>
    <div className="mt-8 p-4 lg:p-6 bg-white bg-opacity-10 rounded-xl lg:flex gap-4 lg:gap-6 items-center">
      <div className="text-2xl font-bold min-w-max">注意事項</div>
      <div className="mt-4 lg:mt-0 lg:border-l lg:border-white lg:pl-6">
        <ol className="list-decimal list-inside leading-7">
          <li>三人同時報名，視為團體報名，每團以三人為限。</li>
          <li>本次夏令營預計招收學員 60 名，我們會針對報名資料做簡易審查，非先報先贏。</li>
          <li>正取學員名單將於 06/11 公佈，屆時請關注 SITCON 相關社群媒體。</li>
          <li>正取學員需完成報名費繳交，始完成報名程序；另設有補助名額，請詳閱 <a href="https://drive.google.com/file/d/1lDPRoSkzFcM0FI5peNmJbDJA_NvWJZ5h/view" target="_blank" className="link">補助辦法</a>。</li>
          <li>關於退費事宜，請見 <a href="https://drive.google.com/file/d/1Cn78OIo5xOYwsL7eti4SmzNjZxt5bhG_/view" target="_blank" className="link">退費說明文件</a>。</li>
        </ol>
      </div>
    </div>
  </div>
}