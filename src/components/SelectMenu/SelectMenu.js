import React from 'react'
import Select from 'react-select'
import '../SelectMenu/SelectMenu.css'

const SelectMenu = ({ options, onChange }) => {
  return (
    <Select
      options={options}
      defaultValue={{ label: options[0].label }}
      onChange={onChange}
    />
  )
}

export default SelectMenu
