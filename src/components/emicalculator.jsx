import React, { useState } from 'react';
import { Slider } from '@mui/material';
import { Chart } from 'react-google-charts';
import Fade from 'react-reveal/Fade';
import ScrollAnimation from "react-animate-on-scroll";
function CompoundInterestCalculator() {
  const options = {
    title: 'Doughnut Chart',
    pieHole: 0.4,
    is3D: false,
  };
  const [principal, setPrincipal] = useState(1000);
  const [interestRate, setInterestRate] = useState(0.05);
  const [result, setResults] = useState(false);
  const [timeInYears, setTimeInYears] = useState(10);

  const calculateEMI = (principal, interestRate, timeInYears) => {
    const monthlyInterestRate = interestRate / 12;
    const totalNumberOfPayments = timeInYears * 12;

    return (
      (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalNumberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, totalNumberOfPayments) - 1)
    );
  };

  const emi = calculateEMI(principal, interestRate, timeInYears);

  const data = [
    ['Task', 'Hours per Day'],
    ['Expected EMI', emi],
    ['Principal', principal],
  ];

  return (
    <div style={{ background: '', width: '100vw',height:"100vh" }} className="Portfolio__container">
      
            <div style={{fontSize:"48px",paddingTop:"2%",color:"white",textAlign:'center'}}><strong> EMI Calculator</strong></div><br />
<Fade left>
      <div style={{ border: '', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', background: '' ,opacity:0.7 ,margin:"5%",borderRadius:"10px"}}>
        <div style={{backgroundColor:'white', width: '1800px', padding: '4%',borderRadius:"10px"}}>
          <h3>Principal: {principal}</h3>
          <Slider
            value={principal}
            onChange={(event) => setPrincipal(event.target.value)}
            min={100}
            max={10000}
            step={100}
            aria-label="Principal"
          />
          <h3>Interest Rate: {interestRate}</h3>
          <Slider
            value={interestRate}
            onChange={(event) => setInterestRate(event.target.value)}
            min={0.01}
            max={0.10}
            step={0.01}
            aria-label="Interest Rate"
          />
          <h3>Time in Years: {timeInYears}</h3>
          <Slider
            value={timeInYears}
            onChange={(event) => setTimeInYears(event.target.value)}
            min={1}
            max={30}
            step={1}
            aria-label="Time in Years"
          />
          <button onClick={() => { setResults(!result); }} style={{ backgroundColor: '#00b386', color: 'white', border: '3px white solid', borderRadius: '6px', width: 'full', height: '5vh' }}><strong style={{ margin: '20px' }}>{!result ? 'Calculate' : `EMI: ${emi.toFixed(2)}`}</strong></button>
          {/* <p>Amount after {timeInYears} years: {amount.toFixed(2)}</p> */}
        </div>
        <div>
          <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
          />
          </div>
          
        </div>
       </Fade>
    </div>
  );
}

export default CompoundInterestCalculator;
