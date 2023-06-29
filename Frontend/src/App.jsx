import React, { useState, useMemo } from "react"
import { LoginContext } from "./02.navigation/LoginContext"
import Router from "./02.navigation/Router"
import MenuDashboard from "./03.globals/03.Components/MenuDashboard"

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const login = () => {
    setLoggedIn(true);
  };
  const logout = () => {
    setLoggedIn(false);
    localStorage.removeItem("token");
  };
  const loginContextValue = useMemo(
    () => ({
      loggedIn,
      setLoggedIn,
      login,
      logout,
    }),
    [loggedIn, setLoggedIn]
  );

  return (

    <div className="bg-stone-200 min-h-screen flex">
      <LoginContext.Provider value={loginContextValue}>
        <MenuDashboard />
        <Router />
      </LoginContext.Provider>
    </div>
  )
};

export default App
