import React from "react";
import img from "./images/Asset4.png";
import "./EmergencyContacts.css";

function EmergencyContacts() {
  return (
    <div className="emergencyContacts">
      <p className="emergencyContacts__title">Emergency Contacts</p>
      <div className="emergencyContacts__card">
        <div className="emergencyContacts__cardInfo">
          <p>Tushar: 7742892982</p>
          <hr />
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default EmergencyContacts;
