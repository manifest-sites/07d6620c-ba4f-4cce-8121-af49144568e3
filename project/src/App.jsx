import { useState, useEffect } from 'react'
import Monetization from './components/monetization/Monetization'
import OctopusApp from './components/OctopusApp'

function App() {

  return (
    <Monetization>
      <OctopusApp />
    </Monetization>
  )
}

export default App