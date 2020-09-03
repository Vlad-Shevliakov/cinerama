interface RoutesMap {
  [name: string]: string
}

const routes: RoutesMap = {
  root: '/',
  auth: '/auth',
  events: '/events'
}

export default routes
