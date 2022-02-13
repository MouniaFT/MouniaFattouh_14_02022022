import './DataTableList.css'
import { dataTableTitle } from '../../constants/dataTableTitle'
import DataTable from 'react-data-table-component'

const data = [
  {
    id: 1,
    title: 'Beetlejuice',
    year: '1988',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
]

const DataTableList = () => {
  return <DataTable columns={dataTableTitle} data={data} />
}

export default DataTableList
