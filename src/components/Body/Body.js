import "./Body.css";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import EmergencyContacts from "./EmergencyContacts/EmergencyContacts";
import MedicalConditions from "./MedicalCondtions/MedicalConditions";
import Allergies from "./Allergies/Allergies";
import React from "react";

function Body() {
  return (
    <div className="body">
      <PersonalInfo></PersonalInfo>
      <EmergencyContacts></EmergencyContacts>
      <MedicalConditions></MedicalConditions>
      <Allergies></Allergies>
    </div>
  );
}

export default Body;
