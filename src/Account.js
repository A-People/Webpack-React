import React from 'react'
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {Card} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import axios from 'axios'
import github from './utils/github'
import isEmpty from 'lodash/isEmpty'
import UserInfo from './user/UserInfo'
import Repos from './user/Repos'

class Account extends React.Component {
  constructor(props){
    super(props)
    this.state={
      user:{}
    }
  }
  handleSubmit(e){
    e.preventDefault()
    const account=this.refs.account.getValue()
    github.getGithubInfo(account)
          .then((data)=>{
            this.setState({
              user:data.user,
              repos:data.repos
            })
            console.log(data);
          })

  }
  render () {
    let GitHubInfo
    if(!isEmpty(this.state.user)){
      GitHubInfo=(
        <div>
          <UserInfo userInfo={this.state.user}/>
          <Repos repos={this.state.repos}/>
          <RaisedButton style={{display:'block',margin:'0 auto',width:'180px'}}
            primary={true} label='save'/>
        </div>
      )
    }
    return(
      <div className='account'>
        <Card className='content'>
          <DatePicker ref='birthday' hintText='Birthday'/>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <TextField ref='account' hintText='Your Github Account'/>
            <FlatButton label='Search Github' type='submit' primary={true}/>
          </form>
          {GitHubInfo}
        </Card>
      </div>
    )
  }
}

export default Account
