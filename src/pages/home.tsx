import HomeHeader from "../components/home-header";
import Preview from "../components/preview";
import HomeStats from "../home-stats";

function Home() {
  return (
    <div className="p-3 pb-5 flex flex-col h-[92.5dvh] bg-red">
      <HomeHeader />
      <Preview />
      <HomeStats />
    </div>
  );
}

export default Home;
