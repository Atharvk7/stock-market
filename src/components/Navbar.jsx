import React, { useState } from "react";
import "./styles/navbar.css";
import { Link, BrowserRouter } from "react-router-dom";

const Dropdown = ({ label, items, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    // Add your logic here for handling item clicks
    console.log(`Clicked on ${item}`);
    setIsOpen(false); // Close the dropdown after clicking an item
  };

  return (
    <div style={{ position:"relative" }}>
      <div style={{ cursor: "pointer", paddingTop: "25px" ,color:"white",marginBottom:"25px"}} onClick={toggleDropdown}>
        {label} 
      </div>
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            marginTop: "3vh",
            border:"1px black solid",
            backgroundColor: "#fff",
            boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
            zIndex: 100,
          }}
        >
          {items.map((item, index) => (
            <Link
              key={index}

              to={`/${links[index].toLowerCase()}`} // Use the links array to determine the correct URL
              style={{ textDecoration: "none", color: "black"}}
              onClick={() => handleItemClick(item)}
            >
              <div
                style={{
                  padding: "10px",
                  borderBottom: "2px solid red",
                  cursor: "pointer",
                  textAlign:"center"
                }}
              >
                {item}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default function NavBar() {
  return (
    <div>
  
        <div
          style={{
            display: "flex",
            position: "relative",
            zIndex: 5,
            borderColor: "white",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            height: "full",
            backgroundColor: "#260000",
            opacity: 0.8,
          }}
        >
        <strong style={{ color: "white", fontWeight: "bold", fontFamily: "monospace", fontSize: "25px" }}>
          <a href="/" style={{color:"white",textDecoration:"none"}}>

         
            <span style={{ fontSize: "30px", marginLeft: "2vw",textDecoration:"none" }}> ©</span> Choices and Capitals
         </a>  
        </strong>

          <div style={{ display: "flex", flexDirection: "row", justifyContent: "end", cursor: "pointer", fontFamily: "monospace", zIndex:5 ,flexWrap:'nowrap' }}>
            
              <div style={{ position: "relative", marginRight:"5%",fontSize: "22px", margin: "5%", zIndex: 5 }} className="navbuttons">
                <Link to="/topgainers" style={{  textDecoration: "none", color: "white",whiteSpace:"nowrap" }}>
                Top Gainers
                </Link>
            </div>
             <div style={{ position: "relative", marginRight: "9%", fontSize: "22px", margin: "5%", zIndex: 5 }} className="navbuttons">
                <Link to="/newsfeed" style={{ marginRight: "9%", textDecoration: "none", color: "white" }}>
                  News
                </Link>
            </div>
             <div style={{ position: "relative", marginRight: "9%", fontSize: "22px", margin: "5%", zIndex: 5 }} className="navbuttons">
                <Link to="/companies" style={{ marginRight: "9%", textDecoration: "none", color: "white" }}>
                  Timeseries
                </Link>
              </div>
              <div style={{ position: "relative", marginRight: "9%", color: "white", fontSize: "20px", margin: "5%", zIndex: 5 }} className="navbuttons">
                <Link to="/marketplace" style={{ marginRight: "9%", textDecoration: "none", color: "white" }}>
                  Marketplace
                </Link>
              </div>
              <div style={{ position: "relative", zIndex: 100, marginRight: "6%", fontSize: "20px",margin:"5px" }} className="navbuttons">
                <Dropdown
                  label="Calculators"
                  items={["EMI", "SIP", "Retirement plan", "Income tax", "LumpSum", "FD", "PPF"]}
                  links={["emi", "sip", "retirement", "income", "lump", "fd", "ppf"]}
                />
              </div>
            
          </div>
        </div>
    
    </div>
  );
}
