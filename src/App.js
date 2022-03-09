import CreateEmployee from './pages/CreateEmployee'
import './App.css'
import EmployeeList from './pages/EmployeeList'
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <Route exact path="/">
        <CreateEmployee />
      </Route>
      <Route exact path="/employee">
        <EmployeeList />
      </Route>
    </HashRouter>
  )
}

export default App
