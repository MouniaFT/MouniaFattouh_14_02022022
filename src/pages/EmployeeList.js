import { Link } from 'react-router-dom'
import DataTableList from '../components/DataTableList/DataTableList'
import './EmployeeList.css'

const EmployeeList = () => {
  return (
    <main className="main-employeelist">
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <table id="employee-table" className="display"></table>
        <DataTableList />
        <Link to="/">Home</Link>
      </div>
    </main>
  )
}

export default EmployeeList
