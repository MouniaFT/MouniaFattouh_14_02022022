import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import EmployeeListContextProvider from './contexts/EmployeeListContext'

ReactDOM.render(
  <React.StrictMode>
    <EmployeeListContextProvider>
      <App />
    </EmployeeListContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
