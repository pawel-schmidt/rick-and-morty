import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import lazy from './utils/lazy'

const Home = lazy(() => import('./pages/Home'))
const Characters = lazy(() => import('./pages/Characters'))
const Other = lazy(() => import('./pages/Other'))
const NotFound = lazy(() => import('./pages/NotFound'))

const App = (): React.ReactElement => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="characters" element={<Characters />} />
      <Route path="other" element={<Other />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
)

export default App
