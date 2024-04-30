import SponsorData from "@/assets/sponsor.json";
export default function Sponsor() {
  return (
    <div className="container mt-16">
      {Object.entries(SponsorData).map(([title, items]) => (
        <div key={title}>
          <h2 className="text-xl font-bold mt-8 mb-2 lg:min-w-[200px] block">
            {title}
          </h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
            {items.map((item) => (
              <div key={item.name}>
                <div
                  className={`${
                    item.name === "陽明交通大學資訊工程系學會"
                      ? `bg-[#730208]`
                      : `bg-white`
                  } rounded-lg`}
                >
                  <img
                    src={`/2024/sponsor/${item.img}`}
                    alt={item.name}
                    className="w-full h-32 object-contain"
                  />
                </div>
                <div className="text-center mt-1 leading-6">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
