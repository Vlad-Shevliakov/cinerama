import React from 'react'
import Credit from './Credit/Credit'
import Profile from './Profile/Profile'

interface PanelProps {}

const Panel: React.FC<PanelProps> = () => {
  return (
    <section>
      <Profile userName="Mark Williamson" userEmail="example@gmail.com" />
      <Credit userBalance={200} />
    </section>
  )
}

export default Panel
