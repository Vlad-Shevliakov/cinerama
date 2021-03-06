import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './services/routes'
import FallbackLoader from './components/FallbackLoader'

const Home = lazy(() => import('./pages/Home'))
const Auth = lazy(() => import('./pages/Auth'))
const Panel = lazy(() => import('./pages/Panel'))
const Movie = lazy(() => import('./pages/Movie'))

interface AppInterface {}

const App: React.FC<AppInterface> = () => {
  return (
    <Suspense fallback={<FallbackLoader />}>
      <Switch>
        <Route exact path={routes.root} component={Home} />
        <Route exact path={routes.auth} component={Auth} />
        <Route exact path={routes.panel} component={Panel} />
        <Route exact path={routes.movie} component={Movie} />
      </Switch>
    </Suspense>
  )
}

export default App
