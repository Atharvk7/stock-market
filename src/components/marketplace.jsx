import axios from 'axios';
import { useEffect, useState } from 'react';
import NavBar from './Navbar';
import { Fade } from 'react-reveal';
import Reveal from 'react-reveal/Reveal';
export default function Marketplace() {
  const [data, setData] = useState([]);
let array = [
        "AAPL",
        "TSLA",
        "MSFT",
        "META",
        "COST",
        "PEP",
        "NVDA",
    "AMZN",
    "AMD",
  "ARM",
  "GOOGL",
  "QYLD",
  "NFLX",
  "COMP",
  "NDAQ",
  "CSCO",
  "EBAY",
        "GME"
    ];
    const fetchData = async (element) => {
      const options = {
  method: 'GET',
  url: `https://realstonks.p.rapidapi.com/${element}`,
  headers: {
    'X-RapidAPI-Key': 'a16d208073msh2c1f3d8669226d3p175977jsn1efda1027b0d',
    'X-RapidAPI-Host': 'realstonks.p.rapidapi.com'
  }
};
    try {
      const response = await axios.request(options);
      const result = response.data;
      setData((prevData) => [...prevData, { [element]: result }]);
    } catch (error) {
      console.error(error);
    }
  };
data.splice(17)
  useEffect(() => {
    array.forEach((element) => fetchData(element));
  }, []);

    return (
     <div style={{ background: "linear-gradient(to right, #260000, #c31432)", height: "120vh", width: "100vw" }}>
      {/* <NavBar /> */}
        <div style={{ color: "white", borderRadius: "20px", display: "flex", justifyContent: "center", borderCollapse: "separate" }}>
          <table
            border="1"
            style={{ height: "110vh", width: "70vw", borderRadius: "20px", marginTop: "3%", textAlign: "center" }}
          >
            <thead style={{ borderRadius: "20px" }}>
              <tr style={{ height: "7vh", backgroundColor: "#4a0404", borderCollapse: "separate", borderRadius: "10px" }}>
                <th>Company</th>
                <th>Price</th>
                <th>Change</th>
                <th>Change Positive</th>
              </tr>
            </thead>
            <tbody style={{ textAlign: "center" }}>
              {data.map((item) => {
                const companyName = Object.keys(item)[0];
                const companyData = item[companyName];

                return (
                  <tr style={{ backgroundColor: "white", color: "black", borderRadius: "20px", opacity: 0.9, height: "3vh" }}>
                    <td><a href={`company/${companyName}`}>{companyName}</a></td>
                    <td>{companyData.price}</td>
                    <td>{companyData.change_point}</td>
                    <td>
                      {companyData.change_point > 0 ? <span style={{ color: "green" }}>Yes</span> : <span style={{ color: "red" }}>No</span>}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
    </div>
  );
}