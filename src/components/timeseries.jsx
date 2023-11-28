import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
export default function TimeSeries() {
    const [data, setData] = React.useState();
    const [slug,setSlug] = React.useState("")
  const { slug: routeSlug } = useParams();
   const companies = {"Microsoft":"MSFT","Amazon":"AMZN","Tesla":"TSLA","Apple":"AAPL","IBM":"IBM","Pepsico":"PEP","Meta":"META","Costco":"COST","Nvdia":"NVDA","AMD":"AMD","Arm Holdings":"ARM","Google":"GOOGL","Global X":"QYLD","Netflix":"NFLX","Compass Inc.":"COMP","NASDAQ":"NDAQ","Cisco":"CSCO","EBAY":"EBAY","Gamestop":"GME","Paypal":"PYPL"}
    useEffect(() => {
      const fetchData = async (slug) => {
            console.log(slug)
      const apiKey = "QI111OMS3QPQ1FPD";
      const res = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${slug}&apikey=${apiKey}`
      );
      const result = await res.json();
        setData(result["Weekly Time Series"]);
      console.log(result) 
    };

      fetchData(slug);
   },[slug])
  
 
      
  
 useEffect(() => {
        
            setSlug(routeSlug)
    },[routeSlug])
    
  return (
    <div style={{height:"12000vh"}}>
      {data && (
        <table style={{border:"black 2px solid",marginLeft:"20%",width:"60vw",backgroundColor:"white",color:"white"}}>
          <thead style={{border:"black 2px solid",color:"black"}}>
            <tr>
              <th>Date</th>
              <th>Open</th>
              <th>High</th>
              <th>Low</th>
              <th>Close</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody style={{border:"black 4px solid",color:"black",paddingLeft:"10vw"}}>
            {Object.entries(data).map((entry) => {
              const date = entry[0];
              const weekData = entry[1];
              return (
                <tr key={date} style={{border:"black 2px solid",height:"7vh",width:"60vw",color:"black",paddingLeft:"10vw"}}>
                  <td>{date}</td>
                  <td style={{}}>{weekData["1. open"]}</td>
                  <td>{weekData["2. high"]}</td>
                  <td>{weekData["3. low"]}</td>
                  <td>{weekData["4. close"]}</td>
                  <td>{weekData["5. volume"]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
