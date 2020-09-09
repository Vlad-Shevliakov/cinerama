import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

interface ProfileProps {
  userName: string
  userEmail: string
}

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    maxWidth: 334,
    height: 380,
    margin: '40px 0 0 40px',
    padding: '15px 17px',
    borderRadius: 12,
    boxShadow: '0 9px 17px rgba(0,0,0,0.2)'
  },
  userName: {
    textAlign: 'center'
  },
  email: {
    textAlign: 'center'
  }
}))

const Profile: React.FC<ProfileProps> = ({ userName, userEmail }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography component="h3" className={classes.userName}>
        {userName}
      </Typography>
      <Typography component="p" className={classes.email}>
        {userEmail}
      </Typography>
    </div>
  )
}

export default Profile
