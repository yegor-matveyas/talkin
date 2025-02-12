import { RouteObject } from 'react-router-dom'

import { Auth } from '@components'

import ChatContainer from '../components/Chat/Chat.container'
import Layout from '../components/Layout/Layout'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: ':id',
        element: <ChatContainer />,
      },
    ],
  },
  {
    path: 'auth',
    element: <Auth.Layout />,
    children: [
      {
        path: 'login',
        element: <Auth.Login />,
      },
      {
        path: 'signup',
        element: <Auth.Signup />,
      },
      {
        path: 'timedout',
        element: <Auth.Timeout />,
      },
    ],
  },
]
