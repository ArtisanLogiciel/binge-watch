import * as React from 'react'
import {AppProviders} from './context'
import MyApp from './BingeWatchApp'

function App() {
  return (
    <AppProviders>
      <AppConsumer />
    </AppProviders>
  )
}

const AppConsumer = () => {
  return (
    <MyApp/>
  )
}

export {App}