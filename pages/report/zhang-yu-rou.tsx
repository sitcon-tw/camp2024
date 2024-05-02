

import SectionTitle from "../../components/SectionTitle";
import Link from "next/link";
export default function Records() {
  return (
    <>
      <SectionTitle id="report">張語柔</SectionTitle>
      <h2 className="mb-4 -mt-4 text-2xl font-bold text-center">學員心得</h2>
      <div className="container prose prose-invert lg:prose-xl">
        <p>
          SITCON Camp 是我第一次參加資訊相關的夏令營。在接觸到活動資訊時，我被黑客松及視界咖啡館吸引，因此報名了這次夏令營。
        </p>
        <p>
          營期時，能感受到工作人員對所有活動都非常用心。在基本課程時，講者及助教會不斷關心大家的學習情況並給予指導；在黑客松討論時，也都會給予對專題方向的引導及建議。
        </p>
        <p>
          其中最讓我驚艷的是特殊活動—奪寶大作戰，原本以為只是小小的串場活動，但每個關卡的設計都相當用心，需要運用各式各樣的資訊技能來破解。
        </p>
        <p>
          參加 SITCON Camp 後，讓我開始對其他相關的資訊社群感興趣，因此認識許多社群朋友，目前也正在積極參與各項活動的籌備！
        </p>
        <Link href="/#reports"
          className="px-4 py-2 bg-[#01405D] hover:bg-[#013249] rounded-full inline-flex gap-2 items-center leading-4 no-underline text-base"
        ><i className='text-xl bx bx-chevron-left' ></i> 返回首頁</Link>
      </div>
    </>
  );
}