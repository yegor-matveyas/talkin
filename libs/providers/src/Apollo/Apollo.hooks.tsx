import { useMemo } from 'react'
import { ApolloClient, ApolloCache, ApolloLink, Observable, HttpLink, gql } from '@apollo/client'

import { AuthUtils } from '@utils'

const REFRESH_TOKENS = gql`
  mutation refreshTokens {
    refreshTokens {
      accessToken
      expiresAt
    }
  }
`

const refreshAccessToken = async <T,>(client: ApolloClient<T>) => {
  try {
    const { data } = await client.mutate({ mutation: REFRESH_TOKENS })
    const { accessToken, expiresAt } = data.refreshTokens

    AuthUtils.setAccessToken(accessToken, expiresAt)

    return accessToken
  } catch (error) {
    console.error('Unable to refresh tokens: ', error)
    return null
  }
}

export function useRefreshLink<T>(httpLink: HttpLink, cache: ApolloCache<T>): ApolloLink {
  const refreshClient = useMemo<ApolloClient<T>>(() => {
    return new ApolloClient({
      link: httpLink,
      cache,
    })
  }, [httpLink, cache])

  return new ApolloLink((operation, forward) => {
    if (!AuthUtils.isTokenExpired()) {
      return forward(operation)
    }

    return new Observable((observer) => {
      refreshAccessToken(refreshClient)
        .then((newAccessToken) => {
          console.log('newAccessToken ', newAccessToken)
          if (newAccessToken) {
            operation.setContext(({ headers = {} }) => ({
              headers: {
                ...headers,
                Authorization: `Bearer ${newAccessToken}`,
              },
            }))
          }
          forward(operation).subscribe(observer)
        })
        .catch((error) => observer.error(error))
    })
  })
}
