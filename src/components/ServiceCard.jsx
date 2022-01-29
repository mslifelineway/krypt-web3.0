import React from "react";
import { RoundedIcon } from ".";

import "../styles/services_card.css";

const ServiceCard = ({ service = {} }) => {
  const { icon, iconBgColor, iconStyle = {}, title, subtitle } = service;
  return (
    <div className="serviceCard flex-full-center">
      <RoundedIcon icon={icon} iconBgColor={iconBgColor} style={iconStyle} />
      <div className="service__card-content">
        <h4>{title}</h4>
        <h6>{subtitle}</h6>
      </div>
    </div>
  );
};

export default ServiceCard;
