// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// this adds jest-dom's custom assertions
import Enzyme from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

Enzyme.configure({ adapter: new Adapter() })

global.shallowWithStore = (component, store) => {
  const context = { store }
  return Enzyme.shallow(component, { context })
}

global.console.error = console.log
