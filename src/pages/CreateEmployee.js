import { Link, useHistory } from 'react-router-dom'
import DatePicker from '../components/DatePiker/DatePicker'
import SelectMenu from '../components/SelectMenu/SelectMenu'
import { states } from '../constants/states'
import { departments } from '../constants/departments'
import { EmployeeListContext } from '../contexts/EmployeeListContext'
import { useContext, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Modal from 'mm-simple-modal'
import 'mm-simple-modal/dist/index.css'

const CreateEmployee = () => {
  const { employeeList, setEmployeeList } = useContext(EmployeeListContext)
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const [showModal, setShowModal] = useState(false)

  const closeModal = () => {
    showModal && setShowModal(false)
    reset()
    history.push('/employee')
  }

  const history = useHistory()
  const onSubmit = (data) => {
    // Formats data
    data.dateOfBirth = data.dateOfBirth.toLocaleDateString('en-US')
    data.startDate = data.startDate.toLocaleDateString('en-US')
    data.state = data.state.label
    data.department = data.department.label

    setEmployeeList([...employeeList, { ...data }])
    setShowModal(true)
  }

  return (
    <main>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form onSubmit={handleSubmit(onSubmit)} id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            {...register('firstName', { required: true })}
          />
          {errors.firstName && (
            <p className="errormessage">Please check the First Name</p>
          )}

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            {...register('lastName', { required: true })}
          />
          {errors.lastName && (
            <p className="errormessage">Please check the Last Name</p>
          )}

          <label htmlFor="date-of-birth">Date of Birth</label>
          <Controller
            control={control}
            rules={{ required: true }}
            name="dateOfBirth"
            render={({ field }) => (
              <DatePicker
                onChange={(date) => field.onChange(date)}
                selected={field.value}
              />
            )}
          />
          {errors.dateOfBirth && (
            <p className="errormessage">Please check the Date Of Birth</p>
          )}

          <label htmlFor="start-date">Start Date</label>
          <Controller
            control={control}
            rules={{ required: true }}
            name="startDate"
            render={({ field }) => (
              <DatePicker
                onChange={(date) => field.onChange(date)}
                selected={field.value}
              />
            )}
          />
          {errors.startDate && (
            <p className="errormessage">Please check the Start Date</p>
          )}

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              id="street"
              type="text"
              {...register('street', { required: true })}
            />
            {errors.street && (
              <p className="errormessage">Please check the Street</p>
            )}

            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              {...register('city', { required: true })}
            />
            {errors.city && (
              <p className="errormessage">Please check the City</p>
            )}

            <label htmlFor="state">State</label>
            <Controller
              control={control}
              name="state"
              rules={{ required: true }}
              render={({ field }) => (
                <SelectMenu
                  options={states.map((state) => ({
                    ...state,
                    label: state.name,
                    value: state.abbreviation,
                  }))}
                  onChange={(option) => field.onChange(option)}
                />
              )}
            />
            {errors.state && (
              <p className="errormessage">Please check the State</p>
            )}

            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              type="number"
              {...register('zipCode', { required: true })}
            />
            {errors.zipCode && (
              <p className="errormessage">Please check the Zip Code</p>
            )}
          </fieldset>

          <label htmlFor="department">Department</label>
          <Controller
            control={control}
            name="department"
            rules={{ required: true }}
            render={({ field }) => (
              <SelectMenu
                options={departments}
                onChange={(option) => field.onChange(option)}
              />
            )}
          />
          {errors.department && (
            <p className="errormessage">Please check the Department</p>
          )}

          <button>Save</button>
          <Modal show={showModal} onCloseModal={closeModal}>
            Employee Created!
          </Modal>
        </form>
      </div>
    </main>
  )
}

export default CreateEmployee
