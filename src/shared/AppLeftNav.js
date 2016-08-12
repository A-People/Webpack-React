import React from 'react'
import LeftNav from 'material-ui/Drawer'

import {List, ListItem,MakeSelectable} from 'material-ui/List'

const SelectableList = MakeSelectable(List)

class AppLeftNav extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
      selectedIndex: '/home'
    }
  }

  render () {
    let styles = {
      header: {
        cursor: 'pointer',
        fontSize: '24px',
        color: '#fff',
        lineHeight: '64px',
        fontWeight: '300',
        backgroundColor: '#00bcd4',
        paddingLeft: '24px',
        paddingTop: '0px',
        marginBottom: '8px',
      },
      selectedList: {
        color: '#ff4081',
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
      }
    }
    return(
      <LeftNav open={this.state.open}
        docked={false}
        onRequestChange={open => this.setState({open})}>
        <div style={styles.header}
          onTouchTap={this.handleTouchTapHeader.bind(this)}>
          S2
        </div>
        <SelectableList
          selectedItemStyle={styles.selectedList}
          value={this.state.selectedIndex}
          onChange={this.handleUpdateSelectedIndex.bind(this)}>
          <ListItem
            value="/home"
            primaryText="Home" />
          <ListItem
            value="/blog"
            primaryText="Blog" />
          <ListItem
            value="/account"
            primaryText="Account" />
          <ListItem
            value="/about"
            primaryText="About" />
        </SelectableList>
      </LeftNav>
    )
  }

  handleToggle(){
    this.setState({open:!this.state.open})
  }

  handleUpdateSelectedIndex(e, index) {
    this.context.router.push(index);
    this.setState({
      open: false,
      selectedIndex: index,
    });
  }

  handleTouchTapHeader() {
    this.context.router.push('/home');
    this.setState({open: false});
  }
}

AppLeftNav.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default AppLeftNav
