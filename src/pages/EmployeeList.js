import { Link } from 'react-router-dom'
import DataTableList from '../components/DataTableList/DataTableList'

const EmployeeList = () => {
  return (
    <main>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <table id="employee-table" className="display"></table>
        <Link to="/">Home</Link>
        <DataTableList />
      </div>
    </main>
  )
}

export default EmployeeList
