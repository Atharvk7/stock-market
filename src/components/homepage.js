import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./Navbar";
import { withTheme } from "@emotion/react";
import Footer from "./footer";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{
          background: "linear-gradient(to right, #260000, #c31432)",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginBottom: "10vh",
          overflow: "hidden", // Add overflow: hidden to prevent horizontal scrolling
        }}
      >
        <div
          style={{
            color: "white",
            display: "flex",
            flexDirection: "row",
            fontSize: "98px",
            width: "99vw", // Use 100vw for full width
            maxWidth: "100%", // Add max-width: 100% to restrict width to viewport
            fontWeight: "700",
            justifyContent: "space-between",
            paddingLeft: "8%",
          }}
        >
          <div style={{ marginTop: "4%" }}>
            <img
              src="https://res.cloudinary.com/djbjtsun9/image/upload/v1700691130/cc_iqsbj7.png"
              alt="logo"
              height={80}
              style={{ marginTop: "1%" }}
            />
            <br />
            Choices and <br /> Capitals
          </div>
          <div style={{ width: "full", marginRight: "-100px" }}>
            <img
              src="https://res.cloudinary.com/djbjtsun9/image/upload/v1701799191/Asset_1_pojwq9.png"
              alt="stock_image"
              height={500}
              width={700}
            />
          </div>
        </div>
        <div
          style={{
            color: "white",
            textAlign: "center",
            width: "90vw", // Use 90vw for responsive width
            marginLeft: "5%", // Adjust margin for alignment
            marginTop: "30px",
          }}
        >
          We provide industry analysis, personalized suggestions, and investment insights to empower you with the knowledge and tools you need to build a secure financial future. Our analysis helps you understand the trends, risks, and opportunities in various sectors.
          <br />
          Our personalized suggestions are tailored to your unique financial goals, risk tolerance, and investment preferences. Our insights are based on rigorous research and analysis, providing you with valuable perspectives on market trends and potential investment opportunities.
          <br />
          Our goal is to help you achieve financial stability, security, and long-term prosperity.
        </div>
        <div
          style={{
            color: "white",
            textAlign: "center",
            width: "80vw",
            marginLeft: "10%",
            marginTop: "45px",
            marginBottom: "4%",
          }}
        >
          <a
            href={"/invest"}
            style={{ color: "white", border: "white 3px solid", padding: "1%" }}
          >
            <strong>Why should you invest?</strong>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
