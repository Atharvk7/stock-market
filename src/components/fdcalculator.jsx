import React, { useState } from 'react';
import { Slider } from '@mui/material';
import { Chart } from 'react-google-charts';
import { Fade } from 'react-reveal';
function FDCalculator() {
  const options = {
    title: 'Doghnut Chart',
    pieHole: 0.4,
    is3D: false,
  };
  const [principal, setPrincipal] = useState(1000);
  const [interestRate, setInterestRate] = useState(0.05);
  const [result, setResults] = useState(false);
  const [timeInYears, setTimeInYears] = useState(10);

  const calculateM = (principal, interestRate, timeInYears) => {
    return principal + (principal * interestRate * timeInYears) / 100;
  };

  const amount = calculateM(principal, interestRate, timeInYears);

  const data = [
    ['Task', 'Hours per Day'],
    ['Expected returns', amount],
    ['Investment', principal],
  ];

  return (
       <div style={{ background: "linear-gradient(to right, #260000, #c31432)", width: '100vw',height:"110vh"}}>
      <div style={{ fontSize: "48px", paddingTop: "2%", color: "white" }}><strong>FD Calculator</strong></div><br />
      <Fade left>
      <div style={{ border: 'green 2px solid', display: 'flex', flexDirection: 'row',opacity:0.7, justifyContent: 'space-around', backgroundColor: 'white',margin:"2%",borderRadius:"25px" }}>
        <div style={{ border: 'black 2px solid', width: '1800px', padding: '4%' }}>
          <label>Principal: {principal}</label>
          <Slider
            value={principal}
            onChange={(event) => setPrincipal(event.target.value)}
            min={100}
            max={10000}
            step={100}
            aria-label="Principal"
          />
          <label>Interest Rate: {interestRate}</label>
          <Slider
            value={interestRate}
            onChange={(event) => setInterestRate(event.target.value)}
            min={0.01}
            max={0.10}
            step={0.01}
            aria-label="Interest Rate"
          />
          <label>Time in Years: {timeInYears}</label>
          <Slider
            value={timeInYears}
            onChange={(event) => setTimeInYears(event.target.value)}
            min={1}
            max={30}
            step={1}
            aria-label="Time in Years"
          />
          <button onClick={() => { setResults(!result); }} style={{ backgroundColor: '#00b386', color: 'white', border: '3px white solid', borderRadius: '6px', width: 'full', height: '5vh' }}><strong style={{ margin: '20px' }}>{!result ? 'Calculate' : `Amount after ${timeInYears} years: ${amount.toFixed(2)}`}</strong></button>
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

export default FDCalculator;
