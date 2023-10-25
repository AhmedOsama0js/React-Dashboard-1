import React, { useState } from 'react';
import mainImg from "../../dist/img/main-dashboard.webP";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsBag } from "react-icons/bs";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import "./SidebarICon.css"

const SidebarICon = () => {
  const [activeItem, setActiveItem] = useState("home"); 
  const handleItemClick = (item) => {
    setActiveItem(item);
  }

  return (
    <div className="d-flex py-3 px-2 flex-column justify-content-between  h-100">
      <div className="d-flex flex-column align-items-center ">
        <div
          className={`sidebar-head-icon bg-success d-flex flex-fill fs-3 p-2 rounded-3 my-3 `}
        >
          <MdOutlineSpaceDashboard />
        </div>
        <span className="span-between-icon rounded-5 d-flex flex-fill w-75"></span>
        <Link to="React-Dashboard-1">
          <div
            className={`sidebar-icon d-flex flex-fill fs-3 p-2 rounded-3 my-3 ${
              activeItem === "home" ? "active" : ""
            }`}
            onClick={() => handleItemClick("home")}
          >
            <AiOutlineHome />
          </div>
        </Link>
        <Link to="clint">
          <div
            className={`sidebar-icon d-flex flex-fill fs-3 p-2 rounded-3 my-3 ${
              activeItem === "clint" ? "active" : ""
            }`}
            onClick={() => handleItemClick("clint")}
          >
            <BsPerson />
          </div>
        </Link>
        <Link to="product">
          <div
            className={`sidebar-icon d-flex flex-fill fs-3 p-2 rounded-3 my-3 ${
              activeItem === "bag" ? "active" : ""
            }`}
            onClick={() => handleItemClick("bag")}
          >
            <BsBag />
          </div>
        </Link>
      </div>
      <div className="main-img ">
        <img
          className="img-sidebar bg-success bg-opacity-25 rounded-3"
          src={mainImg}
          alt="main-img"
        />
      </div>
    </div>
  );
};

export default SidebarICon;


