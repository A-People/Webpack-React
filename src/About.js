import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import AvatarURL from './assets/22.jpg'

class About extends React.Component {
  render () {
    return(
      <div className='about'>
        <div className="content">
           <div className="story">
             <h3>个人信息</h3>
             <div className="desc">
               A coder focusing on React + Express.
             </div>
             <a href="https://github.com/goodthomas">
               <RaisedButton label="下载简历" primary={true} labelStyle={{fontSize: '16px'}}/>
             </a>
           </div>
           <div className="paper">
             <img src={AvatarURL} />
           </div>
           <div className="info">
             <h3>联系方式</h3>
             <ul>
               <li>
                 <span>姓名：</span> Thomas Zhang
               </li>
               <li>
                 <span>邮箱：</span> xxx@xxx.com
               </li>
               <li>
                 <span>微信：</span> xxx
              </li>
             </ul>
           </div>
         </div>
      </div>
    )
  }
}

export default About
