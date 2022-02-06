import CreateEmployee from './pages/CreateEmployee'
import './App.css'
import EmployeeList from './pages/EmployeeList'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route exact path="/">
        <CreateEmployee />
      </Route>
      <Route exact path="/employee">
        <EmployeeList />
      </Route>
    </Router>
  )
}

export default App
