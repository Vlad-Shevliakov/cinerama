import React from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import history from '../../../utils/history'
import routes from '../../../services/routes'

interface ProfileProps {
  userName: string
  userEmail: string
  joined: string
}

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    width: '100%',
    maxWidth: 334,
    margin: '0 auto 40px auto',
    padding: '15px 17px 20px 15px',
    // marginBottom: 40,
    borderRadius: 12,
    boxShadow: '0 9px 17px rgba(0,0,0,0.2)',
    backgroundColor: '#fff'
  },
  avatar: {
    width: 200,
    height: 200,
    backgroundColor: red[500],
    boxShadow: '0 9px 17px rgba(0,0,0,0.2)',
    borderRadius: '50%',
    margin: '30px auto 40px auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',

    fontWeight: 500,
    fontSize: 60
  },
  userName: {
    fontSize: 19,
    fontWeight: 500,
    textAlign: 'center',
    marginBottom: 10
  },
  email: {
    fontSize: 15,
    marginBottom: 3,
    color: '#808080',
    textAlign: 'center'
  },
  joined: {
    fontSize: 12,
    marginBottom: 50,
    color: '#808080',
    textAlign: 'center',
    '& > span': {
      fontSize: 'inherit'
    }
  },
  orderButton: {
    width: '100%',
    backgroundColor: '#e2e2e2',
    textTransform: 'none',
    borderRadius: 12,
    fontSize: 15,
    padding: '12px 0'
  },
  exitButton: {
    top: 10,
    left: 10,
    color: red[600],
    position: 'absolute',
    transform: 'rotate(180deg)'
  }
}))

const Profile: React.FC<ProfileProps> = ({ userName, userEmail, joined }) => {
  const classes = useStyles()

  const handleOrderClick = (): void => {
    history.push(routes.premieres)
  }

  const handleExitClick = (): void => {
    console.log('exit')
  }

  return (
    <section className={classes.root}>
      <Box className={classes.avatar}>{userName[0]}</Box>
      <Typography component="h3" className={classes.userName}>
        {userName}
      </Typography>
      <Typography component="p" className={classes.email}>
        {userEmail}
      </Typography>
      <Typography component="p" className={classes.joined}>
        <Typography component="span">joined: &nbsp;</Typography>
        {joined}
      </Typography>
      <Button onClick={handleOrderClick} className={classes.orderButton}>
        Order Movie
      </Button>
      <IconButton onClick={handleExitClick} className={classes.exitButton}>
        <Tooltip title="exit">
          <ExitToAppIcon />
        </Tooltip>
      </IconButton>
    </section>
  )
}

export default Profile
