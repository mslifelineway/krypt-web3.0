import { BsShieldCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

import "../styles/services.css";
import { ServiceCard } from ".";

const serviceList = [
  {
    icon: <BsShieldCheck />,
    iconBgColor: "#2953E3",
    title: "Security Guranteed",
    subtitle: `Security is guranteed. We always maintain privacy and 
      maintaining the quality of our products.
    `,
  },
  {
    icon: <BiSearchAlt />,
    iconBgColor: "#8945F8",
    title: "Best Exchange Rate",
    subtitle: `Security is guranteed. We always maintain privacy and 
      maintaining the quality of our products.
    `,
  },
  {
    icon: <RiHeart2Fill />,
    iconBgColor: "#F84550",
    title: "Fastest Transactions",
    subtitle: `Security is guranteed. We always maintain privacy and 
      maintaining the quality of our products.
    `,
  },
];

const Services = () => {
  return (
    <div className="services flex-center">
      <div className="left flex-full-center">
        <h2>Services that we <br /> continue to improve</h2>
      </div>
      <div className="right">
        {serviceList.map((service) => (
          <div
            key={service.title || service.subtitle}
            className="service__cardBox"
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
