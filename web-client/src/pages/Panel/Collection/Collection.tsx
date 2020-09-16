import React from 'react'
import { makeStyles } from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Box from '@material-ui/core/Box'
import CollectionItem from './CollectionItem/CollectionItem'

import { collectionByUserID } from './temp_list'

interface CollectionProps {}

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%'
  },
  list: {
    // height: 635,
    height: 'calc(100vh - 65px)',
    overflow: 'auto',
    paddingLeft: 30,
    '&::-webkit-scrollbar': {
      width: '0.4em'
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: '#e2e2e2'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: red[400],
      outline: '1px solid slategrey'
    }
  }
}))

const Collection: React.FC<CollectionProps> = () => {
  const classes = useStyles()

  return (
    <section className={classes.root}>
      <Typography component="h3">My Collection</Typography>
      <Box>
        <List component="ul" className={classes.list}>
          {collectionByUserID.map((item) => (
            <ListItem key={item.id}>
              <CollectionItem
                id={item.id}
                title={item.title}
                image={item.image}
                expireIn={item.expireIn}
                category={item.category}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </section>
  )
}

export default Collection
