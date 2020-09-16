import React from 'react'
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Collection from './Collection/Collection'
import Credit from './Credit/Credit'
import Profile from './Profile/Profile'

interface PanelProps {}

const useStyles = makeStyles(() => ({
  root: {
    padding: '30px 0 0 0',
    backgroundColor: '#f1f2f5',
    height: '100vh'
  }
}))

const Panel: React.FC<PanelProps> = () => {
  const classes = useStyles()

  return (
    <main className={classes.root}>
      <Grid container>
        <Grid item xs={3}>
          <Grid container>
            <Profile
              userName="Mark Williamson"
              userEmail="example@gmail.com"
              joined="10.09.2020"
            />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container>
            {/* <Grid item> */}
            <Collection />
            {/* </Grid> */}
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container>
            {/* <Grid item xs={12}>
              <Profile
                userName="Mark Williamson"
                userEmail="example@gmail.com"
                joined="10.09.2020"
              />
            </Grid> */}
            <Grid item xs={12}>
              <Credit userBalance={200} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </main>
  )
}

export default Panel
