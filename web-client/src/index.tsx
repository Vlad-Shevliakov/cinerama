import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Router } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { Provider } from 'react-redux'
import history from './utils/history'
import { theme } from './utils/theme'
import { store } from './redux'

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          draggable
          pauseOnHover
        />
        <Provider store={store}>
          <App />
          <CssBaseline />
        </Provider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
// sudo chown -R $(whoami)
serviceWorker.unregister()
