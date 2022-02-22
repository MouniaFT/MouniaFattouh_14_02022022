import { createContext, useState } from 'react'

export const EmployeeListContext = createContext({})

const EmployeeListContextProvider = ({ children }) => {
  const [employeeList, setEmployeeList] = useState([])

  return (
    <EmployeeListContext.Provider value={{ employeeList, setEmployeeList }}>
      {children}
    </EmployeeListContext.Provider>
  )
}

export default EmployeeListContextProvider
