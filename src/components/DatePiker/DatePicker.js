import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import '../DatePiker/DatePicker.css'

const DatePicker = ({ onChange, selected }) => {
  return (
    <Datepicker
      selected={selected}
      onChange={onChange}
      todayButton="Today Date"
      dateFormat="yyyy/MM/dd"
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
    />
  )
}

export default DatePicker
