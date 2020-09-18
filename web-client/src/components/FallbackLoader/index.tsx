import React from 'react'
import { red } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'

interface FallbackLoaderProps {}

const useStyles = makeStyles(() => ({
  circle: {
    color: red[500]
  }
}))

const FallbackLoader: React.FC<FallbackLoaderProps> = () => {
  const classes = useStyles()

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <CircularProgress
        size={100}
        classes={{
          root: classes.circle
        }}
      />
    </Box>
  )
}

export default FallbackLoader
