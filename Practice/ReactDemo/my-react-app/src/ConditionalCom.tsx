// MyConditionalComponent.tsx
import React, { useState } from "react";

interface MyConditionalComponentProps { }

const ConditionalComponent: React.FC<MyConditionalComponentProps> = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h1>Welcome, User!</h1>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <h1>Please log in</h1>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
};
export default ConditionalComponent;
