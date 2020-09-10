import React from 'react'
import Credit from './Credit/Credit'
import Profile from './Profile/Profile'

interface PanelProps {}

const Panel: React.FC<PanelProps> = () => {
  return (
    <main>
      <Profile
        userName="Mark Williamson"
        userEmail="example@gmail.com"
        joined="10.09.2020"
      />
      <Credit userBalance={200} />
    </main>
  )
}

export default Panel
