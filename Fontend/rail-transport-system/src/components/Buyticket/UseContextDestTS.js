import { createContext , useState } from 'react'

export const UserContextDS = createContext();

function DestSProvider({children}) {
    const [dest_station,setDest_station] = useState("สถานีปลายทาง")
    const value = {dest_station ,setDest_station }
    return (
      <UserContextDS.Provider value={value}>
        {children}
      </UserContextDS.Provider>
    );
  }

export default DestSProvider