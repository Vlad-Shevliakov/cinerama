import React from 'react'
import Header from '../Header/Header'

interface AppLayoutProps {}

type route = {
  path: string
  text: string
}

const routes: route[] = [
  {
    text: 'Premieres',
    path: '/premieres'
  },
  {
    text: 'Events',
    path: '/events'
  }
]

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <Header routes={routes} />
      <main>{children}</main>
    </>
  )
}

export default AppLayout
