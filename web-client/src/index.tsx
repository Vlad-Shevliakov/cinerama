import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Router } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import history from './utils/history'
import { theme } from './utils/theme'

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
// sudo chown -R $(whoami)
serviceWorker.unregister()
