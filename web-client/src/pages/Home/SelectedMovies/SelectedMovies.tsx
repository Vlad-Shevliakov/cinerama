import React from 'react'
import atlantisImage from '../../../assets/rastr/pic.jpg'
import { makeStyles } from '@material-ui/core'
import MovieItem from '../../../components/MovieItem/MovieItem'

interface SelectedMoviesProps {}

const useStyles = makeStyles(() => ({
  root: {
    padding: 1,
    backgroundImage: `url(${atlantisImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
    // height: 1000
  },
  container: {
    margin: '50px 20px'
  },
  list: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap'
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
    duration: 117
  },
  {
    id: '003',
    url:
      'https://res.cloudinary.com/dct4oinuz/image/upload/v1598614119/cine/movies/big_lebowski.jpg',
    title: 'The Big Lebowski',
    duration: 117
  },
  {
    id: '004',
    url:
      'https://res.cloudinary.com/dct4oinuz/image/upload/v1598614119/cine/movies/big_lebowski.jpg',
    title: 'The Big Lebowski',
    duration: 117
  }
]

const SelectedMovies: React.FC<SelectedMoviesProps> = () => {
  const classes = useStyles()

  return (
    <section className={classes.root}>
      <div className={classes.container}>
        {/*  */}
        <ul className={classes.list}>
          {tempList.map((movie) => (
            <MovieItem
              key={movie.id}
              title={movie.title}
              urlImg={movie.url}
              duration={movie.duration}
            />
          ))}
        </ul>
        {/*  */}
      </div>
    </section>
  )
}

export default SelectedMovies
