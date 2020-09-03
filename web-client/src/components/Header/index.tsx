import React from 'react'
import { makeStyles } from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople'
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom'
import logoImage from '../../assets/rastr/logo.png'
import routes from '../../services/routes'

interface HeaderProps {}

const useStyles = makeStyles(() => ({
  root: {
    position: 'fixed',
    display: 'flex',
    zIndex: 900,
    width: '100%',
    backdropFilter: 'blur(5px)',
    boxShadow: 'inset 0 0 0 200px rgba(255,255,255,0.15)'
  },
  container: {
    width: '100%',
    maxWidth: 400,
    margin: '0 auto'
  },
  list: {
    display: 'flex',
    '& > li': {
      display: 'flex',
      justifyContent: 'center'
    }
  },
  link: {
    color: '#fff',
    textTransform: 'uppercase',
    transition: 'all .2s',
    userSelect: 'none',
    '&:hover': {
      textDecoration: 'none',
      color: '#d8d8d8'
    },
    '& > span': {
      fontSize: 15,
      fontWeight: 500
    }
  },
  logo: {
    display: 'block',
    userSelect: 'none',
    maxWidth: 73,
    minWidth: 73,
    '& img': {
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%'
    }
  },
  auth: {
    position: 'absolute',
    right: 50,
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    backgroundColor: red[600],
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    padding: '6px 9px 6px 6px',
    transition: 'all .3s',
    '& > span': {
      fontSize: 15,
      fontWeight: 500,
      marginLeft: 5
    },
    '&:hover': {
      backgroundColor: '#fff',
      color: red[600]
    }
  }
}))

const Header: React.FC<HeaderProps> = () => {
  const classes = useStyles()

  return (
    <>
      <header className={classes.root}>
        <div className={classes.container}>
          <nav>
            <List disablePadding className={classes.list}>
              <ListItem>
                <Link
                  component={RouterLink}
                  className={classes.link}
                  to="/premieres"
                >
                  <Typography component="span">premieres</Typography>
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  component={RouterLink}
                  className={classes.logo}
                  to={routes.root}
                >
                  <img src={logoImage} alt="Cinerama logo" />
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  component={RouterLink}
                  className={classes.link}
                  to={routes.events}
                >
                  <Typography component="span">events</Typography>
                </Link>
              </ListItem>
            </List>
          </nav>
        </div>
        <div>
          <Link
            className={classes.link}
            component={RouterLink}
            to={routes.auth}
          >
            <div className={classes.auth}>
              <EmojiPeopleIcon />
              <Typography component="span">log in</Typography>
            </div>
          </Link>
        </div>
      </header>
    </>
  )
}

export default Header
