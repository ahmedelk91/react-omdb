// Developer TODO: Load in App component and render to the DOM
import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './Home.js'
import Home from './Home.js'

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
)

ReactDOM.render(
  <Home />,
  document.getElementById('root')
)
