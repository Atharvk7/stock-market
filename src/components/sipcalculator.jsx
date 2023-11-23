import React, { useState } from 'react';
import { Slider } from '@mui/material';
import { Chart } from 'react-google-charts';
import { Fade } from 'react-reveal';
function SIPCalculator() {
  const options = {
    title: 'SIP Growth Chart',
    pieHole: 0.4,
    is3D: false,
  };
  const [principalAmount, setPrincipalAmount] = useState(1000);
  const [monthlyInvestment, setMonthlyInvestment] = useState(1000);
  const [interestRate, setInterestRate] = useState(0.05);
  const [investmentPeriod, setInvestmentPeriod] = useState(10);
  const [result, setResults] = useState(false);

  const calculateSIPReturns = (principalAmount, monthlyInvestment, interestRate, investmentPeriod) => {
    const totalInvestment = monthlyInvestment * investmentPeriod * 12;
    const interestEarned = totalInvestment * interestRate * investmentPeriod;
    const totalReturns = totalInvestment + interestEarned;
    return totalReturns;
  };

  const sipReturns = calculateSIPReturns(principalAmount, monthlyInvestment, interestRate, investmentPeriod);

  const data = [
    ['Task', 'Amount'],
    ['SIP Returns', sipReturns],
    ['Principal Amount', principalAmount],
    ['Monthly Investment', monthlyInvestment],
  ];

  return (
     <div style={{ background: "linear-gradient(to right, #260000, #c31432)", width: '100vw',height:"110vh"}}>
      <div style={{ fontSize: "48px", paddingTop: "2%", color: "white",textAlign:"center" }}><strong> SIP Calculator</strong></div><br />
      <Fade right>
      <div style={{ border: 'green 2px solid', display: 'flex', flexDirection: 'row',opacity:0.7, justifyContent: 'space-around', backgroundColor: 'white',margin:"2%",borderRadius:"25px" }}>
        <div style={{ border: '', width: '1800px', padding: '4%' }}>
          <h3>Principal Amount: {principalAmount}</h3>
          <Slider
            value={principalAmount}
            onChange={(event) => setPrincipalAmount(event.target.value)}
            min={100}
            max={100000}
            step={100}
            aria-label="Principal Amount"
          />
          <h3>Monthly Investment: {monthlyInvestment}</h3>
          <Slider
            value={monthlyInvestment}
            onChange={(event) => setMonthlyInvestment(event.target.value)}
            min={100}
            max={10000}
            step={100}
            aria-label="Monthly Investment"
          />
          <h3>Interest Rate: {interestRate}</h3>
          <Slider
            value={interestRate}
            onChange={(event) => setInterestRate(event.target.value)}
            min={0.01}
            max={0.15}
            step={0.01}
            aria-label="Interest Rate"
          />
          <h3>Investment Period: {investmentPeriod}</h3>
          <Slider
            value={investmentPeriod}
            onChange={(event) => setInvestmentPeriod(event.target.value)}
            min={1}
            max={30}
            step={1}
            aria-label="Investment Period"
          />
          <button onClick={() => { setResults(!result); }} style={{ backgroundColor: '#00b386', color: 'white', border: '3px white solid', borderRadius: '6px', width: 'full', height: '5vh',fontSize:"17px" }}><strong style={{ margin: '20px',marginBottom:"5%" }}>{!result ? 'Calculate' : `SIP Returns: ${sipReturns.toFixed(2)}`}</strong></button>
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

export default SIPCalculator;
