import React from 'react'
import { makeStyles } from '@material-ui/core'

type route = {
  path: string
  text: string
}

interface HeaderProps {
  routes: route[]
}

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'limegreen'
  }
}))

const Header: React.FC<HeaderProps> = ({ routes, children }) => {
  const classes = useStyles()

  return (
    <>
      <header className={classes.root}>
        {children}
        <nav>
          <ul>
            {routes.map((route, index) => (
              <li key={index}>
                <span>{route.text}</span>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
