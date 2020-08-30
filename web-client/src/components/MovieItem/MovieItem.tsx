import React from 'react'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import { minutesToFormattedString } from '../../utils/helpers'

interface MovieItemProps {
  title: string
  urlImg: string
  duration: number
}

interface MovieItemStyles {
  urlImg: string
}

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    // margin: '10px',
    width: 250,
    height: 400,
    overflow: 'hidden',
    '&::before': {
      content: "''",
      position: 'absolute',
      zIndex: 100,
      width: '100%',
      height: 110,
      bottom: 0,
      background: 'linear-gradient(to bottom, transparent 0%, black 100%)'
    }
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundImage: (props: MovieItemStyles) => `url(${props.urlImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    transition: 'all .5s cubic-bezier(0.000, 0.000, 0.580, 1.000)',
    '&:hover': {
      transform: 'scale(1.2)'
    }
  },
  info: {
    position: 'absolute',
    zIndex: 110,
    padding: '2px 10px 15px 10px',
    bottom: 0,
    width: '100%',
    height: 60,
    '& > p': {
      color: '#fff',
      fontWeight: 500,
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    }
  },
  duration: {
    color: '#ffc107',
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    '& > span': {
      marginLeft: 5
    }
  }
}))

const MovieItem: React.FC<MovieItemProps> = ({ title, urlImg, duration }) => {
  const classes = useStyles({ urlImg })

  const formattedDuration = minutesToFormattedString(duration)

  return (
    <div className={classes.root}>
      <div className={classes.container} />
      <div className={classes.info}>
        <Typography component="p">{title}</Typography>
        <div className={classes.duration}>
          <AccessTimeIcon />
          <Typography component="span">{formattedDuration}</Typography>
        </div>
      </div>
    </div>
  )
}

export default MovieItem
