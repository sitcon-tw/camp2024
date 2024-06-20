import SponsorData from "@/assets/sponsor.json";
export default function Sponsor() {
  return (
    <div className="text-center bg-[url('/2024/images/star-bg.png')] bg-cover -z-50 relative pt-[4rem] px-[2rem] pb-[4rem]">
      {Object.entries(SponsorData).map(([title, items]) => (
        <div key={title}>
          <h2 className="text-2xl font-bold mb-2 lg:min-w-[200px] block pb-[1rem] pt-[4rem]">
            {title}
          </h2>
          <div className="flex gap-8 max-lg:flex-col">
            {items.map((item) => (
              <div key={item.name} className="mx-auto">
                <div
                  className={`${item.name === "陽明交通大學資訊工程系學會"
                    ? "bg-[#730208]"
                    : "bg-white"} 
                    rounded-2xl`}
                >
                  <img
                    src={`/2024/sponsor/${item.img}`}
                    alt={item.name}
                    className="object-contain w-64 h-32"
                  />
                </div>
                <div className="mt-1 leading-6 text-center">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
