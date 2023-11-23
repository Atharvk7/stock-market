import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Api from './components/api';
import HomePage from './components/homepage';
import NavBar from './components/Navbar';
import Marketplace from './components/marketplace';
import Calculator from './components/calculator';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from './components/loginButton';
import Company from './components/company';
import CompoundInterestCalculator from './components/sipcalculator';
import SWPCalculator from './components/swpcalculator';
import PPFCalculator from './components/ppfcaculator';
import EMICalculator from './components/emicalculator';
import HomeBasePage from './components/homebasepage';
import IncomeTaxCalculator from './components/incometax';
import RetirementPlanningCalculator from './components/retirementplancalci';
import LumpSump from './components/calculator';
import SIPCalculator from './components/sipcalculator';

export default function App() {
  const { location, isLoading } = useAuth0(); // Added isLoading to check the loading state

  React.useEffect(() => {
    // Wait for the location object to be initialized before rendering the NavBar component
    if (!isLoading) {
      console.log('Location initialized');
    }
  }, [isLoading]);

  return (
    <div className="App">
      {/* Conditionally render the NavBar component based on the current route */}
     <NavBar />

      {/* Your router configuration remains the same */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomeBasePage />} />
          <Route path="/retirement" element={<RetirementPlanningCalculator />} />
          <Route path="/company/:slug" element={<Company />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/home" element={<HomeBasePage />} />
          <Route path="/emi" element={<EMICalculator />} />
          <Route path="/swp" element={<SWPCalculator />} />
          <Route path="/income" element={<IncomeTaxCalculator />} />
          <Route path="/ppf" element={<PPFCalculator />} />
          <Route path="/sip" element={<SIPCalculator />} />
          <Route path="/lump" element={<LumpSump />} />
        </Routes>
      </BrowserRouter>
      <span styles={{background:"linear-gradient(to right, #260000, #c31432)"}}>.</span>
    </div>
  )
}