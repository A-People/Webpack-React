import React from 'react'
import {Route,IndexRoute} from 'react-router'
import App from './App'
import Home from './Home'
import About from './About'
import Account from './Account'
import Blog from './Blog.js'
import Post from './Post.js'

export default(
  <Route path='/' component={App}>
    <Route path='/home'　component={Home}/>
    <Route path='/about'　component={About}/>
    <Route path="blog" component={Blog} />
    <Route path="blog/:title" component={Post} />
    <Route path='/account'　component={Account}/>
    <IndexRoute component={Home}/>
  </Route>
)
