import { createContext , useState } from 'react'

export const UserContextSS = createContext();

function SourceSProvider({children}) {
    const [source_station,setSource_station] = useState("สถานีต้นทาง")
    const value = {source_station ,setSource_station }
    return (
      <UserContextSS.Provider value={value}>
        {children}
      </UserContextSS.Provider>
    );
  }

export default SourceSProvider