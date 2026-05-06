import React from "react";

type Props = {
  title: string;
  description: string;
  icon?: string;
};

const ServiceCard: React.FC<Props> = ({ title, description, icon }) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-xl border hover:shadow-lg transition">
      {icon && <div className="text-4xl mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
