import React from 'react'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

interface CollectionItemProps {
  id: string
  title: string
  image: string
  expireIn: number
  category: string
}

interface CollectionItemStyles {
  image: string
}

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    border: '1px #aeaeae',
    display: 'flex',
    width: '100%',
    maxWidth: 550,
    height: 110,
    backgroundColor: '#fff',
    borderRadius: '15px 10px 10px 15px',
    boxShadow: '-3px 4px 6px rgba(0,0,0,0.2)'
  },
  cover: {
    position: 'absolute',
    width: 38,
    height: 110,
    top: 0,
    right: -28,
    overflow: 'hidden'
  },
  triangle: {
    backgroundColor: '#fff',
    position: 'relative',
    width: 70,
    height: 110,
    borderRadius: 10,
    display: 'inline-block',
    right: 60,
    transform: 'rotate(-180deg)',
    '&::before, &::after': {
      position: 'absolute',
      width: 'inherit',
      height: 'inherit',
      borderRadius: 'inherit',
      background: 'inherit',
      content: "''",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: 'auto'
    },
    '&::before': {
      transform: 'rotate(60deg)'
    },
    '&::after': {
      transform: 'rotate(-60deg)'
    }
  },
  imageContainer: {
    width: 220,
    height: '100%',
    marginRight: 15,
    backgroundImage: (props: CollectionItemStyles) => `url(${props.image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15
  },
  title: {
    fontSize: 17,
    fontWeight: 500,
    padding: '15px 0 7px 0'
  },
  category: {
    fontSize: 14,
    color: '#808080'
  }
}))

const CollectionItem: React.FC<CollectionItemProps> = ({
  title,
  image,
  expireIn,
  category
}) => {
  const classes = useStyles({ image })

  return (
    <div className={classes.root}>
      <div className={classes.imageContainer} />
      <Box>
        <Typography component="p" className={classes.title}>
          {title}
        </Typography>
        <Typography component="p" className={classes.category}>
          #{category}
        </Typography>
      </Box>
      <div className={classes.cover}>
        <div className={classes.triangle} />
      </div>
    </div>
  )
}

export default CollectionItem