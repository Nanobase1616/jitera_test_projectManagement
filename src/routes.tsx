import React, { PropsWithChildren } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import authenticationSession from '@utils/authenticationSession'
import Page404 from '@pages/Page404'
import Page500 from '@pages/Page500'
import ExamplePage from '@pages/Example'
import QuotesEstimatesPage from 'src/pages/QuotesEstimatesPage/index'

type ProtectedRouteProps = {
  redirect?: string
}
const ProtectedRoute: React.FunctionComponent<
  PropsWithChildren<ProtectedRouteProps>
> = ({ children, redirect = '/' }) => {
  const authenticated = authenticationSession.getAuthenticatedStatus()

  if (!authenticated) {
    return <Navigate to={redirect} replace />
  }

  return children
}

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: '/quotes-estimates',
    element: (
      <ProtectedRoute>
        <QuotesEstimatesPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/404',
    element: <Page404 />,
  },
  {
    path: '/500',
    element: <Page500 />,
  },
  {
    path: '/example',
    element: <ExamplePage />,
  },
  {
    path: '*',
    element: <Navigate to="/404" />,
  },
])

export default router