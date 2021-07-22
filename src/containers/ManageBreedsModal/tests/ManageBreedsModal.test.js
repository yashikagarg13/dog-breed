/* global shallowWithStore */
import React from 'react'
import { createMockStore } from 'redux-test-utils'
import toJson from 'enzyme-to-json'

import { fetchBreeds } from '../../../reducers/breed'
import ManageBreedsModal from '../ManageBreedsModal'

const state = {
  breed: {
    loading: false,
    fetched: false,
    error: '',
    data: ['hound']
  }
}

describe('ManageBreedsModal Component', () => {
  let wrapper, store

  beforeEach(() => {
    store = createMockStore(state)
    wrapper = shallowWithStore(<ManageBreedsModal store={store} />)
  })

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should dispatch fetchBreeds', () => {
    wrapper.props().children.props.fetchBreeds()
    expect(store.isActionDispatched(fetchBreeds()))
  })
})
