import React from 'react'
import { makeStyles } from '@material-ui/core'

interface FooterProps {}

const useStyles = makeStyles(() => ({
  root: {
    background: '#343434'
  }
}))

const Footer: React.FC<FooterProps> = () => {
  const classes = useStyles()

  return (
    <footer className={classes.root}>
      <span>footer</span>
    </footer>
  )
}

export default Footer
