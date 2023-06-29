/* eslint-disable */
import React, { createContext } from "react";

const LoginContext = createContext();

function LoginProvider({ children }) {
    // const [loggedIn, setLoggedIn] = useState(false);

    // useEffect(() => {
    //   const token = localStorage.getItem("token");
    //   if (token) {
    //     setLoggedIn(true);
    //   }
    // }, []);
    // const login = () => {
    //   setLoggedIn(true);
    // };
    // const logout = () => {
    //   setLoggedIn(false);
    //   localStorage.removeItem("token");
    // };

    return (
        <LoginContext.Provider value={{ setLoggedIn, login, logout }}>
            {children}
        </LoginContext.Provider>
    );
}

export { LoginContext, LoginProvider, AdminContext, AdminProvider };

///___________________________ A AJOUTER DANS APP :

// import { LoginContext } from "./03.globals/AdminContext"

// const [loggedIn, setLoggedIn] = useState(false);
// const login = () => {
//     setLoggedIn(true);
// };
// const logout = () => {
//     setLoggedIn(false);
//     localStorage.removeItem("token");
// };
// const loginContextValue = useMemo(
//     () => ({
//         loggedIn,
//         setLoggedIn,
//         login,
//         logout,
//     }),
//     [loggedIn, setLoggedIn]
// );

// <LoginContext.Provider value={loginContextValue}>
//     // LES ROUTERS ET MACHINS
// </LoginContext.Provider>