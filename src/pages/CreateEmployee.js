import { Link } from 'react-router-dom'
import DatePicker from '../components/DatePiker/DatePicker'
import SelectMenu from '../components/SelectMenu/SelectMenu'
import { states } from '../constants/states'
import { departments } from '../constants/departments'

const CreateEmployee = () => {
  return (
    <main>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <DatePicker />

          <label htmlFor="start-date">Start Date</label>
          <DatePicker />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" />

            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            <label htmlFor="state">State</label>
            <SelectMenu
              options={states.map((state) => ({
                ...state,
                label: state.name,
                value: state.abbreviation,
              }))}
            />
            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
          </fieldset>

          <label htmlFor="department">Department</label>
          <SelectMenu options={departments} />
        </form>
        <button>Save</button>
      </div>
      <div id="confirmation" className="modal">
        Employee Created!
      </div>
    </main>
  )
}

export default CreateEmployee
