import axios from 'axios';
import { useEffect, useState } from 'react';
import NavBar from './Navbar';
import { Fade } from 'react-reveal';
export default function HomeBasePage() {
    const [data, setData] = useState([]);
    const [show,setShow] = useState(false)
let array = [
        "AAPL",
        "TSLA",
        "MSFT",
        "META",

        
      
    "AMZN",
  
  "GOOGL"
 
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
    data.splice(6)
    
  useEffect(() => {
    array.forEach((element) => fetchData(element));
  }, []);

    return (
        <div style={{background:"linear-gradient(to right, #260000, #c31432)",height:"120vh",width:"100vw"}}>
                     <div style={{textAlign:"center",fontSize:"20px",color:'white',backgroundColor:"#260000",opacity:0.7,padding:"2%",borderBottomLeftRadius:"140px",borderBottomRightRadius:"140px"}}>We provide industry analysis, personalized suggestions, and investment insights.
 <br/>Our goal is to empower you with the knowledge and tools you need to build a secure financial future.
            </div>  
            <Fade bottom>

            
            <div style={{ color: "white", borderRadius: "20px", display: "flex", justifyContent: "center", borderCollapse: "separate" }}>

                
                        <table border="1" style={{ height: "70vh", width: "70vw", borderRadius: "20px", marginTop: "3%" }}>
                            <thead style={{ borderRadius: "20px" }}>
                                <tr style={{ height: "7vh", backgroundColor: "#4a0404", borderCollapse: "separate", borderRadius: "10px" }}>
                                    <th>Company</th>
                                    <th>Price</th>
                                    <th>Change</th>
                                    <th>Change Positive</th>
                                </tr>
                            </thead>
                            <tbody >
                                {data.map((item) => {
                                    const companyName = Object.keys(item)[0];
                                    const companyData = item[companyName];
              

                                    return (
                                        <tr style={{ backgroundColor: "white", color: "black", borderRadius: "20px", opacity: 0.9 }}>
                                            <td><a href={`company/${companyName}`}>{companyName}</a></td>
                                            <td>{companyData.price}</td>
                                            <td>{companyData.change_point}</td>
                                            <td>{companyData.change_point > 0 ? <span style={{ color: "green" }}>Yes</span> : <span style={{ color: "red" }}>No</span>}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>

                </div>
                </Fade>
            </div>
  );
}
