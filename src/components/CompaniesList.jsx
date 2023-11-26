import React from "react";
import "./styles/calstyles.css"
export default function CompanyTable() {
    const companies = {"Microsoft":"MSFT","Amazon":"AMZN","Tesla":"TSLA","Apple":"AAPL","IBM":"IBM","Pepsico":"PEPS"}
   const handleCompanyClick = (companyCode) => {
    // Update the URL with the company code
    window.history.pushState({}, "", `https://example.com/companies/${companyCode}`);
  };

    return (
      <div style={{width:"full"}}>
      <div style={{border:"white 5px solid", display: "flex", flexDirection: "column", justifyContent: "center",  textAlign: "center" }}>
          <span style={{fontSize:"x-large"}}><strong>Companies</strong></span>
     
          {Object.keys(companies).map((companyName) => (
        <a style={{textDecoration:"none",color:"white",fontSize:"large"}}
                  key={companyName}
                  id="newthing"
          href={`companies/${companies[companyName]}`}
          onClick={() => handleCompanyClick(companies[companyName])}
        >
          {companyName}
        </a>
          ))}
              
            </div>
            </div>
  );
}