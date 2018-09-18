import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, Link, Route } from 'react-router-dom'

const Nav = ({ location }) => {
  const path = location.pathname
  return (
    <ul>
      <li className={ path === '/' ? 'selected' : ''}>
        <Link to='/'>Home</Link>
      </li>
      <li className={ path === '/users' ? 'selected' : '' }>
      <Link to='/users'>Users</Link>
      </li>
      <li className={ path === '/things' ? 'selected' : '' }>
      <Link to='/things'>Things</Link>
      </li>
    </ul>
  )
}

const Home = ()=> {
  return (
    <div>Home</div>
  )
}

const Users = ()=> {
  return (
    <div>Users</div>
  )
}

const Things = ()=> {
  return (
    <div>Things</div>
  )
}


const root = document.getElementById('root')

render(<Router>
  <div>
    <Route component={ Nav } />
    <Route exact path='/' component={ Home } />
    <Route path='/users' component={ Users } />
    <Route path='/things' component={ Things } />
  </div>
  </Router>, root)