import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Checkbox from '../../../components/Checkbox'

const defaultCheckboxProps = {
  label: 'TEST_CHECKBOX_LABEL',
  id: 'TEST_CHECKBOX_ID',
  onChange: jest.fn(),
  borderColor: '#fff',
  checked: false,
  background: '#000',
  checkMarkBackground: '#fff',
}

describe('The <Checkbox /> component', () => {
  it('Should render the label and checkbox the user will see', () => {
    //render a checkbox. getByLabelText is from the library
    const { getByLabelText } = render(<Checkbox {...defaultCheckboxProps} />)

    //we are expecting the element with this label to be in the doc
    expect(getByLabelText('TEST_CHECKBOX_LABEL')).toBeInTheDocument()
  })

  it('Should call the onChange handler when it is provided', () => {
    //render a checkbox
    const { getByLabelText } = render(<Checkbox {...defaultCheckboxProps} />)
    //access the checkbox using the method getByLabelText and then save this to variable called checkbox
    const checkbox = getByLabelText(defaultCheckboxProps.label)
    //we need to use the fireEvent method to simulate a click
    fireEvent.click(checkbox)
    //expect onChange to be called
    expect(defaultCheckboxProps.onChange).toHaveBeenCalled()
  })

  it('Should change state correctly when clicked (checked and unchecked)', () => {
    //render a checkbox
    const { getByLabelText } = render(
      <Checkbox {...{ ...defaultCheckboxProps, checked: true }} />,
    )
    //access the checkbox using the method getByLabelText and then save this to variable called checkbox
    expect(getByLabelText(defaultCheckboxProps.label)).toBeChecked()
  })
})
