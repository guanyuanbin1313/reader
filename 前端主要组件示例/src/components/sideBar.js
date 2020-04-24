import React from 'react';
import '../App.css';
export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    }
  }

  componentDidMount() {
    fetch('http://101.37.172.171:9000/getbookslist',{method:'get'})
    .then((res)=>res.json())
    .then((res)=> {
      this.setState({data:res})
      console.log(res)
    })

  }


  render() {
      return (
        <div className="sideBar" style={{width:'25vw',float:'right',overflow:'hidden',marginRight:'5vw',marginTop:'30px'}}>
          <img style={{width:'25vw'}} src='./imgs/bar1.jpg'/>
          <div className="side-recent">
          <h2>近期文章</h2>
          {this.state.data.map((item)=>(
            <div style={{height:'45px',borderBottom:'0.01px solid #DDDDDD'}}><a onClick={()=> {this.props.history.push(`/detail/${item.bookId}`);window.location.reload()}}><span style={{lineHeight:'45px'}}>{item.bookname}</span></a></div>
          ))}
          </div>
          <img style={{width:'25vw',marginTop:'20px'}} src='./imgs/bar2.jpg'/>
        </div>
      )

  }
}
