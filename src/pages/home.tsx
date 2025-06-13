import HomeHeader from "../components/home-header";
import Preview from "../components/preview";
import HomeStats from "../home-stats";

function Home() {
  return (
    <div className="flex h-[90.5dvh] flex-col p-3 pb-5">
      <HomeHeader />
      <Preview />
      <HomeStats />
    </div>
  );
}

export default Home;
