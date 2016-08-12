import React from 'react'
import Card from './Card'
import map from 'lodash/fp/map'
import axios from 'axios'

let arrData=[]

class CardList extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      isDataOK:false
    }
  }
  componentDidMount(){
    axios.get(`https://raw.githubusercontent.com/goodthomas/digicity/master/blogs/_public-resourse/public.json?v=${Math.random()}`)//加上随机数，是为了解决同一地址缓存带来的数据不会更新的问题
          .then((res)=>{
            arrData=res.data
            this.setState({
              isDataOK:true
            })
          })
  }
  render () {
    // let CardGroup3=[]
    // for(let i=0;i<arrData.length;i++){
    //   if(arrData[i].title.toLowerCase().indexOf(this.props.searchValue.toLowerCase())!=-1){ //bad!!!
    //     CardGroup3.push(<Card {...arrData[i]} key={i} index={i+1}/>)
    //   }
    // }
    let CardGroup=arrData.map(function(item,index){
      return(
        <Card {...item} key={index} index={index+1}/>
      )
    })
    let i=0
    let CardGroup2=map((item)=>{
      i++
      return(
        <Card {...item} key={i} index={i}/>
      )
    },arrData)

    return(
      <div>
        {CardGroup}
      </div>
    )
  }
}

export default CardList
