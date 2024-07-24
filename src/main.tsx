import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { MoviesProvider } from './contexts/MoviesContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MoviesProvider>
      <App />
    </MoviesProvider>
  </React.StrictMode>,
)
