import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Home from './Home'
import NavBar from './shared/NavBar'
import AppBar from 'material-ui/AppBar'
import AppLeftNav from './shared/AppLeftNav'

class App extends Component {
  constructor(props,context){
    super(props,context)
  }
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  componentWillMount(){
    let setNavBarState=function(){
      this.setState({renderNavBar:document.body.clientWidth>700})
    }.bind(this)
    setNavBarState()
    window.onresize=setNavBarState
  }

  onLeftIconButtonTouchTap(){
    this.refs.leftNav.handleToggle()
  }

  getAppBar(){
    let title=this.context.router.isActive('/home')?'Home':
      this.context.router.isActive('/account')?'Account':
      this.context.router.isActive('/about')?'About':''
    return(
      <AppBar title={title}
        onLeftIconButtonTouchTap={this.onLeftIconButtonTouchTap.bind(this)}/>
    )
  }
  render () {
    return(
      <div className='app-wrap'>
        {this.state.renderNavBar?<NavBar/>:this.getAppBar()}
        <AppLeftNav ref='leftNav'/>
        {this.props.children}
        <div className='app-footer'>footer</div>
      </div>
    )
  }
}

App.contextTypes={
  router:React.PropTypes.object.isRequired
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
}

export default App
