import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const LogIn = lazy(() => import('./pages/LogIn'))

interface AppInterface {}

const App: React.FC<AppInterface> = () => {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LogIn} />
      </Switch>
    </Suspense>
  )
}

export default App
