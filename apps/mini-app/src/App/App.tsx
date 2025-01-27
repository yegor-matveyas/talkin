import { useRoutes } from 'react-router-dom'

import { routes } from './routes'

import '../index.scss'

export default function App() {
  const element = useRoutes(routes)
  return element
}
