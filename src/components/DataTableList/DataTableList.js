import { useContext, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { dataTableTitle } from '../../constants/dataTableTitle'
import { EmployeeListContext } from '../../contexts/EmployeeListContext'

const DataTableList = () => {
  const [pending, setPending] = useState(true)
  const [rows, setRows] = useState([])
  const [search, setSearch] = useState('')
  const { employeeList, setEmployeeList } = useContext(EmployeeListContext)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRows(employeeList)
      setPending(false)
    }, 500)
    return () => clearTimeout(timeout)
  }, [employeeList])

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setRows(
      employeeList.filter((row) =>
        row.firstName.toLowerCase().includes(search.toLowerCase())
      )
    )
  }

  return (
    <>
      <div className="search">
        <label htmlFor="search">
          Search:
          <input id="search" type="text" onChange={handleSearch} />
        </label>
      </div>
      <DataTable
        columns={dataTableTitle}
        data={search ? rows : employeeList}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="400px"
        progressPending={pending}
      />
    </>
  )
}
export default DataTableList
