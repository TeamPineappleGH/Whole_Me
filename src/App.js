import React, { useState, useEffect } from 'react'
import { View, LogBox } from 'react-native'
import { Provider } from 'react-redux'
import store from './store/store'
import 'utils/ignore'
LogBox.ignoreAllLogs(true);

// assets
import { imageAssets } from 'theme/images'
import { fontAssets } from 'theme/fonts'
import Router from './routes'

const App = () => {
  // state
  const [didLoad, setDidLoad] = useState(false)

  // handler
  const handleLoadAssets = async () => {
    // assets preloading
    await Promise.all([...imageAssets, ...fontAssets])
    setDidLoad(true)
  }

  // lifecycle
  useEffect(() => {
    handleLoadAssets()
  }, [])

  // rendering
  if (!didLoad) return <View />
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App
