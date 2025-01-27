import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import AppContainer from './App/App.container'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <AppContainer />
  </StrictMode>
)
