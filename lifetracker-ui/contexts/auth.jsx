
import { createContext, useState } from "react"

const AuthContext = createContext({});

export const AuthContextProvider =({children})=>{
    const [auth, setAuth] =useState(false);
  //  const [user, setUser] = useState(null)
  //  const [initialized, setInitialized] = useState(false)
  //  const [isProcessing, setIsProcessing] = useState(false)
   // const [error, setError] = useState(null)

    return(
        <AuthContext.Provider value={{ auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;