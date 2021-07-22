import React from 'react';
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core'
import { StylesProvider, createGenerateClassName } from '@material-ui/styles'

import store from './store';
import Page from './components/Page'
import ErrorBoundary from './components/ErrorBoundary'

const generateClassName = createGenerateClassName({
  productionPrefix: 'projectdetails-'
})

function App() {
  return (
    <Provider store={store}>
      <StylesProvider generateClassName={generateClassName}>
        <CssBaseline />
        <ErrorBoundary>
          <Page />
        </ErrorBoundary>
      </StylesProvider>
    </Provider>
  );
}

export default App;


/**
 * Additional improvements covered
 * - on deleting breed, rather than making api call again for all breeds, just remove the breed from images object
 * - on changing breeds, check from state, if breeds exist in images object, then dont make api call for that
 * 
 * More for Production app
 * - Set theme of app for color and typography
 * - If each image item is used in multiple places in app, we can separate it as a component
 * - If each breed-images category is used in multiple places in app, we can separate it as a component
 */
