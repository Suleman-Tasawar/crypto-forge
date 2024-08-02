import { createContext, useState } from "react";

export const AuthContext = createContext()

//This will maintain authentication across all website
export default function AuthContextProvider({children})
{
    const [authStatus, setAuthStatus] = useState(false)

    return (
        <AuthContext.Provider value={{
            authStatus,
            setAuthStatus
            }}>
            {children}
        </AuthContext.Provider>
    )
}

