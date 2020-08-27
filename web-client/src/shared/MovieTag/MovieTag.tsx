import React from 'react'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { tagByStatus } from '../../utils/helpers'

interface MovieTagProps {
  status: 1 | 2 | 3 // check ..utils/helpers.ts for statuses
}

interface MovieTagParams {
  tagColor: string
}

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: (props: MovieTagParams) => props.tagColor,
    display: 'inline-block',
    padding: '4px 10px',
    borderRadius: 6
  },
  text: {
    color: '#fff',
    fontWeight: 500,
    fontSize: '18px',
    userSelect: 'none'
  }
}))

const MovieTag: React.FC<MovieTagProps> = ({ status }) => {
  const tag = tagByStatus(status)

  const classes = useStyles({ tagColor: tag.color })

  return (
    <div className={classes.root}>
      <Typography className={classes.text} component="span">
        {tag.text}
      </Typography>
    </div>
  )
}

export default MovieTag
