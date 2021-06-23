import React from "react";
import "./MedicalConditions.css";

function MedicalConditions() {
  return (
    <div className="medicalConditions">
      <p className="medicalConditions__title">Medical Conditions</p>
      <div className="medicalConditions__card">
        <p>Condition 1</p>
        <hr />
        {/* <p className="medicalConditions__cardNote">
          Note: Lorem ipsum dolor sit amet.
        </p> */}
      </div>
    </div>
  );
}

export default MedicalConditions;
