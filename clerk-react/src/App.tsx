import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import CropDashboard from "./CropDashboard";
import './App.css';

export default function App() {
  const { user } = useUser();

  return (
    <div className="App">
      <header className="App-header">
        <h1>GeoPoint Agricultural Dashboard</h1>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
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
    </div>
  );
}
