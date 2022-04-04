import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import MartketingApp from './components/MartketingApp'

export default () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <MartketingApp />
      </BrowserRouter>
    </div>
  )
}
