import React from 'react'
import { Link } from 'react-router-dom'
import { red } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import { minutesToFormattedString } from '../../utils/helpers'

interface MovieItemProps {
  id: string
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
    borderRadius: 5,
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
    },
    '&:hover': {
      '& > $overlay': {
        opacity: 1
      },
      '& $container': {
        transform: 'scale(1.2)'
      }
    }
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundImage: (props: MovieItemStyles) => `url(${props.urlImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    transition: 'all .5s cubic-bezier(0.000, 0.000, 0.580, 1.000)'
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
  },
  overlay: {
    display: 'flex',
    opacity: 0,
    zIndex: 120,
    position: 'absolute',
    background: 'rgba(0,0,0,0.4)',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all .5s cubic-bezier(0.000, 0.000, 0.580, 1.000)',
    '& > a': {
      textDecoration: 'none'
    }
  },
  more: {
    display: 'flex',
    alignItems: 'center',
    textTransform: 'uppercase',
    transition: 'all .5s cubic-bezier(0.000, 0.000, 0.580, 1.000)',
    backgroundColor: red[600],
    borderRadius: 5,
    color: '#fff',
    padding: '6px 5px 6px 14px',
    '& > span': {
      fontSize: 15,
      fontWeight: 500,
      textOverflow: 'ellipsis'
    }
  }
}))

const MovieItem: React.FC<MovieItemProps> = ({
  id,
  title,
  urlImg,
  duration
}) => {
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
      <div className={classes.overlay}>
        <Link to={id}>
          <div className={classes.more}>
            <Typography component="span">more</Typography>
            <ArrowRightIcon />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default MovieItem
