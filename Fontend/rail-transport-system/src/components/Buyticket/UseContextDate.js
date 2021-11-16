import { createContext , useState } from 'react'

export const UserContextDate = createContext();

function DateProvider({children}) {
    const [Date, setDate] = useState("dd/mm/yyy")
    const value = {Date, setDate}
    return (
      <UserContextDate.Provider value={value}>
        {children}
      </UserContextDate.Provider>
    );
  }

export default DateProvider