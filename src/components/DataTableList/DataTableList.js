import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { dataTableTitle } from '../../constants/dataTableTitle'

const data = [
  {
    id: 1,
    firstName: 'mounia',
    lastName: 'fattouh',
    startDate: '12/12/2017',
    department: 'Marketing',
    dateOfBirth: '24/05/1990',
    street: '12 RUE ',
    city: '',
    state: 'california',
    zipCode: '12354',
  },
]

const DataTableList = () => {
  const [pending, setPending] = useState(true)
  const [rows, setRows] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRows(data)
      setPending(false)
    }, 2000)
    return () => clearTimeout(timeout)
  }, [])

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setRows(
      data.filter((row) =>
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
        data={search ? rows : data}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="400px"
        progressPending={pending}
      />
    </>
  )
}
export default DataTableList
