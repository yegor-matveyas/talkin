import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@providers'

import App from './App'

export default function AppContainer() {
  return (
    <ApolloProvider serverUri={import.meta.env.VITE_SERVER_URI}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  )
}
