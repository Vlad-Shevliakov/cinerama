import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Box from '@material-ui/core/Box'
import CollectionItem from './CollectionItem/CollectionItem'
import TabPanel from '../../../shared/TabPanel'
import TabContainer from '../../../shared/TabContainer'

import { collectionByUserID } from './temp_list'

interface CollectionProps {}

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%'
  },
  title: {
    fontSize: 19,
    fontWeight: 500,
    marginBottom: 10,
    paddingLeft: 46
  },
  list: {
    height: 'calc(100vh - 133px)',
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
  const [activeTab, setActiveTab] = useState<number>(0)
  const classes = useStyles()

  const collectionTabs: string[] = ['Active now', 'History']

  const handleTabClick = (tabIndex: number): void => {
    setActiveTab(tabIndex)
  }

  return (
    <section className={classes.root}>
      <Typography component="h3" className={classes.title}>
        My Collection
      </Typography>

      <Box paddingLeft="46px" marginBottom="20px">
        <TabPanel
          tabs={collectionTabs}
          value={activeTab}
          onTabClick={handleTabClick}
        />
      </Box>

      <TabContainer value={activeTab} index={0}>
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
      </TabContainer>
      <TabContainer value={activeTab} index={1}>
        <Box>
          <List component="ul" className={classes.list}>
            {collectionByUserID.map((item) => (
              <ListItem key={item.id}>
                <CollectionItem
                  isActive={false}
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
      </TabContainer>
    </section>
  )
}

export default Collection
