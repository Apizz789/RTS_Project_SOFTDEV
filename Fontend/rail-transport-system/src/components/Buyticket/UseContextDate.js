import { createContext , useState } from 'react'

export const UserContextDate = createContext();

function DateProvider({children}) {
    const [Dates, setDates] = useState("dd-mm-yyy")
    const value = {Dates, setDates}
    return (
      <UserContextDate.Provider value={value}>
        {children}
      </UserContextDate.Provider>
    );
  }

export default DateProvider