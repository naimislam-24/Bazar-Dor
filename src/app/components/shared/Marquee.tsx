import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface IMarquee {
  id: string;
  categoryIcon: string;
  nameBn: string;
  today: number;
  change: {
    dir: string;
    pct: number;
  };
}

const Marquee = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
  );
  const data: IMarquee[] = await res.json();
  const sortedData = [...data].sort((a, b) => Number(a.id) - Number(b.id));

  // const changeData = data[0].change;
  //   console.log(data);

  //   console.log(changeData);

  return (
    <div className="bg-white">
      <MarqueeText direction="right" duration={30}>
        <div className="flex gap-10">
          {sortedData.map((d) => (
            <div key={d.id} className="flex gap-2">
              <h4>{d.categoryIcon}</h4>
              <h4>{d.nameBn}</h4>
              <h4>{d.today} টাকা/কেজি</h4>
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-sm font-medium ${
                  d.change.dir === "up" ? "text-red-600" : "text-green-600"
                }`}
              >
                {d.change.dir === "up"
                  ? "▲"
                  : d.change.dir === "down"
                    ? "▼"
                    : "—"}
                {d.change.pct}%
              </span>
              {/* <h4>{changeData.dir}</h4> */}
            </div>
          ))}
        </div>
      </MarqueeText>
    </div>
  );
};

export default Marquee;
