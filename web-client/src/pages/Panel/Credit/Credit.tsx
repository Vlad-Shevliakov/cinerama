import React from 'react'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import amountImage from '../../../assets/rastr/amountbg.jpg'

interface CreditProps {
  userBalance: number
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'inline-block',
    width: '100%',
    maxWidth: 334,
    margin: 40,
    padding: '15px 17px',
    borderRadius: 12,
    boxShadow: '0 9px 17px rgba(0,0,0,0.2)'
  },
  title: {
    marginLeft: 3,
    marginBottom: 12,
    color: '#505050'
  },
  container: {
    width: '100%',
    height: 200,
    backgroundImage: `url(${amountImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    borderRadius: 24,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontWeight: 500,
    fontSize: 27,
    userSelect: 'none'
  }
}))

const Credit: React.FC<CreditProps> = ({ userBalance }) => {
  const classes = useStyles()

  return (
    <section className={classes.root}>
      <Typography component="p" className={classes.title}>
        Available balance
      </Typography>
      <div className={classes.container}>
        <span>{userBalance}$</span>
      </div>
    </section>
  )
}

export default Credit
