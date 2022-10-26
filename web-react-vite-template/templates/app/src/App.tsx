import React from 'react'
import { Home } from './pages/Home'

function AppRouting() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  )
}

export default AppRouting
