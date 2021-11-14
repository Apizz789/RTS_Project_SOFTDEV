import { createContext , useState } from 'react'

export const UserContextD = createContext();

function DestProvider({children}) {
    const [clickD,setclickD] = useState("Please Select Dest")
    const value = {clickD,setclickD}
    return (
      <UserContextD.Provider value={value}>
        {children}
      </UserContextD.Provider>
    );
  }

export default DestProvider