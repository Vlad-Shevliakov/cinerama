import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import AppLayout from '../../components/AppLayout/AppLayout'
import hobbitImage from '../../assets/rastr/the_hobbit_home.jpg'

interface HomeProps {}

const useStyles = makeStyles(() => ({
  root: {},
  container: {
    position: 'relative',
    height: 675,
    backgroundImage: `url(${hobbitImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center bottom'
  },
  captionBox: {
    position: 'absolute',
    bottom: 0,
    left: '7%',
    width: 450,
    height: 200,
    backdropFilter: 'blur(4px)',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    boxShadow: 'inset 0 0 0 200px rgba(0,0,0,0.35)',
    padding: '30px 10px 20px 25px'
  },
  title: {
    fontWeight: 500,
    fontSize: 25,
    color: '#fff'
  }
}))

const Home: React.FC<HomeProps> = () => {
  const classes = useStyles()

  return (
    <AppLayout>
      <div className={classes.container}>
        <div className={classes.captionBox}>
          <Typography className={classes.title} component="h1">
            The Hobbit: The Desolation of Smaug
          </Typography>
        </div>
      </div>
    </AppLayout>
  )
}

export default Home
