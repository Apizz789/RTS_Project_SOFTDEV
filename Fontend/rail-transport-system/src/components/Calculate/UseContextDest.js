import { createContext , useState } from 'react'

export const UserContextD = createContext();

function ContextProvider1({children}) {
    const [clickD,setclickD] = useState("Please Select Sourrce :")
    const value = {clickD,setclickD}
    return (
      <UserContextD.Provider value={value}>
        {children}
      </UserContextD.Provider>
    );
  }

export default ContextProvider1