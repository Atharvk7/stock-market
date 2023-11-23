import React from "react";
import "./styles/navbar.css"

import { Dropdown } from 'rsuite'; 
import { Link,BrowserRouter } from "react-router-dom";
export default function NavBar() {
 
    return (
      <div>{
        window.location.pathname !== "/" &&
        <div style={{display:"flex",borderColor:"white",flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"100%",height:"full",backgroundColor:"#260000",opacity:0.8}}>
            
                 <strong style={{color:"white",fontWeight:"bold",fontFamily:"monospace",fontSize:"25px"}}><span style={{fontSize:"30px",marginLeft:"2vw"}}> ©</span> Choices and Capitals</strong>

            
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "end", cursor: "pointer",fontFamily:"monospace" }}>
                <BrowserRouter>
                
                    
<div  style={{marginRight: "9%",fontSize:"22px",margin:"5%"}} className="navbuttons" >
                        <a href="/home" style={{ marginRight: "9%", textDecoration: "none", color: "white" }} >
                    Home
                    </a>
                    </div>
                     <div style={{marginRight: "9%", color:"white",fontSize:"20px",margin:"5%"}} className="navbuttons">
                        <a href="/marketplace" style={{ marginRight: "9%" ,textDecoration:"none",color:"white"}}>Marketplace</a>
                        </div>
                   
                    <div style={{zIndex:10, marginRight: "9%", fontSize: "20px", margin: "5%" ,backgroundColor:"#260000"}} className="navbuttons">
   <Dropdown
  title="Calculators"
  menuStyle={{
    ".dropdown-menu": {
      color: "#260000",
      backgroundColor: "white",
      fontFamily: "monospace",
      fontSize: "20px",
      fontWeight: "bold",
      padding: "5px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
    },
  }}
>
  <Dropdown.Item><a href="/SIP">SIP</a></Dropdown.Item>
  <Dropdown.Item><a href="/Lump">LumpSum</a></Dropdown.Item>
                <Dropdown.Item><a href="/ppf">PPF</a></Dropdown.Item>
                <Dropdown.Item><a href="/fd">FD</a></Dropdown.Item>
                <Dropdown.Item><a href="/emi">EMI</a></Dropdown.Item>
                <Dropdown.Item><a href="/retirement">Retirement Plan</a></Dropdown.Item>
  <Dropdown.Item><a href="/income">Income Tax</a></Dropdown.Item>
</Dropdown>



                {/* <a href= "/calculator" style={{marginRight:"9%",textDecoration:"none",color:"white"}}> 
Calculators 
                        </a> */}

                        </div>
                   

                       </BrowserRouter> 
            </div>
        

        </div>
        }
        </div>
            
    )
}