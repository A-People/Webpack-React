import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs';

class NavBar extends React.Component {
  constructor(props,context){
    super(props,context)
    this.state={
      value:'/home'
    }
  }

  componentWillMount(){
    this.setState({
      value:this.getSelectedIndex()
    })
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      value:this.getSelectedIndex()
    })
  }

  getSelectedIndex(){
    return this.context.router.isActive('/home')?'/home':
      this.context.router.isActive('/account')?'/account':
      this.context.router.isActive('/about')?'/about':'/home'
  }

  handleTabsChange(value){
    this.context.router.push(value)
  }
  render () {
    let styles={
      tabs:{
        width:'390px',
        position:'absolute',
        right:'60px',
        textTransform:'uppercase'
      },
      tab:{
        height:'64px',
        color:'#fff'
      },
      inkBar:{
        height:'4px',
        marginTop:'-4px'
      }
    }
    return (
      <div className='app-header'>
        <Tabs tabItemContainerStyle={{backgroundColor:'transparent'}}
          style={styles.tabs} inkBarStyle={styles.inkBar}
          onChange={this.handleTabsChange.bind(this)}
          value={this.state.value}>
          <Tab style={styles.tab} value='/home' label='Home'></Tab>
          <Tab style={styles.tab} value='/blog' label='Blog'></Tab>
          <Tab style={styles.tab} value='/account' label='Account'></Tab>
          <Tab style={styles.tab} value='/about' label='About'></Tab>
        </Tabs>
      </div>
    )
  }
}

NavBar.contextTypes={
  router:React.PropTypes.object.isRequired
}

export default NavBar;
