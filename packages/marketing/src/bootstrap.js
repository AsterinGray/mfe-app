import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const mount = (el) => {
  console.log(el)
  ReactDOM.render(<App />, el)
}

// Mount function to start up the app

// If we are in development and in isolation
// call mount immediately

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root')

  if (devRoot) {
    console.log('devRoot presetn')
    mount(devRoot)
  }
}

// we are running through container
// and we should export the mount function
export { mount }
