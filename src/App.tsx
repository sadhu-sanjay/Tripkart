import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Layout from './components/layout/layout'
import { ThemeProvider } from './ThemeProvider'
import { HeaderMenuColored } from './components/header/header'


interface HeaderSearchProps {
  links: { link: string; label: string; links?: { link: string; label: string }[] }[];
}

const headerSearchProps: HeaderSearchProps = {
  links: [
    {
      link: "example_link_1",
      label: "Example Label 1",
      links: [
        {
          link: "nested_link_1",
          label: "Nested Label 1"
        },
        {
          link: "nested_link_2",
          label: "Nested Label 2"
        }
      ]
    },
    {
      link: "example_link_2",
      label: "Example Label 2"
    }
  ]
};


function  App() {

  return (
    <ThemeProvider>
      <HeaderMenuColored links={headerSearchProps.links} />
    </ThemeProvider>
  )
}

export default App
 
