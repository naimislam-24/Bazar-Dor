import Banner from "./components/homepage/Banner";
import AllCard from "./components/shared/AllCard";
import NavDecressCard from "./components/shared/NavDecressCard";
import NavIncressCard from "./components/shared/NavIncressCard";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <NavIncressCard />
      <NavDecressCard />
      <AllCard />
    </div>
  );
}
