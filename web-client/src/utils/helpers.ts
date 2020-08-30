import { green, red, amber } from '@material-ui/core/colors'

type tag = {
  color: string
  text: string
}

export const tagByStatus = (status: number): tag => {
  switch (status) {
    case 1:
      return {
        color: amber[600],
        text: 'Soon'
      }
    case 2:
      return {
        color: green[700],
        text: 'New'
      }
    case 3:
      return {
        color: red[800],
        text: 'Out of show'
      }
    default:
      return {
        color: red[800],
        text: 'Out of show'
      }
  }
}

// prettier-ignore
export const minutesToFormattedString = (n: number): string => `${Math.floor(n / 60)}h ${n % 60}min`

/*
    Action
    Fantasy
*/
