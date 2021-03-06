import React from 'react'
import Grid from '@material-ui/core/Grid'
import atlantisImage from '../../../assets/rastr/pic.jpg'
import { makeStyles } from '@material-ui/core'
import MovieItem from '../../../components/MovieItem/MovieItem'

interface SelectedMoviesProps {}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 1,
    backgroundImage: `url(${atlantisImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
  },
  container: {
    maxWidth: 1300,
    [theme.breakpoints.up('lg')]: {
      maxWidth: 1170
    },
    margin: '0 auto',
    padding: '50px 0'
  },
  list: {
    margin: 0,
    padding: 0,
    '& > li': {
      //   flexBasis: '20%',
      //   maxWidth: '20%',
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 35
    }
  }
}))

type Movie = {
  id: string
  url: string
  title: string
  duration: number
}

const tempList: Movie[] = [
  {
    id: '001',
    url:
      'https://res.cloudinary.com/dct4oinuz/image/upload/v1598614119/cine/movies/big_lebowski.jpg',
    title: 'The Big Lebowski',
    duration: 117
  },
  {
    id: '002',
    url:
      'https://res.cloudinary.com/dct4oinuz/image/upload/v1598614119/cine/movies/big_lebowski.jpg',
    title: 'The Big Lebowski',
    duration: 80
  },
  {
    id: '003',
    url:
      'https://res.cloudinary.com/dct4oinuz/image/upload/v1598614119/cine/movies/big_lebowski.jpg',
    title: 'The Big Lebowski',
    duration: 180
  },
  {
    id: '004',
    url:
      'https://res.cloudinary.com/dct4oinuz/image/upload/v1598614119/cine/movies/big_lebowski.jpg',
    title: 'The Big Lebowski',
    duration: 182
  },
  {
    id: '005',
    url:
      'https://res.cloudinary.com/dct4oinuz/image/upload/v1598614119/cine/movies/big_lebowski.jpg',
    title: 'The Big Lebowski',
    duration: 189
  },
  {
    id: '006',
    url:
      'https://res.cloudinary.com/dct4oinuz/image/upload/v1598614119/cine/movies/big_lebowski.jpg',
    title: 'The Big Lebowski',
    duration: 178
  }
]

const SelectedMovies: React.FC<SelectedMoviesProps> = () => {
  const classes = useStyles()

  return (
    <section className={classes.root}>
      <div className={classes.container}>
        <Grid container component="ul" className={classes.list}>
          {tempList.map((movie: Movie) => (
            <Grid key={movie.id} component="li" item xs={3}>
              <MovieItem
                key={movie.id}
                id={movie.id}
                title={movie.title}
                urlImg={movie.url}
                duration={movie.duration}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  )
}

export default SelectedMovies
