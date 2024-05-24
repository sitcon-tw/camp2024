import Image from "next/image";

export default function Visual() {
  return (
    <div  className="bg-[#01405D] bg-[url('/2024/visual/visual-background.png')]  bg-center bg-cover h-[65dvh] flex flex-col px-4 pt-20 pb-20">
      <div className="title self-end flex flex-col items-end" >
        <p className="font-bold text-3xl drop-shadow-2xl bg-clip-text">學生計算機年會 <img src="/2024/camp-text.svg" alt="camp" className="inline-block" /></p>
        <p>2024 sitcon camp</p>
      </div>
      <div className="picture self-start">
        <Image src="/2024/visual/cat-and-text.png" alt="cat and text" width={340} height={340}></Image>
      </div>
    </div>
  );
}
