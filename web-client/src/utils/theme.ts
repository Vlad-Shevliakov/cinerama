import { createMuiTheme } from '@material-ui/core'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#383838',
      // main: '#ff9900',
      light: '#fff'
    },
    secondary: {
      main: '#00a347'
    },
    background: {
      default: '#fff'
      // default: '#f8fafa'
      // default: '#F8F8F8'
      // default: '#D8D8D8' // maybe search?
    }
  },
  typography: {
    fontFamily: [
      'Ubuntu',
      'Roboto',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
})
