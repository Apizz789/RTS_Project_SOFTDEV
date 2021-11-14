import { createContext , useState } from 'react'

export const UserContextS = createContext();

function ContextProvider({children}) {
    const [clickS,setclickS] = useState("Please Select Sourrce :")
    const value = {clickS,setclickS}
    return (
      <UserContextS.Provider value={value}>
        {children}
      </UserContextS.Provider>
    );
  }

export default ContextProvider