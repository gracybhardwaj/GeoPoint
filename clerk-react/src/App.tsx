import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import CropDashboard from "./CropDashboard";
import './App.css';

export default function App() {
  const { user } = useUser(); // Access the authenticated user

  // Define the expected structure for publicMetadata
  type PublicMetadataType = {
    location?: string;
  };

  // Cast the user.publicMetadata to the defined type
  const publicMetadata = user?.publicMetadata as PublicMetadataType;

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
            {/* Display user's name and location */}
            {user && (
              <span className="user-name">
                Welcome, Farmer {user.firstName || user.fullName}{" "}
                {publicMetadata?.location && `from ${publicMetadata.location}`}
              </span>
            )}
          </div>
          <CropDashboard />
        </SignedIn>
      </header>
    </div>
  );
}
