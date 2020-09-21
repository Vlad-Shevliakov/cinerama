import React from 'react'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

interface CollectionItemProps {
  id: string
  title: string
  image: string
  expireIn: number
  category: string
  isActive?: boolean
}

interface CollectionItemStyles {
  image: string
  isActive: boolean
}

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    border: '1px #aeaeae',
    display: 'flex',
    width: '100%',
    maxWidth: 550,
    height: 110,
    backgroundColor: (props: CollectionItemStyles) =>
      props.isActive ? '#fff' : '#e7e7e7',
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
    backgroundColor: (props: CollectionItemStyles) =>
      props.isActive ? '#fff' : '#e7e7e7',
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
    borderBottomLeftRadius: 15,
    position: 'relative',
    '&::before': {
      position: 'absolute',
      content: "''",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: (props: CollectionItemStyles) =>
        props.isActive ? 'transparent' : 'rgba(200,200,200, .4)'
    }
  },
  title: {
    fontSize: 17,
    fontWeight: 500,
    padding: '15px 0 7px 0',
    width: '100%',
    maxWidth: 233,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: (props: CollectionItemStyles) =>
      props.isActive ? '#333' : '#808080'
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
  category,
  isActive = true
}) => {
  const classes = useStyles({ image, isActive })

  // 5 : 15 * 100 ~ 33 (%)
  const percentage = expireIn < 10 ? expireIn * 10 : expireIn

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
      {isActive && (
        <Box
          width={60}
          display="flex"
          alignItems="center"
          marginLeft="auto"
          zIndex="50"
        >
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            circleRatio={0.75}
            styles={buildStyles({
              rotation: 1 / 2 + 1 / 8,
              strokeLinecap: 'butt',
              trailColor: '#eee'
            })}
          />
        </Box>
      )}
    </div>
  )
}

export default CollectionItem
