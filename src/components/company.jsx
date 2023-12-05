import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Fade } from 'react-reveal';

const Company = () => {
    const [slug, setSlug] = useState('');
    const [data,setData] = useState([])
    const { slug: routeSlug } = useParams();
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
      setData(result);
    } catch (error) {
      console.error(error);
    }
  };
    const ComapanyName = {
        TSLA: "Tesla",
        AMZN: "Amazon",
        MSFT:"Microsoft",
        GOOGL: "Google",
      AAPL: "Apple",
      META: "Meta",
      PEP: "Pepsico",
      NVDA: "Nvidia",
      NFLX: "Netflix",
      NDAQ: "Nasdaq",
      COMP: "Compass",
      QYLD: "GlobalX",
      ARM: "Arm holdings",
      GME: "Gamesstop corp",
      AMD:"Advanced Microdevices"
      ,
      CSCO: "Cisco",
      EBAY:"Ebay"

    }
     fetchData(slug)
    useEffect(() => {
     
      setSlug(routeSlug);
      
  }, [routeSlug]);
 
  return (
    
      <div style={{background:"linear-gradient(to right, #260000, #c31432)",height:"180vh",display:"flex",justifyContent:"center"}}> {
      data ?
        <Fade>
      <div style={{width:"50%"}}>
          <h1 style={{fontSize:"65px",color:"white",marginTop:"5%",textAlign:"center",marginBottom:"5%"}}>{ComapanyName[slug]}</h1>
          <h1 style={{border:"white 4px solid",backgroundColor:"white",borderRadius:"8px",opacity:0.5,marginBottom:"2%"}}>Current Price: {data.price} USD</h1>
          <h1 style={{border:"white 4px solid",backgroundColor:"white",opacity:0.5,borderRadius:"8px",marginBottom:"2%"}}>Change Point: {data.change_point} </h1>
          <h1 style={{border:"white 4px solid",backgroundColor:"white",opacity:0.5,borderRadius:"8px",marginBottom:"2%"}}>Total Volume: {data.total_vol}</h1>
          <h1 style={{border:"white 4px solid",backgroundColor:"white",opacity:0.5,borderRadius:"8px"}}>Change Percentage: {data.change_percentage}</h1>
          <div> {data.change_point > 0 ? <h2 style={{color:"#50c878",marginTop:"7%"}}>We suggest you to invest in this stock</h2> : <h2 style={{marginTop:"7%",color:"red"}}>Keep safe distance from this stock</h2>}</div>
          </div>
          </Fade>
              :""
    }
      </div>
     
  );
};

export default Company;
