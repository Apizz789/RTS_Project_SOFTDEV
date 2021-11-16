import { createContext , useState } from 'react'

export const UserContextS = createContext();

function SourceProvider({children}) {
    const [clickS,setclickS] = useState("Please Select Source")
    
    const value = {clickS,setclickS}
    return (
      <UserContextS.Provider value={value}>
        {children}
      </UserContextS.Provider>
    );
  }

export default SourceProvider