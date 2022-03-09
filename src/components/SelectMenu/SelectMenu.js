import React from 'react'
import Select from 'react-select'
import '../SelectMenu/SelectMenu.css'
import PropTypes from 'prop-types'

/**
 * A component to display SelectMenu
 * @param { array } options array of options
 * @param { function } onChange function to display option selected
 * @returns
 */
const SelectMenu = ({ options, onChange }) => {
  return (
    <Select
      options={options}
      defaultValue={{ label: options[0].label }}
      onChange={onChange}
    />
  )
}

SelectMenu.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default SelectMenu
