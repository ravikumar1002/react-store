
import { createContext, useEffect, useState } from "react";

const TokenContext = createContext();

const TokenProvider = ({ children }) => {
    const [localStorageToken, setLocalStrogeToken] = useState()
    useEffect(() => {
        const localStorageTokenValue = localStorage.getItem("authToken");
        if(localStorageTokenValue){
        setLocalStrogeToken(localStorageTokenValue)
        }
    }, [])

    return <TokenContext.Provider value={{ localStorageToken }}>
        {children}
    </TokenContext.Provider>

};



export { TokenContext, TokenProvider };