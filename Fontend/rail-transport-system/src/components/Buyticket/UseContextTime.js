import { createContext , useState } from 'react'

export const UserContextTT = createContext();

function TimeTProvider({children}) {
    const [time_travel, setTime_travel] = useState("")
    const value = {time_travel, setTime_travel }
    return (
      <UserContextTT.Provider value={value}>
        {children}
      </UserContextTT.Provider>
    );
  }

export default TimeTProvider