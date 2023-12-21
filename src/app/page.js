import HomePage from "./(withlayout)/home/page";
import Cursor from "./components/Cursor/Cursor";
import Navbar from "./components/base/navbar";
import Footer from "./components/home/footer";
import Reviews from "./components/home/reviews";
import Social from "./components/home/social";

export default function Home() {
  return (
    <>
     
        <Navbar />
        <HomePage />
        <Social />
        <Reviews />
        <Footer />
      
    </>
  );
}
