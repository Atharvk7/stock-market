import React from "react";
import "./styles/calstyles.css";

export default function CompanyTable() {
  const companies = {
    Microsoft: "MSFT",
    Amazon: "AMZN",
    Tesla: "TSLA",
    Apple: "AAPL",
    IBM: "IBM",
    Pepsico: "PEP",
    Meta: "META",
    Costco: "COST",
    Nvdia: "NVDA",
    AMD: "AMD",
    "Arm Holdings": "ARM",
    Google: "GOOGL",
    "Global X": "QYLD",
    Netflix: "NFLX",
    "Compass Inc.": "COMP",
    NASDAQ: "NDAQ",
    Cisco: "CSCO",
    EBAY: "EBAY",
    Gamestop: "GME",
    Paypal: "PYPL",
  };

  const handleCompanyClick = (companyCode) => {
    // Update the URL with the company code
    window.location.href= (`https://example.com/companies/${companyCode}`);
  };

  return (
    <div style={{ width: "full" }}>
      <div
        style={{
          border: "white 5px solid",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <span style={{ fontSize: "xx-large",color:"white",marginBottom:"30px" }}>
          <strong>Companies</strong>
        </span>

        <table style={{width:"60vw",marginLeft:"20%"}}>
         
          <tbody style={{width:"20vw"}}>
            {Object.keys(companies).map((companyName) => (
              <tr key={companyName} style={{border:"",width:"20vw"}}>
                <td style={{border: "1px solid black",width:"20vw",backgroundColor:"white",color:"black",padding:"1%"}}>
                  <a
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "x-large",
                      padding:"3%"
                    }}
                    key={companyName}
                    href={`companies/${companies[companyName]}`}
                    onClick={() => handleCompanyClick(companies[companyName])}
                  >
                    {companyName}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
