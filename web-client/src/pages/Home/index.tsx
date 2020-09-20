import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import MovieTag from '../../shared/MovieTag/MovieTag'
import AppLayout from '../../components/AppLayout/AppLayout'
import SelectedMovies from './SelectedMovies/SelectedMovies'
import swImage from '../../assets/rastr/sw_home.jpg'

interface HomeProps {}

const useStyles = makeStyles(() => ({
  root: {},
  container: {
    position: 'relative',
    height: 675,
    backgroundImage: `url(${swImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
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
    color: '#fff',
    fontSize: 25,
    fontWeight: 500,
    lineHeight: '30px'
  },
  subInfo: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 500
  },
  genre: {
    marginTop: '7px'
  },
  year: {
    marginBottom: '5px'
  },
  tagBox: {
    marginTop: '5px'
  }
}))

const Home: React.FC<HomeProps> = () => {
  const classes = useStyles()

  return (
    <AppLayout>
      <div className={classes.container}>
        <div className={classes.captionBox}>
          <Typography className={classes.title} component="h1">
            Star Wars: Episode V - The Empire Strikes Back
          </Typography>
          <div className={classes.tagBox}>
            <MovieTag status={2} />
          </div>
          <Typography
            className={clsx(classes.subInfo, classes.genre)}
            component="p"
          >
            Genre:&nbsp;
            <Typography component="span">Adventures, Action</Typography>
          </Typography>
          <Typography
            className={clsx(classes.subInfo, classes.year)}
            component="p"
          >
            Year:&nbsp;
            <Typography component="span">1980</Typography>
          </Typography>
        </div>
      </div>
      <SelectedMovies />
    </AppLayout>
  )
}

export default Home
