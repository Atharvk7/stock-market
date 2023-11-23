import React, { useState } from 'react';
import { Slider } from '@mui/material';
import { Chart } from 'react-google-charts';
import { Fade } from 'react-reveal';
function RetirementPlanningCalculator() {
  const options = {
    title: 'Retirement Planning Chart',
    pieHole: 0.4,
    is3D: false,
  };
  const [currentAge, setCurrentAge] = useState(40);
  const [retirementAge, setRetirementAge] = useState(60);
  const [annualSavings, setAnnualSavings] = useState(10000);
  const [expectedReturn, setExpectedReturn] = useState(0.07);
  const [result, setResults] = useState(false);

  const calculateRetirementCorpus = (currentAge, retirementAge, annualSavings, expectedReturn) => {
    const yearsToRetirement = retirementAge - currentAge;
    const totalSavings = annualSavings * yearsToRetirement;
    const futureValue = totalSavings * (1 + expectedReturn) ** yearsToRetirement;
    return futureValue;
  };

  const retirementCorpus = calculateRetirementCorpus(currentAge, retirementAge, annualSavings, expectedReturn);

  const data = [
    ['Task', 'Amount'],
    ['Expected Retirement Corpus', retirementCorpus.toFixed(2)],
    ['Annual Savings', annualSavings],
  ];

  return (
     <div style={{ background: "linear-gradient(to right, #260000, #c31432)", width: '100vw',height:"110vh"}}>
      <div style={{ fontSize: "48px", paddingTop: "2%", color: "white",textAlign:"center" }}><strong> Retirement Plan Calculator</strong></div><br />
      <Fade top>
      <div style={{ border: 'green 2px solid', display: 'flex', flexDirection: 'row',opacity:0.7, justifyContent: 'space-around', backgroundColor: 'white',margin:"2%",borderRadius:"25px" }}>
        <div style={{ border: '', width: '1800px', padding: '4%' }}>
          <h3>Current Age: {currentAge}</h3>
          <Slider
            value={currentAge}
            onChange={(event) => setCurrentAge(event.target.value)}
            min={25}
            max={65}
            step={1}
            aria-label="Current Age"
          />
          <h3>Retirement Age: {retirementAge}</h3>
          <Slider
            value={retirementAge}
            onChange={(event) => setRetirementAge(event.target.value)}
            min={currentAge + 1}
            max={70}
            step={1}
            aria-label="Retirement Age"
          />
          <h3>Annual Savings: {annualSavings}</h3>
          <Slider
            value={annualSavings}
            onChange={(event) => setAnnualSavings(event.target.value)}
            min={1000}
            max={100000}
            step={1000}
            aria-label="Annual Savings"
          />
          <h3>Expected Return: {expectedReturn}</h3>
          <Slider
            value={expectedReturn}
            onChange={(event) => setExpectedReturn(event.target.value)}
            min={0.01}
            max={0.15}
            step={0.01}
            aria-label="Expected Return"
          />
          <button onClick={() => { setResults(!result); }} style={{ backgroundColor: '#00b386', color: 'white', border: '3px white solid', borderRadius: '6px', width: 'full', height: '7vh',fontSize:'20px' }}><strong style={{ margin: '20px' }}>{!result ? 'Calculate' : `Expected Retirement Corpus: ${retirementCorpus.toFixed(2)}`}</strong></button>
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

export default RetirementPlanningCalculator;
