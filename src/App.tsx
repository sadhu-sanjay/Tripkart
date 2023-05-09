import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Layout from './components/layout/layout'
import { MantineProvider } from '@mantine/core'


function  App() {

  return (
    <MantineProvider>
      <Layout> </Layout>
    </MantineProvider>
  )

}

export default App
 
