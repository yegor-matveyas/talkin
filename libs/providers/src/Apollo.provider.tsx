import { useMemo, ReactNode } from 'react'
import { ApolloClient, ApolloLink, ApolloProvider as Provider, InMemoryCache, HttpLink, from } from '@apollo/client'
import { onError } from '@apollo/client/link/error'

import { AuthUtils } from '@utils'

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers }: { headers: Headers }) => ({
    headers: {
      ...headers,
      authorization: AuthUtils.isAuthenticated() ? `Bearer ${AuthUtils.getAccessToken()}` : '',
    },
  }))
  return forward(operation)
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    )

  if (networkError) console.log(`[Network error]: ${networkError}`)
})

type ApolloProviderProps = {
  serverUri: string
  children: ReactNode
}

export default function ApolloProvider({ serverUri, children }: ApolloProviderProps) {
  const httpLink = useMemo(() => {
    return new HttpLink({
      uri: serverUri,
      credentials: 'include',
    })
  }, [serverUri])

  const client = useMemo(() => {
    return new ApolloClient({
      link: from([errorLink, authLink, httpLink]),
      cache: new InMemoryCache(),
    })
  }, [httpLink])

  return <Provider client={client}>{children}</Provider>
}
