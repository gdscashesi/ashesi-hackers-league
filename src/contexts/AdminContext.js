//libraries
import { createContext } from 'react'

const AdminContext = createContext();

const AdminContextProvider = ({children}) => {
  return (
    <AdminContext.Provider>
        {children}
    </AdminContext.Provider>
  )
}

export default AdminContextProvider;