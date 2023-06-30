import React, { createContext } from "react";

const LoginContext = createContext();

function LoginProvider({ children }) {

    return (
        <LoginContext.Provider value={{ loggedIn, setLoggedIn, login, logout }}>
            {children}
        </LoginContext.Provider>
    );
}


export { LoginContext, LoginProvider };