import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {Link, Router} from '@reach/router'
import Route from './components/Route'
import Home from './pages/Home'

const AppInner = styled.div`
  
`

const App: FunctionComponent = () => {

  return (
    <AppInner>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <main>
          <Router>
            <Route component={Home} path="/"/>
          </Router>
        </main>
    </AppInner>
  )
}

export default App
