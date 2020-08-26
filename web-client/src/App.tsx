import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))

interface AppInterface {}

const App: React.FC<AppInterface> = () => {
  return (
    <Suspense fallback={<div />}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Suspense>
  )
}

export default App
