import React, { createContext } from "react";

const LoginContext = createContext();

function LoginProvider({ children }) {

    return (
        <LoginContext.Provider value={{ setLoggedIn, login, logout }}>
            {children}
        </LoginContext.Provider>
    );
}


export { LoginContext, LoginProvider };