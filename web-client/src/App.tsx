import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './services/routes'

const Home = lazy(() => import('./pages/Home'))
const Auth = lazy(() => import('./pages/Auth'))

interface AppInterface {}

const App: React.FC<AppInterface> = () => {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <Switch>
        <Route exact path={routes.root} component={Home} />
        <Route exact path={routes.auth} component={Auth} />
      </Switch>
    </Suspense>
  )
}

export default App
