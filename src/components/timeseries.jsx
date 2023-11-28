import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
export default function TimeSeries() {
    const [data, setData] = React.useState();
    const [slug,setSlug] = React.useState("")
  const { slug: routeSlug } = useParams();
   const companies = {"Microsoft":"MSFT","Amazon":"AMZN","Tesla":"TSLA","Apple":"AAPL","IBM":"IBM","Pepsico":"PEPS","Meta":"META","Costco":"COST","Nvdia":"NVDA","AMD":"AMD","Arm Holdings":"ARM","Google":"GOOGL","Global X":"QYLD","Netflix":"NFLX","Compass Inc.":"COMP","NASDAQ":"NDAQ","Cisco":"CSCO","EBAY":"EBAY","Gamestop":"GME","Paypal":"PYPL"}
    useEffect(() => {
          const fetchData = async (slug) => {
      const apiKey = "Z2GIIMS7ITTVLKT2";
      const res = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${slug}&apikey=${apiKey}`
      );
      const result = await res.json();
        setData(result["Weekly Time Series"]);
      console.log(result) 
    };

      fetchData(slug);
   },[])
  
 
      
  
 useEffect(() => {
        
            setSlug(routeSlug)
    },[routeSlug])
    
  return (
    <div>
      {data && (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Open</th>
              <th>High</th>
              <th>Low</th>
              <th>Close</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(data).map((entry) => {
              const date = entry[0];
              const weekData = entry[1];
              return (
                <tr key={date}>
                  <td>{date}</td>
                  <td>{weekData["1. open"]}</td>
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
