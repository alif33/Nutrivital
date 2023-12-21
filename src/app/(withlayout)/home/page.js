import News from "@/app/components/home/News";
import About from "@/app/components/home/about";
import Customers from "@/app/components/home/customers";
import Hero from "@/app/components/home/hero";
import Members from "@/app/components/home/members";
import Packages from "@/app/components/home/packages";
import Reviews from "@/app/components/home/reviews";
import Services from "@/app/components/ui/Services";
import { AuthContext } from "@/app/providers/AuthProviders";

const HomePage = () => {
  const { user } = AuthContext;
  console.log(user);
  return (
    <div>
      <Hero />
      <Customers />
      <About />
      <Services
        titleColor={"text-brand-2"}
        title={"Customize in your own way"}
        subtitle={
          "Consistent quality and experience across all platforms and devices."
        }
        list={[
          { name: "Simple drag & drop editor" },
          { name: "Engaging & personalized content" },
          { name: "Responsive and mobile ready" },
          { name: "Online financial exchanges for currency " },
        ]}
      />

      <Members />
      <Packages />
      <News />
    </div>
  );
};

export default HomePage;
