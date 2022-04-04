import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core'

import Header from './components/Header'
import MartketingApp from './components/MartketingApp'

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
})

export default () => {
  return (
    <div>
      <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
          <Header />
          <MartketingApp />
        </StylesProvider>
      </BrowserRouter>
    </div>
  )
}
