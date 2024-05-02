import SectionTitle from "../../components/SectionTitle";
import Link from "next/link";
export default function Records() {
  return (
    <div className="">
      <SectionTitle id="report">葉子琳</SectionTitle>
      <h2 className="mb-4 -mt-4 text-2xl font-bold text-center">學員心得</h2>
      <div className="container prose prose-invert lg:prose-xl">
        <p>
          在 2023 年的 Camp 中我學到了蠻多平常體驗不到的！
        </p>
        <p>
          第一次體驗黑客松，跟來自各種不同年齡層的人一起合作寫專案！
        </p>
        <p>
          雖然每天都爆肝，但是最後寫出的東西真的是超級有成就感～
        </p>
        <p>
          隊輔也都超級細心，會來詢問有沒有哪裡聽不懂，擔心我們沒有跟上進度，課程上也學到了蠻多以前沒學過的，整個收穫滿滿！
        </p>
        <Link href="/#reports"
          className="px-4 py-2 bg-[#01405D] hover:bg-[#013249] rounded-full inline-flex gap-2 items-center leading-4 no-underline text-base"
        ><i className='text-xl bx bx-chevron-left' ></i> 返回首頁</Link>
      </div>
    </div>
  );
}