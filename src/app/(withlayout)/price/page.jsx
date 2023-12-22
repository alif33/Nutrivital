import Packages from "@/app/components/home/packages";
import PricePackages from "@/app/components/price/PricePackages";
import Services from "@/app/components/ui/Services";

const PricingPage = () => {
  return (
    <div>
      <PricePackages />
      <Services
        titleColor={"text-grey-900"}
        title={"Why choose us?"}
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
    </div>
  );
};

export default PricingPage;
