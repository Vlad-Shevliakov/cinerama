interface RoutesMap {
  [name: string]: string
}

const routes: RoutesMap = {
  root: '/',
  auth: '/auth',
  events: '/events',
  premieres: '/premieres',
  panel: '/panel',
  movie: '/movie/:id'
}

export default routes
