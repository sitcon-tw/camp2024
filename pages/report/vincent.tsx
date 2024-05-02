import SectionTitle from "../../components/SectionTitle";
import Link from "next/link";
export default function Records() {
  return (
    <>
      <SectionTitle id="report">Vincent</SectionTitle>
      <h2 className="mb-4 -mt-4 text-2xl font-bold text-center">學員心得</h2>
      <div className="container prose prose-invert lg:prose-xl">
        <p>在參加 SITCON 夏令營前，我只知道資訊中的演算法競賽，參加後，我知道資安、專案開發、人工智慧…等領域，甚至認識到了在這些領域前段的社群朋友們。</p>
        <p>以我自己的經驗，我參加了 2019 年的 SITCON 夏令營。在營期前，視界咖啡館與黑客松的活動令我十分感興趣。營期後，視界咖啡館讓我見到了許多資訊領域內的大神，更能聽他們的故事，並詢問意見，在 SITCON 夏令營是我第一次參加黑客松，也透過這次的活動，令我了解到了合作開發與短時間熬夜，完成開發並發表的成就感，兩者成為了難以忘懷的回憶。</p>
        <p>今年剛從高中畢業，高三上也以特殊選才這個管道錄取了六間國立大學資工系，最後選擇成大資工作為我的大學，也因為有了參與 SITCON 夏令營的經驗，我接觸了資訊中許多不同領域，更認識到了許多朋友，增廣我在資訊領域中的見聞！</p>
        <Link href="/#reports"
          className="px-4 py-2 bg-[#01405D] hover:bg-[#013249] rounded-full inline-flex gap-2 items-center leading-4 no-underline text-base"
        ><i className='text-xl bx bx-chevron-left' ></i> 返回首頁</Link>
      </div>
    </>
  );
}