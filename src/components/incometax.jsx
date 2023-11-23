import React, { useState } from 'react';
import { Slider } from '@mui/material';
import { Chart } from 'react-google-charts';
import { Fade } from 'react-reveal';
function IncomeTaxCalculator() {
  const options = {
    title: 'Doghnut Chart',
    pieHole: 0.4,
    is3D: false,
  };
  const [annualIncome, setAnnualIncome] = useState(1000000);
  const [taxRate, setTaxRate] = useState(0.3);
  const [result, setResults] = useState(false);

  const calculateTax = (annualIncome, taxRate) => {
    return annualIncome * taxRate;
  };

  const taxAmount = calculateTax(annualIncome, taxRate);

  const data = [
    ['Task', 'Amount'],
    ['Tax', taxAmount],
    ['Annual Income', annualIncome],
  ];

  return (
       <div style={{ background: "linear-gradient(to right, #260000, #c31432)", width: '100vw',height:"110vh"}}>
      <div style={{ fontSize: "48px", paddingTop: "2%", color: "white" }}><strong>Income Tax Calculator</strong></div><br />
      <Fade right>
      <div style={{ border: 'green 2px solid', display: 'flex', flexDirection: 'row',opacity:0.7, justifyContent: 'space-around', backgroundColor: 'white',margin:"2%",borderRadius:"25px" }}>
        <div style={{ border: '', width: '1800px', padding: '4%' }}>
          <label>Annual Income: {annualIncome}</label>
          <Slider
            value={annualIncome}
            onChange={(event) => setAnnualIncome(event.target.value)}
            min={0}
            max={10000000}
            step={1000}
            aria-label="Annual Income"
          />
          <label>Tax Rate: {taxRate}</label>
          <Slider
            value={taxRate}
            onChange={(event) => setTaxRate(event.target.value)}
            min={0.01}
            max={0.3}
            step={0.01}
            aria-label="Tax Rate"
          />
          <button onClick={() => { setResults(!result); }} style={{ backgroundColor: '#00b386', color: 'white', border: '3px white solid', borderRadius: '6px', width: 'full', height: '5vh' }}><strong style={{ margin: '20px' }}>{!result ? 'Calculate' : `Tax Amount: ${taxAmount.toFixed(2)}`}</strong></button>
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

export default IncomeTaxCalculator;
