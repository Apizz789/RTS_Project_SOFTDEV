import { createContext , useState } from 'react'

export const UserContextCountTic = createContext();

function CountTicProvider({children}) {
    const [clickCountTic,setclickCountTic] = useState(0)
    const value = {clickCountTic,setclickCountTic}
    return (
      <UserContextCountTic.Provider value={value}>
        {children}
      </UserContextCountTic.Provider>
    );
  }

export default CountTicProvider