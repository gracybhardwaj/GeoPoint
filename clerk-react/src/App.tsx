import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import MyComponent from "./newComponent";

export default function App() {
  return (
    <header>
      <SignedOut>
        <SignInButton /> 
      </SignedOut>
      <SignedIn>
        <UserButton /> 
        <MyComponent />
      </SignedIn>
    </header>
  );
}