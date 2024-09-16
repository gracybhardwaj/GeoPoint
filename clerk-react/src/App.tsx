import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import CropDashboard from "./CropDashboard";
import './App.css';

// Import logos
import logo1 from './assets/logo-color.jpeg'; // Replace with actual logo name
import logo2 from './assets/logo-no-background.png'; // Replace with actual logo name

export default function App() {
  const { user } = useUser();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo2} alt="Logo 2" className="logo react" />
        <SignedOut>
        <SignInButton />
        </SignedOut>
        <SignedIn>
          <img src={logo1} alt="Logo 1" className="logo" />
          <div className="user-info">
            <UserButton />
            {user && (
              <span className="user-name">
                Welcome, Farmer {user.firstName || user.fullName}
              </span>
            )}
          </div>
          {/* Pass the Clerk user ID as farmerId to CropDashboard */}
          {user && <CropDashboard farmerId={user.id} />}
        </SignedIn>
      </header>

      {/* Project Description Section */}
      <section className="project-description">
        <h1>About Us</h1>
        <h2>Low-cost & Low-power Waterproof Geopoint</h2>
        <p>
          This project leverages sensors and satellite/cellular connectivity to gather environmental data on farms in remote areas. 
          The data is from senors is then processed using AI to optimize irrigation schedules, predict trends such as drought or disease outbreaks, 
          and provide real-time insights through a full-stack web application.
        </p>
      </section>

      {/* Challenges and AI Insights */}
      <section className="challenges-section">
        <h2>Challenges and Problems in Sustainable Agriculture</h2>
        <ul>
          <li>
            <strong>Soil Quality:</strong> Maintaining and improving soil conditions is critical to sustainable agriculture. 
            We measure carbon levels and provide insights to optimize crop rotations and cover crops.
          </li>
          <li>
            <strong>Water Scarcity:</strong> Optimizing irrigation is essential for farmers in remote areas. 
            Our system measures soil moisture and provides recommendations on when to water crops.
          </li>
          <li>
            <strong>Environmental Stress:</strong> Increasing resilience to droughts and heavy rains by using 
            data from humidity and temperature sensors.
          </li>
        </ul>
      </section>

      {/* AI Suggestions for Farmers */}
      <section className="ai-suggestions">
        <h2>AI Suggestions for Improved Farming</h2>
        <p>
          Using advanced AI, we predict trends such as drought and optimal irrigation times, helping farmers reduce costs and improve yields. 
          AI analyzes data from sensors measuring water levels, humidity, temperature, and soil moisture to provide actionable insights.
        </p>
      </section>
    </div>
  );
}