import HomeHero from "../components/HomeHero/homeHero";
import Carousel from "../components/homecarousel";
import Title from "../components/Title/title";

function Home() {
  return (
    <div>
      {HomeHero()}
      {Carousel()}
    </div>
  );
}

export default Home;