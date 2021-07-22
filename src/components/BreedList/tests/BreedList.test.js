import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import BreedList from '../BreedList'

describe('BreedList Component', () => {
  let props
  const breeds = ['hound', 'australian']

  beforeEach(() => {
    props = {
      breeds, 
      showNoBreedMessage: false, 
      onDelete: jest.fn()
    }
  })

  it('should render BreedList component', () => {
    const { container } = render(
      <BreedList {...props} />
    )
    expect(container).toBeInTheDocument()
    expect(container.innerHTML).toMatchSnapshot()
  })

  it('should show no breeds message id showNoBreedMessage is true and no  breeds selected', () => {
    props.breeds = []
    props.showNoBreedMessage = true
    const { container } = render(
      <BreedList {...props} />
    )
    expect(container).toBeInTheDocument()
    expect(container.innerHTML).toMatchSnapshot()
  })

  it('should call onDelete on clicking delete icon in breed chip', () => {
    const { container, getByTestId } = render(
      <BreedList {...props} />
    )
    const closeBtn = getByTestId('hound-close-icon')
    fireEvent.click(closeBtn)

    expect(props.onDelete).toHaveBeenCalledWith('hound')
  })
})
