import { useState } from 'react'
import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import '../DatePiker/DatePicker.css'

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null)

  const handleDateChange = (selectedDate) => {
    console.log(selectedDate.getTime())
    setSelectedDate(selectedDate)
  }

  return (
    <Datepicker
      selected={selectedDate}
      onChange={handleDateChange}
      scrollableYearDropdown
      showMonthDropdown
      showYearDropdown
    />
  )
}

export default DatePicker
