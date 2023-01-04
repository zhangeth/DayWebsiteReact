import HomeHero from "../components/HomeHero/homeHero";
import Navbar from "../components/Navbar/navbar";
import Title from "../components/Title/title";

function Home() {
  return (
    <div>
      {Title()}
      {HomeHero()}
    </div>
  );
}

export default Home;