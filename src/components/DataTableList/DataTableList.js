import { useContext, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { dataTableTitle } from '../../constants/dataTableTitle'
import { EmployeeListContext } from '../../contexts/EmployeeListContext'
import './DataTableList.css'

/**
 * A component to display table of employees
 * @returns { React.Component}
 */
const DataTableList = () => {
  const [pending, setPending] = useState(true)
  const [rows, setRows] = useState([])
  const [search, setSearch] = useState('')

  // Use context to display employeeList in DataTable
  const { employeeList, setEmployeeList } = useContext(EmployeeListContext)

  // Add Loading
  useEffect(() => {
    const timeout = setTimeout(() => {
      setRows(employeeList)
      setPending(false)
    }, 500)
    return () => clearTimeout(timeout)
  }, [employeeList])

  // Filter employees
  const handleSearch = (e) => {
    setSearch(e.target.value)
    setRows(
      employeeList.filter(
        (row) =>
          row.firstName.toLowerCase().includes(search.toLowerCase()) ||
          row.lastName.toLowerCase().includes(search.toLowerCase()) ||
          row.startDate.toLowerCase().includes(search.toLowerCase()) ||
          row.department.toLowerCase().includes(search.toLowerCase()) ||
          row.dateOfBirth.toLowerCase().includes(search.toLowerCase()) ||
          row.state.toLowerCase().includes(search.toLowerCase()) ||
          row.street.toLowerCase().includes(search.toLowerCase()) ||
          row.zipCode.toLowerCase().includes(search.toLowerCase()) ||
          row.city.toLowerCase().includes(search.toLowerCase())
      )
    )
  }

  return (
    <>
      <div className="search">
        <label htmlFor="search">
          Search:
          <input
            className="search-input"
            id="search"
            type="text"
            onChange={handleSearch}
          />
        </label>
      </div>
      <DataTable
        columns={dataTableTitle}
        data={search ? rows : employeeList}
        defaultSortFieldId={1}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="400px"
        progressPending={pending}
        noDataComponent={
          <span className="search-message">
            Sorry, there is no employees matching your search.
          </span>
        }
      />
    </>
  )
}
export default DataTableList
