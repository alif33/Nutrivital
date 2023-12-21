import Navbar from "./components/base/navbar";
import Footer from "./components/home/footer";
import Reviews from "./components/home/reviews";
import Social from "./components/home/social";
import HomeThreePage from "./(withlayout)/home-3/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeThreePage />
      <Social />
      <Reviews />
      <Footer />
    </>
  );
}
