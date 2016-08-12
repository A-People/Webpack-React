import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Search from './Search'
import CardList from './list/CardList'

class SearchIndex extends React.Component {
  constructor(){
    super()
    this.state = {
      value: '',
    }
  }
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  onChildChanged(value){
    this.setState({
      value: value,
    })
  }
  render(){
    let styles={
      root:{

      }
    }
    return(
      <div style={styles.root}>
        <Search name='search' callBackParent={this.onChildChanged.bind(this)}/>
        <CardList searchValue={this.props.searchValue}/>
      </div>
    )
  }
}

SearchIndex.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
}

export default SearchIndex
