import { useState } from 'react'
import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import '../DatePiker/DatePicker.css'

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null)

  const handleDateChange = (selectedDate) => {
    setSelectedDate(selectedDate)
  }

  return (
    <Datepicker
      selected={selectedDate}
      onChange={handleDateChange}
      todayButton="Today Date"
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
    />
  )
}

export default DatePicker
