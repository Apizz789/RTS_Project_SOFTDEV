import { createContext , useState } from 'react'

export const UserContextDTic = createContext();

function DestTicProvider({children}) {
    const [clickDTic,setclickDTic] = useState("สถานีปลายทาง")
    const value = {clickDTic,setclickDTic}
    return (
      <UserContextDTic.Provider value={value}>
        {children}
      </UserContextDTic.Provider>
    );
  }

export default DestTicProvider