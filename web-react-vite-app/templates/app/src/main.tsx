import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRouting from '@src/App'
import { GlobalStyle } from '@src/core/styles/global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <AppRouting />
    </BrowserRouter>
  </React.StrictMode>
)
