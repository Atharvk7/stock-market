import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./Navbar";
import { withTheme } from "@emotion/react";


export default function HomePage() {




  return (
    <div
      style={{
        background: "linear-gradient(to right, #260000, #c31432)",
        width: "full",
        height: "90vh",
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          color: "white",
          alignItems: "center",
          fontSize: "98px",
          fontWeight: "700",
          
        textAlign:"center"
        }}
      ><img style={{marginRight:"30%",marginTop:"3%"}} height={75} src="https://res.cloudinary.com/djbjtsun9/image/upload/v1700691130/cc_iqsbj7.png" alt="logo"/><br/>
        Choices and <br /> Capitals 
        </div>
        <div style={{color:"white",textAlign:"center",width:"80vw",marginLeft:"10%",marginTop:"30px"}}>
        
          We provide industry analysis, personalized suggestions, and investment insights to empower you with the knowledge and tools you need to build a secure financial future. Our  analysis helps you understand the trends, risks, and opportunities in various sectors. <br/>
Our personalized suggestions are tailored to your unique financial goals, risk tolerance, and investment preferences. Our  insights are based on rigorous research and analysis, providing you with valuable perspectives on market trends and potential investment opportunities. <br/>
Our goal is to help you achieve financial stability, security, and long-term prosperity
      
      </div>
      <div style={{color:"white",textAlign:"center",width:"80vw",marginLeft:"10%",marginTop:"45px",marginBottom:"2%"}}>
        <a href={"/invest"} style={{color:"white",border:"white 3px solid",padding:"1%"}}>
          <strong>Why should you invest ?</strong>
        </a>
      </div>
      
     
    </div>
  );
}
