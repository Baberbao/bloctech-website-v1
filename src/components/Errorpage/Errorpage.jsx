import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import "./errorpage.css";

const Errorpage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // console.log(window.location.pathname);
    // if (
    //   window.location.pathname === "/smart-contract-audit-company/Audit1.pdf"
    // ) {
    //   return;
    // } else {
    navigate("/");
    // }
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <h1>404</h1>
    </div>
  );
};

export default Errorpage;
