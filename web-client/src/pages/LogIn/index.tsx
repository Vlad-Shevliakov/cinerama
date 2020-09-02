import React from 'react'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Form from './Form'

interface LogInProps {}

const useStyles = makeStyles(() => ({
  root: {
    background: '#fff',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {}
}))

const LogIn: React.FC<LogInProps> = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <section className={classes.container}>
        <Typography component="h3">Welcome</Typography>
        <Form />
      </section>
    </div>
  )
}

export default LogIn
