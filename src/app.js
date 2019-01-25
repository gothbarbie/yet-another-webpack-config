import React from 'react'
import { hot } from 'react-hot-loader/root'
import Counter from './counter.js'

function App() {
  return <Counter count={10} />
}

export default hot(App)
