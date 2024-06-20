export default function ApplicationInfo() {
  return (
    <>
      <div className="bg-[linear-gradient(180deg,#E2E6EF_0%,#C4CFE0_100%)] -mt-5 rounded-t-[2rem] lg:rounded-b-[2rem] px-[2rem] pb-[7rem] lg:pb-[7rem]">
        <div className="flex py-8">
          <div className="flex items-center gap-2 mx-auto text-3xl font-bold text-center">
            <span><img src="/2024/images/sitcon.svg" height="2rem" width="auto" alt="sitcon1" /></span>
            <h1 className="text-2xl text-center text-[#1E3D6C]">報名資訊</h1>
            <span><img src="/2024/images/sitcon.svg" height="2rem" width="auto" alt="sitcon2" /></span>
          </div>
        </div>
        <div className="flex text-[#1E3D6C] border border-[#1E3D6C] rounded-full py-1 pr-2 pl-4 mb-[4rem] max-w-[20rem] mx-auto">
          <p className="flex-1 my-auto">將 CAMP 重要日程加入行事曆</p>
          <a href="/2024/events.ics">
            <img src="/2024/images/event-add.svg" alt="event-add" className="flex-none my-auto" />
          </a>
        </div>
        <div className="lg:flex lg:max-w-[64rem] mx-auto gap-[2rem]">
          <div className="bg-transparent pt-[2.5rem] h-[18rem] w-[20rem] mb-[0.1rem] mx-auto relative">
            <div className="bg-white rounded-tl-[5rem] rounded-[1rem] w-full h-[13rem] flex shadow-md shadow-gray-500">
              <div className="flex flex-col gap-4 pt-[2rem] m-auto">
                <h1 className="text-lg text-[#626262] font-bold mx-auto">
                  活動日期
                </h1>
                <p className="text-[#1E3D6C] text-3xl font-bold mx-auto text-center">
                  07/17 - 07/21
                </p>
              </div>
            </div>
            <div className="absolute top-0 flex w-full">
              <div className="mx-auto bg-[linear-gradient(135deg,#69BEFA,#7865C8)] rotate-45 w-[5rem] h-[5rem] rounded-lg flex shadow-md shadow-gray-500">
                <img src="/2024/images/calender.svg" alt="calender" className="mx-auto my-auto -rotate-45 w-11 h-11" />
              </div>
            </div>
          </div>
          <div className="bg-transparent pt-[2.5rem] h-[18rem] w-[20rem] mb-[0.1rem] mx-auto relative">
            <div className="bg-white rounded-tl-[5rem] rounded-[1rem] w-full h-[13rem] flex shadow-md shadow-gray-500">
              <div className="flex flex-col gap-4 pt-[2rem] m-auto">
                <h1 className="text-lg text-[#626262] font-bold mx-auto">
                  報名時間
                </h1>
                <p className="text-[#1E3D6C] text-3xl font-bold mx-auto text-center">
                  即日起 - 05/31
                </p>
              </div>
            </div>
            <div className="absolute top-0 flex w-full">
              <div className="mx-auto bg-[linear-gradient(135deg,#69BEFA,#7865C8)] rotate-45 w-[5rem] h-[5rem] rounded-lg flex shadow-md shadow-gray-500">
                <img src="/2024/images/clock.svg" alt="clock" className="mx-auto my-auto -rotate-45 w-11 h-11" />
              </div>
            </div>
          </div>
          <div className="bg-transparent pt-[2.5rem] h-[18rem] w-[20rem] mb-[2rem] mx-auto relative">
            <div className="bg-white rounded-tl-[5rem] rounded-[1rem] w-full h-[13rem] flex shadow-md shadow-gray-500">
              <div className="flex flex-col gap-4 pt-[2rem] m-auto">
                <h1 className="text-lg text-[#626262] font-bold mx-auto">
                  活動地點
                </h1>
                <p className="text-[#1E3D6C] text-3xl font-bold mx-auto text-center">
                  陽明交通大學
                  <br />
                  光復校區
                </p>
              </div>
            </div>
            <div className="absolute top-0 flex w-full">
              <div className="mx-auto bg-[linear-gradient(135deg,#69BEFA,#7865C8)] rotate-45 w-[5rem] h-[5rem] rounded-lg flex shadow-md shadow-gray-500">
                <img src="/2024/images/location.svg" alt="location" className="mx-auto my-auto -rotate-45 w-11 h-11" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-auto lg:hidden gap-[5rem] mb-[4rem]">
          <div className="flex flex-col bg-white rounded-[3rem] shadow-md shadow-gray-500 h-[12rem] w-[20rem] mx-auto relative pt-[1rem]">
            <img src={"/2024/images/mobile-personal.svg"} alt="group" className="w-[4rem] h-auto mx-auto" />
            <p className="mx-auto text-4xl font-bold text-center text-black mt-[1rem]">$8800</p>
            <p className="mx-auto text-base font-bold text-center text-black opacity-40">NTD/人</p>
            <div className="absolute w-full h-[3rem] bg-[#6DACF0] bottom-0 rounded-b-full flex">
              <p className="mx-auto my-auto text-lg font-bold text-center text-white">報名截止</p>
            </div>
          </div>
          <div className="flex flex-col bg-white rounded-[3rem] shadow-md shadow-gray-500 h-[12rem] w-[20rem] mx-auto relative pt-[1rem]">
            <img src={"/2024/images/mobile-group.svg"} alt="group" className="w-[4.5rem] h-auto mx-auto" />
            <p className="mx-auto text-4xl font-bold text-center text-black mt-[1rem]">$7800</p>
            <p className="mx-auto text-base font-bold text-center text-black opacity-40">NTD/人</p>
            <div className="absolute w-full h-[3rem] bg-[#6DACF0] bottom-0 rounded-b-full flex">
              <p className="mx-auto my-auto text-lg font-bold text-center text-white">報名截止</p>
            </div>
          </div>
        </div>
        <div className="relative flex max-lg:hidden w-full max-w-[64rem] h-[18rem] mx-auto gap-8">
          <div className="relative flex-1 w-auto h-full">
            <img src={"/2024/images/application-lg-right.svg"} alt="application-rule" className="absolute left-auto right-auto w-auto h-auto" />
            <div className="absolute w-full h-full p-4">
              <div className="bg-gradient-to-b from-[#78C2FF] to-[#9C7DFF] rounded-full p-[0.1rem] w-[4rem] h-[2rem]">
                <p className="bg-white text-sm font-medium text-[#1E3D6C] rounded-full w-full h-full text-center py-[0.3rem]">個人</p>
              </div>
              <div className="flex flex-col w-full h-full gap-2 pr-[3rem]">
                <img src={"/2024/images/personal.svg"} alt="group" className="w-[6rem] h-[6rem] mx-auto" />
                <p className="mx-auto text-4xl font-bold text-center text-black">$8800</p>
                <p className="mx-auto text-base font-bold text-center text-black opacity-40">NTD/人</p>
              </div>
            </div>
          </div>
          <div className="mx-auto bg-transparent z-[9999999] w-full h-auto flex absolute bottom-4 px-10" >
            <div className="flex w-auto mx-auto">
              <a
                className="bg-gradient-to-b from-[#78C2FF] to-[#9C7DFF] rounded-full p-1 opacity-60 cursor-not-allowed"
                // href="https://sitcon.kktix.cc/events/sitcon-camp2024"
                target="_blank"
              >
                <p className="bg-white text-2xl font-medium text-[#1E3D6C] px-10 py-3 rounded-full h-full">報名截止</p>
              </a>
            </div>
          </div>
          <div className="relative flex-1 w-auto h-full">
            <img src={"/2024/images/application-lg-left.svg"} alt="application-rule" className="absolute w-auto h-auto mx-auto" />
            <div className="absolute w-full h-full p-4">
              <div className="bg-gradient-to-b from-[#78C2FF] to-[#9C7DFF] rounded-full p-[0.1rem] w-[4rem] h-[2rem]">
                <p className="bg-white text-sm font-medium text-[#1E3D6C] rounded-full w-full h-full text-center py-[0.3rem]">團體</p>
              </div>
              <div className="flex flex-col w-full h-full gap-2 pl-[3rem]">
                <img src={"/2024/images/group.svg"} alt="group" className="w-[6rem] h-[6rem] mx-auto" />
                <p className="mx-auto text-4xl font-bold text-center text-black">$7800</p>
                <p className="mx-auto text-base font-bold text-center text-black opacity-40">NTD/人</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:hidden mb-[2rem]">
          <div className="flex mx-auto">
            <a
              className="bg-gradient-to-b from-[#78C2FF] to-[#9C7DFF] rounded-full p-1 opacity-60 cursor-not-allowed"
              // href="https://sitcon.kktix.cc/events/sitcon-camp2024"
              target="_blank"
            >
              <p className="bg-white text-2xl font-medium text-[#1E3D6C] px-6 py-2 rounded-full h-full">報名截止</p>
            </a>
          </div>
        </div>
        <div className="relative h-[18rem] bg-transparent w-auto max-w-[64rem] mx-auto mt-[5rem] rounded-2xl max-lg:hidden">
          <img src={"/2024/images/application-rule.svg"} alt="application-rule" className="absolute w-full h-full" />
          <div className="absolute w-full h-full p-5">
            <h1 className="absolute text-3xl font-medium left-[10rem] top-[3rem]">注意事項</h1>
          </div>
          <div className="absolute w-full max-w-[64rem] pl-[20rem] h-[18rem]">
            <div className="flex w-full h-full">
              <div className="h-[12rem] w-[0.1rem] bg-white my-auto" />
            </div>
          </div>
          <div className="absolute w-full max-w-[64rem] pl-[22rem] h-[18rem] py-[2.2rem] pr-[4rem]">
            <p>
              1. 若在 5/12（日）23:59 前報名即享有早鳥價，享有早鳥價者仍可享有團報優惠。
            </p>
            <p>
              2. 三人同時報名，視為團體報名，享有團體報名價格，但並不保證同時錄取，每團以三人為限，詳見
              {" "}
              <a
                href="https://drive.google.com/file/d/1UWNkiYLvLZKY6VM1_XnRy5gbtV74DLcY/view?usp=sharing"
                target="_blank"
                className="link"
              >
                報名簡章
              </a>
              。
            </p>
            <p>
              3. 本次夏令營預計招收學員 60 名，我們會針對報名資料做簡易審查，非先報先贏。
            </p>
            <p>
              4. 正取學員名單最晚將於 6/8（六）前公佈，屆時請關注 SITCON 相關社群媒體及 Email 信箱。
            </p>
            <p>
              5. 正取學員需完成報名費繳交，始完成報名程序；另設有補助名額，請詳閱
              {" "}
              <a
                href="https://drive.google.com/file/d/17VY3TcxK4a9FY7T23qX6fmGA7C8UsLDP/view?usp=sharing"
                target="_blank"
                className="link"
              >
                報名費用補助辦法
              </a>
              。
            </p>
            <p>
              6. 關於退費事宜，請見
              {" "}
              <a
                href="https://drive.google.com/file/d/1f7nnTB7IskhPWIXk4FV9iiDKLKjpi78F/view?usp=sharing"
                target="_blank"
                className="link"
              >
                退費說明文件
              </a>
              。
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#172A48] -mt-10 -mb-14 rounded-[2rem] px-[2rem] pt-[2rem] pb-[2rem] flex flex-col lg:hidden">
        <h1 className="mx-auto text-3xl font-bold">注意事項</h1>
        <hr className="bg-[#ffffff] w-full h-[0.1rem] mt-4 mb-8" />
        <div className="flex flex-col gap-3">
          <p>
            1. 若在 5/12（日）23:59 前報名即享有早鳥價，享有早鳥價者仍可享有團報優惠。
          </p>
          <p>
            2. 三人同時報名，視為團體報名，享有團體報名價格，但並不保證同時錄取，每團以三人為限，詳見
            {" "}
            <a
              href="https://drive.google.com/file/d/1UWNkiYLvLZKY6VM1_XnRy5gbtV74DLcY/view?usp=sharing"
              target="_blank"
              className="link"
            >
              報名簡章
            </a>
            。
          </p>
          <p>
            3. 本次夏令營預計招收學員 60 名，我們會針對報名資料做簡易審查，非先報先贏。
          </p>
          <p>
            4. 正取學員名單最晚將於 6/8（六）前公佈，屆時請關注 SITCON 相關社群媒體及 Email 信箱。
          </p>
          <p>
            5. 正取學員需完成報名費繳交，始完成報名程序；另設有補助名額，請詳閱
            {" "}
            <a
              href="https://drive.google.com/file/d/17VY3TcxK4a9FY7T23qX6fmGA7C8UsLDP/view?usp=sharing"
              target="_blank"
              className="link"
            >
              報名費用補助辦法
            </a>
            。
          </p>
          <p>
            6. 關於退費事宜，請見
            {" "}
            <a
              href="https://drive.google.com/file/d/1f7nnTB7IskhPWIXk4FV9iiDKLKjpi78F/view?usp=sharing"
              target="_blank"
              className="link"
            >
              退費說明文件
            </a>
            。
          </p>
        </div>
      </div>
    </>
  );
}
