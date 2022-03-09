import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import '../DatePiker/DatePicker.css'
import PropTypes from 'prop-types'

/**
 * A component to display DatePicker
 * @param { string } selected a date selected
 * @param { function } onChange function to display date
 * @returns
 */
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

DatePicker.propTypes = {
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default DatePicker
