import React, { useState } from 'react';
import { Slider } from '@mui/material';
import { Chart } from 'react-google-charts';
import { Fade } from 'react-reveal';
function PPFCalculator() {
  const options = {
    title: 'Doghnut Chart',
    pieHole: 0.4,
    is3D: false,
  };
  const [principal, setPrincipal] = useState(1000);
  const [interestRate, setInterestRate] = useState(0.05);
  const [result, setResults] = useState(false);
  const [timeInYears, setTimeInYears] = useState(10);
  const [compoundingFrequency, setCompoundingFrequency] = useState(12);

  const calculatePPF = (principal, interestRate, timeInYears) => {
    return principal * ((1 + interestRate) ** timeInYears - 1) / interestRate;
  };

  const amount = calculatePPF(principal, interestRate, timeInYears);

  const data = [
    ['Task', 'Hours per Day'],
    ['Expected returns', amount],
    ['Investment', principal],
  ];

  return (
       <div style={{ background: "linear-gradient(to right, #260000, #c31432)", width: '100vw',height:"110vh"}}>
      <div style={{ fontSize: "48px", paddingTop: "2%", color: "white" }}><strong>PPF Calculator</strong></div><br />
      <Fade right>
      <div style={{ border: 'green 2px solid', display: 'flex', flexDirection: 'row',opacity:0.7, justifyContent: 'space-around', backgroundColor: 'white',margin:"2%",borderRadius:"25px" }}>
        <div style={{ border: '', width: '1500px', padding: '4%' }}>
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
          <h3>Compounding Frequency: {compoundingFrequency}</h3>
          <Slider
            value={compoundingFrequency}
            onChange={(event) => setCompoundingFrequency(event.target.value)}
            min={1}
            max={12}
            step={1}
            aria-label="Compounding Frequency"
          />
          <button onClick={() => { setResults(!result); }} style={{ backgroundColor: '#00b386', color: 'white', border: '3px white solid', borderRadius: '25px', width: 'full', height: '7vh',fontSize:"23px" }}><strong style={{ margin: '20px' }}>{!result ? 'Calculate' : `Amount after ${timeInYears} years: ${amount.toFixed(2)}`}</strong></button>
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

export default PPFCalculator;
