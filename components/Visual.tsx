export default function Visual() {
  return (
    <div className="bg-[#01405D] bg-[url('/2024/visual/visual-background.png')] bg-center bg-cover h-[65dvh] flex flex-col px-4 pt-20 pb-24 items-stretch box-border relative">
      <div className="title self-end flex flex-col items-end">
        <p className="font-bold text-3xl drop-shadow-2xl bg-clip-text">
          學生計算機年會{" "}
          <img src="/2024/camp-text.svg" alt="camp" className="inline-block" />
        </p>
        <p>2024 sitcon camp</p>
      </div>
      <div className="self-start flex-grow box-border overflow-hidden">
        <img
          src="/2024/visual/cat-and-text.png"
          alt="cat and text"
          className="max-h-full w-auto"
        />
      </div>
      <div className="absolute -bottom-[5.5rem] left-[50vw] -translate-x-1/2 w-[calc(100%-4rem)] ">
        <div className="bg-gradient-to-br from-[#2E4B7680] to-[#060A10] backdrop-blur-sm relative h-[11rem] min-w-[20rem] w-[45dvw] rounded-tr-[4rem] rounded-l-2xl rounded-br-2xl mx-auto">
          <div className="w-full h-full">
            <div className="flex flex-col p-4">
              <div className="flex gap-2 items-center">
                <img
                  src="/2024/visual/clock-for-activity-date.png"
                  alt="clock"
                  className="w-6 h-6"
                />
                <p className="font-medium text-sm text-[#EAD377] -translate-y-1">
                  活動日期
                </p>
              </div>
              <div className=" pl-8 font-medium text-xl">07/17-07/21</div>
            </div>
            <div className="flex flex-col p-4">
              <div className="flex gap-2 items-center">
                <img
                  src="/2024/visual/map-marker-for-location.png"
                  alt="clock"
                  className="w-6 h-6"
                />
                <p className="font-medium text-sm text-[#EAD377] -translate-y-1">
                  活動地點
                </p>
              </div>
              <div className=" pl-8 font-medium text-xl">
                陽明交通大學光復校區
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
