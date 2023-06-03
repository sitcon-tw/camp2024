export default function Footer() {
  let years = [2021, 2019, 2017, 2016, 2015, 2014];
  let socialMedias = [
    {
      title: "Facebook",
      icon: "/2023/icon/facebook.svg",
      link: "https://sitcon.org/facebook",
    },
    {
      title: "Flickr",
      icon: "/2023/icon/flickr.svg",
      link: "https://sitcon.org/flickr",
    },
    {
      title: "Instagram",
      icon: "/2023/icon/instagram.svg",
      link: "https://sitcon.org/instagram",
    },
    {
      title: "Telegram",
      icon: "/2023/icon/telegram.svg",
      link: "https://sitcon.org/telegram",
    },
    {
      title: "Twitter",
      icon: "/2023/icon/twitter.svg",
      link: "https://sitcon.org/twitter",
    },
    {
      title: "YouTube",
      icon: "/2023/icon/youtube.svg",
      link: "https://sitcon.org/youtube",
    },
    {
      title: "Plurk",
      icon: "/2023/icon/plurk.svg",
      link: "https://sitcon.org/plurk",
    },
  ];
  return (
    <div className="mt-16 bg-[#013249]">
      <div className="container py-8 flex flex-col lg:flex-row gap-8">
        <div className="w-full">
          <div className="font-bold">學生計算機年會</div>
          <div>Students&apos; Information Technology Conference</div>
          <div className="font-bold mt-8">聯繫我們</div>
          <div>
            合作聯繫：
            <a href="mailto:contact@sitcon.org" className="link">
              contact@sitcon.org
            </a>
            <br />
            報名事宜：
            <a href="mailto:ask@sitcon.camp" className="link">
              ask@sitcon.camp
            </a>
          </div>
        </div>
        <div className="w-full">
          <div className="font-bold">社群媒體</div>
          <div className="flex flex-row flex-wrap gap-4">
            {socialMedias.map((socialMedia) => (
              <a
                href={socialMedia.link}
                target="_blank"
                className="hover:opacity-80"
                key={socialMedia.title}
              >
                <img
                  src={socialMedia.icon}
                  className="w-5 h-5 inline-block invert"
                />
              </a>
            ))}
          </div>
          <div className="font-bold mt-8">歷年網站</div>
          <div className="flex flex-row flex-wrap gap-2">
            {years.map((year) => (
              <a
                href={`https://sitcon.camp/${year}`}
                target="_blank"
                className="link"
                key={year}
              >
                {year}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
