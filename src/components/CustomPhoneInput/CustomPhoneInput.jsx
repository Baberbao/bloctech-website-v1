import React from "react";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function CustomPhoneInput({ number, setnumber, career }) {
  return (
    <div>
      <ReactPhoneInput
        country={"pk"}
        inputExtraProps={{
          name: "phone",
          required: true,
          autoFocus: true,
        }}
        style={{
          width: "100% !important",
          height: "42px",
          paddingLeft: "10px",
          backgroundColor: "transparent !important",
          border: "none",
          outline: "none",
          color: "white",
          marginTop: career ? "0px" : "4px",
        }}
        defaultCountry={"us"}
        // value={number}
        onChange={(item) => {
          console.log("+" + item, " =====>>>");
          setnumber("+" + item);
        }}
      />
    </div>
  );
}

export default CustomPhoneInput;
