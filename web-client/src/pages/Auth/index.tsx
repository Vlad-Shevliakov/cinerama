import React, { useState } from 'react'
import Icon from '@material-ui/core/SvgIcon'
import { red } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import history from '../../utils/history'
import Form from './Form'
import { ReactComponent as SmileIcon } from '../../assets/svg/smile.svg'

interface AuthProps {}

const useStyles = makeStyles(() => ({
  root: {
    background: '#fff',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    width: '100%',
    maxWidth: 400
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 500
  },
  titleBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  smileIcon: {
    fontSize: 50,
    '&:hover': {
      animation: '$spin 1s infinite linear'
    }
  },
  signupButton: {
    display: 'block',
    margin: '0 auto',
    marginTop: 10,
    fontSize: 15,
    transition: 'all .3s',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#757575'
    }
  },
  back: {
    position: 'absolute',
    top: 30,
    left: 35,
    transition: 'all .3s',
    color: red[500],
    '&:hover': {
      transform: 'scale(1.3)'
    }
  },
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)'
    },
    '100%': {
      transform: 'rotate(360deg);'
    }
  }
}))

const Auth: React.FC<AuthProps> = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true)

  const switchAuthMode = () => {
    setIsLogin(!isLogin)
  }

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <section className={classes.container}>
        <div className={classes.titleBox}>
          <Typography className={classes.title} component="span">
            Welcome
          </Typography>
          <Icon className={classes.smileIcon}>
            <SmileIcon />
          </Icon>
        </div>
        <Form isLogin={isLogin} />
        <Button
          disableRipple
          onClick={switchAuthMode}
          className={classes.signupButton}
        >
          {!isLogin ? 'I have an account' : "I don't have an account"}
        </Button>
      </section>
      <IconButton className={classes.back} onClick={() => history.goBack()}>
        <ArrowBackIcon />
      </IconButton>
    </div>
  )
}

export default Auth
