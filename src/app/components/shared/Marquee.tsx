import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface IMarquee {
  id: string;
  categoryIcon: string;
  nameBn: string;
}

const Marquee = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
  );
  const data: IMarquee[] = await res.json();
  console.log(data);

  return (
    <div>
      <MarqueeText direction="right" duration={30}>
        <div className="flex gap-10">
          {data.map((d) => (
            <div key={d.id}>
              <span>{d.categoryIcon}</span>
              <span>{d.nameBn}</span>
            </div>
          ))}
        </div>
      </MarqueeText>
    </div>
  );
};

export default Marquee;
