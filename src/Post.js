import React from 'react'
import axios from 'axios'
import highlight from 'highlight.js'
import marked from 'marked'
import 'highlight.js/styles/default.css'

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      md:''
    }
    this.getMD(this.props)
  }
  getMD(nextProps){
    axios.get(`https://raw.githubusercontent.com/goodthomas/digicity/master/blogs/_public-resourse/${nextProps.params.title}.md?v=${Math.random()}`)
    .then((res)=>{
      this.setState({
        md:res.data
      })
    })
  }
  componentDidMount(){
    marked.setOptions({
      highlight: function (code) {
        return highlight.highlightAuto(code).value;
      }
    })
  }
  componentWillReceiveProps(nextProps){
    this.getMD(nextProps)
  }
  render () {
    const styles={
      root:{
        textAlign:'center',
        height:'100vh',
        backgroundColor:'#ddd'
      }
    }
    return(
      <div style={styles.root}>
        <div style={{display:'table'}}></div>
        <div dangerouslySetInnerHTML={{__html:marked(this.state.md)}}></div>
      </div>
    )
  }
}

export default Post
