import Packages from "@/components/pricing/packages";
import Services from "@/components/pricing/services";

const PricingPage = () => {
  return (
    <div>
      <Packages />
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
