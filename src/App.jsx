import * as React from 'react'
import {AppContextProviders} from './context'
import MyApp from './BingeWatchApp'

function App() {
  return (
    <AppContextProviders>
      <MyApp />
    </AppContextProviders>
  )
}

/*
const AppConsumer = () => {
  return (
    <MyApp/>
  )
}
*/

export {App}