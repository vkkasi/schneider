import { lazy } from 'react'

const Analytics = lazy(() => import('../../views/schneider/dashboard/analytics'))
const Ecommerce = lazy(() => import('../../views/schneider/dashboard/ecommerce'))
const Intergrated = lazy(() => import('../../views/schneider/dashboard/intergrated'))
const It = lazy(() => import('../../views/schneider/dashboard/it'))
const Facilities = lazy(() => import('../../views/schneider/dashboard/facilities'))
const Power = lazy(() => import('../../views/schneider/dashboard/power'))
const Installation = lazy(() => import('../../views/schneider/dashboard/installation'))
const Resources = lazy(() => import('../../views/schneider/resources'))
const Alarms = lazy(() => import('../../views/schneider/alarms'))
const Reports = lazy(() => import('../../views/schneider/reports'))

const SchneiderRoutes = [
  {
    path: '/dashboard/analytics',
    element: <Analytics />,
    exact: true
  },
  {
    path: '/dashboard/ecommerce',
    element: <Ecommerce />,
    exact: true
  },
  {
    path: '/dashboard/intergrated',
    element: <Intergrated />,
    exact: true
  },
  {
    path: '/dashboard/it',
    element: <It />,
    exact: true
  },
  {
    path: '/dashboard/facilities',
    element: <Facilities />,
    exact: true
  },
  {
    path: '/dashboard/power',
    element: <Power />,
    exact: true
  },
  {
    path: '/dashboard/installation',
    element: <Installation />,
    exact: true
  },
  {
    path: '/resources',
    element: <Resources />,
    exact: true
  },
  {
    path: '/alarms',
    element: <Alarms />,
    exact: true
  },
  {
    path: '/reports',
    element: <Reports />,
    exact: true
  }
]

export default SchneiderRoutes
