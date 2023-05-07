import Link from 'next/link'
function Report({ children, avatar, name, year, more }: {
  children: React.ReactNode,
  avatar: string,
  name: string,
  year: string,
  more: string,
}) {
  return (
    <div className="flex flex-col items-center min-w-[250px] bg-white text-[#333] rounded mx-2">
      <div className="flex items-center justify-center gap-2 p-2 leading-4 w-full">
        <img src={avatar} className="w-12 h-12 rounded" />
        <div className="flex-1">
          <div className="font-bold">{name}</div>
          <div className="opacity-70 text-sm mt-1">SITCON Camp {year} 學員</div>
        </div>
      </div>
      <div className="p-4 border-t border-black border-opacity-10 w-full">{children}</div>
      <div className="flex-1"></div>
      <div className="p-4 pt-0 flex justify-end w-full">
        <Link href="/" className="bg-[#01405D] text-white py-2 px-3 rounded-full leading-4">閱讀全文 →</Link>
      </div>
    </div>
  )

}
export default function Reports() {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
      <Report avatar="/2023/records-avatar/I7iV7Fo.jpeg" name="Vincent55" year="2019" more="1">
        在參加 SITCON 夏令營前，我只知道資訊中的演算法競賽，參加後，我知道資安、專案開發、人工智慧…等領域，甚至認識到了在這些領域前段的社群朋友們。
        以我自己的經驗，我參加了…
      </Report>
      <Report avatar="/2023/records-avatar/RlcXMX1.png" name="陳俊宇" year="2019" more="https://forum.gamer.com.tw/C.php?bsn=60292&snA=5734&tnum=1">
        Telegram bot 技術門檻不高，只要會一些基本的 Python 語法就能做出來，這也是這五天 SITCON 夏令營的主要課程之一。
        我們的黑客松題目：猜歌機器人，不知道你有沒有這樣的經驗，和一群動漫迷時，放一首動漫歌曲，看對方由沒有聽過；而這次的黑客松，我們小隊打算在 Telegram 上做一個猜歌機器人，主要流程如下…
      </Report>
      <Report avatar="/2023/records-avatar/rnV72WM.jpeg" name="William Mou" year="2017" more="1">
        常常，我們總覺得拼命的看書與學習，便可以使自己快速成長。
        然而，有所遺漏的是，當我們獨自精進時，常常會忽略了其他更重要的技能…
      </Report>
      <Report avatar="/2023/records-avatar/SY6Zi2x.jpeg" name="李杰穎" year="2019" more="https://jayin92.github.io/posts/2019-sitcon-camp/">
        這是我參加過課程最硬的營隊，也是唯一一次在營期中熬夜到三點的。
        這次程式開發的經驗真的讓我了解到什麼叫跟時間賽跑，我從來沒有打 code 打到凌晨 3 點，早上 7 點起來繼續的經驗。而且做出來的成品是真的可以用的，就真的非常非常有成就感，期望以後還有機會體驗到這種開發的經驗。
        SITCON 2020 我會去的！！！（當工人感覺不錯呢）
      </Report>
    </div>
  )
}