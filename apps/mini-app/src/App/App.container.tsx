import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider, TimeoutProvider } from '@providers'

import App from './App'

export default function AppContainer() {
  return (
    <ApolloProvider serverUri={import.meta.env.VITE_SERVER_URI}>
      <BrowserRouter>
        <TimeoutProvider>
          <App />
        </TimeoutProvider>
      </BrowserRouter>
    </ApolloProvider>
  )
}
