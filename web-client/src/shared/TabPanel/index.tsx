import React from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { makeStyles } from '@material-ui/core'

export type TabType = {
  label: string
}

interface TabPanelProps {
  value: number
  tabs: string[]
  onTabClick: (tabIndex: number) => void
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    color: theme.palette.secondary.main,
    boxShadow: 'none',
    borderBottom: `3px solid orange`
  },
  tabs: {
    background: '#fff'
  },
  indicator: {
    height: 0
  },
  tab: {
    backgroundColor: '#fafafa',
    width: '256px',
    color: '#343434',
    fontSize: 16,
    fontWeight: 500
  },
  selected: {
    backgroundColor: '#f44336',
    fontSize: 16,
    color: '#fff'
  }
}))

function a11yProps(index: any): object {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const TabPanel: React.FC<TabPanelProps> = ({ tabs, value, onTabClick }) => {
  const classes = useStyles()

  const handleChange = (event: React.ChangeEvent<{}>, index: number): void => {
    onTabClick(index)
  }

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        classes={{
          indicator: classes.indicator,
          root: classes.tabs
        }}
      >
        {tabs.map((tab: string, ind: number) => {
          return (
            <Tab
              key={tab}
              label={tab}
              classes={{
                selected: classes.selected,
                root: classes.tab
              }}
              {...a11yProps(ind)}
            />
          )
        })}
      </Tabs>
    </div>
  )
}

export default TabPanel
