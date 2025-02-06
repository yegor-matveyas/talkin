import { RouteObject } from 'react-router-dom'

import { Auth } from '@components'

import ChatContainer from '../components/Chat/Chat.container'
import LayoutContainer from '../components/Layout/Layout.container'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <LayoutContainer />,
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
