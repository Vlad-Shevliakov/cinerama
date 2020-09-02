import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const Auth = lazy(() => import('./pages/Auth'))

interface AppInterface {}

const App: React.FC<AppInterface> = () => {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/auth" component={Auth} />
      </Switch>
    </Suspense>
  )
}

export default App
