import { createContext , useState } from 'react'

export const UserContextSTic = createContext();

function SourceTicProvider({children}) {
    const [clickSTic,setclickSTic] = useState("สถานีต้นทาง")
    const value = {clickSTic,setclickSTic}
    return (
      <UserContextSTic.Provider value={value}>
        {children}
      </UserContextSTic.Provider>
    );
  }

export default SourceTicProvider