import React from 'react'
import Select from 'react-select'
import '../SelectMenu/SelectMenu.css'

const SelectMenu = ({ options }) => {
  return <Select options={options} defaultValue={{ label: options[0].label }} />
}

export default SelectMenu
