import { createContext , useState } from 'react'

export const UserContext = createContext(null);

function ContextProvider({children}) {
    const [click,setclick] = useState("Please Select Destination :");
    const value = {click,setclick}
    return (
      <UserContext.Provider value={value}>
        {children}
      </UserContext.Provider>
    );
  }

export default ContextProvider