import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import ImagesGrid from '../ImagesGrid'

describe('ImagesGrid Component', () => {
  let props
  const breeds = ['hound', 'hound: test']
  const images = {
    'hound': [
      'test-image-1',
      'test-image-2',
      'test-image-3'
    ],
    'hound: test': [
      'test-image-4',
      'test-image-5'
    ]
  }

  beforeEach(() => {
    props = {
      breeds, 
      images, 
      error: '', 
      loading: false, 
      fetchImages: jest.fn()
    }
  })

  it('should render ImagesGrid component', () => {
    const { container } = render(
      <ImagesGrid {...props} />
    )
    expect(container).toBeInTheDocument()
    expect(container.innerHTML).toMatchSnapshot()
  })

  it('should call fetchImages if breeds changes', () => {
    props.breeds = ['new-breed']
    const { container } = render(
      <ImagesGrid {...props} />
    )

    expect(props.fetchImages).toHaveBeenCalledWith(props.breeds)
  })

  it('should not call fetchImages if breeds changes', () => {
    props.breeds = []
    const { container } = render(
      <ImagesGrid {...props} />
    )

    expect(props.fetchImages).not.toHaveBeenCalled()
  })

  it('should show loader if loading is true', () => {
    props.loading = true
    const { container } = render(
      <ImagesGrid {...props} />
    )
    expect(container).toBeInTheDocument()
    expect(container.innerHTML).toMatchSnapshot()
  })


  it('should show error message if error message is set', () => {
    props.error = 'error'
    const { container } = render(
      <ImagesGrid {...props} />
    )
    expect(container).toBeInTheDocument()
    expect(container.innerHTML).toMatchSnapshot()
  })
})
