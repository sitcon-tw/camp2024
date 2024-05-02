

import SectionTitle from "../../components/SectionTitle";
import Link from "next/link";
export default function Records() {
  return (
    <>
      <SectionTitle id="report">陳品妤</SectionTitle>
      <h2 className="mb-4 -mt-4 text-2xl font-bold text-center">學員心得</h2>
      <div className="container prose prose-invert lg:prose-xl">
        <p>
          Camp 的課程很充實能學到很多東西，不論是手把手教你寫 Telegram Bot，又或是 Arduino 等，都是值得嘗試看看的的東西。
        </p>
        <p>
          黑客松的部分則是一個有點痛苦（因為想不到能幹嘛然後程式一直出事之類的）、很燒腦袋但很好玩的東西，要從 0 開始生出一個專案最後可以成功使用，但成功時會很有成就感畢竟全程都是自己來、沒有人指導你，希望大家可以享受在 Camp 的日子✨
        </p>
        <Link href="/#reports"
          className="px-4 py-2 bg-[#01405D] hover:bg-[#013249] rounded-full inline-flex gap-2 items-center leading-4 no-underline text-base"
        ><i className='text-xl bx bx-chevron-left' ></i> 返回首頁</Link>
      </div>
    </>
  );
}