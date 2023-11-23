import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";


export default function HomePage() {

  useEffect(() => {
  const handleScroll = () => {
    console.log("Page is scrolled");
    window.location.href = "/home"
    // Do something on scroll
  };

  window.addEventListener("scroll", handleScroll);

  // Clean up the event listener on unmount
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


  return (
    <div
      style={{
        background: "linear-gradient(to right, #260000, #c31432)",
        width: "full",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          color: "white",
          alignItems: "center",
          fontSize: "98px",
          fontWeight: "700",
          paddingTop: "10%",
          marginTop: "2vh",
        }}
      ><img src="https://res.cloudinary.com/djbjtsun9/image/upload/v1700691130/cc_iqsbj7.png" alt="logo"/><br/>
        Choices and <br /> Capitals 
      </div>
    </div>
  );
}
