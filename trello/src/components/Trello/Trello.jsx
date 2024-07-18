import React from "react";
import Header from "../Header/Header";
import Sidebar from "../SideBar/Sidebar";
import HotelView from "../hotelview/HotelView";
import './Trello.scss'

const Trello = () => {
  return (
    <div>
      <div className="container">
        <Header />
        <div className="content">
          <Sidebar />
          <HotelView />
        </div>
      </div>
    </div>
  );
};

export default Trello;
