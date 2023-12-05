import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import { Link } from 'react-router-dom';
import 'swiper/css';
import React from "react"
export default function Footer() {
    return (
        <div style={{ height: "100vh", color: "black", width: "full", textAlign: "center" }}>
            <h1 style={{ color: 'white', marginTop: "7%",marginBottom:"2%" }}> Reviews</h1>
            <div style={{backgroundColor:"black",opacity:0.7}}>
            <Swiper 
                    style={{padding:"2%",paddingLeft:"5%",paddingRight:"5%"}}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
                <SwiperSlide style={{ backgroundColor: 'white', height: "40vh", width: "23vw", borderRadius: "15px", textAlign: "center", padding: "1%" }}>
                    <h4> Olivia Smith</h4>
                    I've been using this website for several months now and I'm incredibly impressed with the quality of the stock market analysis. The information is insightful, actionable, and easy to understand. I've been able to make better investment decisions thanks to the guidance I've received from this website. I highly recommend it to anyone who is serious about investing in the stock market.<h3>⭐⭐⭐</h3></SwiperSlide>
      <SwiperSlide  style={{backgroundColor:'white',height:"40vh",width:"24vw",borderRadius:"15px",textAlign:"center",padding:"1%"}}><h4>Atharv Kumar</h4>This website is an absolute lifesaver for me. I'm a busy professional and I don't have time to spend hours researching stocks. This website does all the work for me and provides me with the information I need to make informed investment decisions. I've been using this website for over a year now and I've seen my portfolio grow significantly. I can't imagine investing without it. <h3>⭐⭐⭐⭐⭐</h3></SwiperSlide>
                <SwiperSlide style={{ backgroundColor: 'white', height: "40vh", width: "24vw", borderRadius: "15px", textAlign: "center", padding: "1%" }}><h4> Aakanksha Ghodake</h4>I tried to contact customer service for help with using the website, but they were unresponsive. I sent multiple emails and never received a reply. I also tried calling them, but the phone number was always busy. I was very disappointed with the level of customer service on this website.<br/><br/><br/><h3>⭐</h3></SwiperSlide>
      <SwiperSlide  style={{backgroundColor:'white',height:"40vh",width:"24vw",borderRadius:"15px",textAlign:"center",padding:"1%"}}><h4>Sejal Randhawa</h4>This website is exactly what I was looking for. It's easy to use and the information is presented in a way that is easy to understand. I've learned so much from this website and I'm confident that it will help me make successful investments in the future.<br/><br/><br/><h3>⭐⭐⭐⭐</h3></SwiperSlide>
                <SwiperSlide style={{ backgroundColor: 'white', height: "40vh", width: "24vw", borderRadius: "15px", textAlign: "center", padding: "1%" }}><h4>Tanisha Pande</h4>I've tried a lot of different stock market analysis websites over the years, but none of them compare to this one. I've been able to make some profitable trades thanks to the guidance I've received from this website. I highly recommend it to anyone who is looking for a reliable and trustworthy source of stock market information.<br/><br/><h3>⭐⭐⭐⭐</h3></SwiperSlide>
                      <SwiperSlide  style={{backgroundColor:'white',height:"40vh",width:"24vw",borderRadius:"15px",textAlign:"center",padding:"1%"}}><h4>Sania </h4>This website is a good starting point for beginners who are new to stock market investing. The information is presented in a clear and concise manner, and the website offers a variety of educational resources. However, experienced investors may find the analysis to be too basic and lacking in sophistication.<br/><br/><h3>⭐⭐</h3></SwiperSlide>
                </Swiper>
            </div><br/><br/><br/>
            <div style={{ display: "flex", flexDirection: "row", width: "99vw", justifyContent: "space-around", height: "40vh",color:"white",backgroundColor:"Black" }}>
                <div><img src={"https://res.cloudinary.com/djbjtsun9/image/upload/v1700691130/cc_iqsbj7.png"} alt="" style={{marginTop:"70px"}} /></div>
                <div>
                    <br/>
                    <strong style={{ marginBottom: "200px" }}><h3>Quick Links</h3></strong><br />
                 <div>
                        <Link to="/marketplace" style={{  color: "white",fontSize:"17px" }}>Marketplace</Link><br/>
                        <Link to="/topgainers" style={{  color: "white",fontSize:"17px" }}>Top Gainers</Link><br/>
                        <Link to="/companies" style={{ color: "white" ,fontSize:"17px"}}>Companies</Link><br />
                        <Link to="/timeseries" style={{  color: "white",fontSize:"17px" }}>Time Series</Link><br />
                        <Link to="/news" style={{color:"white",fontSize:"17px"}}>News</Link>
                </div>
                
                </div>
                <div><br/><strong><h3>Contact Us</h3></strong>
                    <br />
                    <br/>
                    <div>
                        <span>✆ +919834765592</span><br/>
                        <span mailto="parthkadavrox@gmail.com">✉ parthkadavrox@gmail.com</span><br/>
                        <span>hello@gmail.com</span><br/>
                </div>
                
                </div>
            </div>
        </div>
    )
}