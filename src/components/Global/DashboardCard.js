import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const DashboardCard = ({ data }) => {
  return (
    <div className="p-3 flex flex-col gap-8 text-white">
      <img src={data.img} alt="courseimg"  className="rounded h-[280px] object-cover" />
      <h1 className="font-[600] text-[26px]">{data.title}</h1>
      <p>{data.description}</p>
      <Link to={`/lms`}>
      <Button type="primary" text="Show Details" stylecustom="btnGlow" icon={true} />
      </Link>
    </div>
  );
};

export default DashboardCard;
