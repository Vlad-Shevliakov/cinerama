import React from 'react'
import AppLayout from '../../components/AppLayout/AppLayout'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

interface MovieProps {}

interface ParamTypes {
  id: string
}

const useStyles = makeStyles(() => ({
  root: {}
}))

const Movie: React.FC<MovieProps> = () => {
  const { id } = useParams<ParamTypes>()
  const classes = useStyles()

  return (
    <AppLayout>
      <div className={classes.root}>
        <p>{id}</p>
      </div>
    </AppLayout>
  )
}

export default Movie
