import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Detail extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data:{},
      commit:'',
      commits:[],
      new:[]
    }
  }
  componentDidMount() {
    var id = this.props.match.params.id;
    fetch(`http://101.37.172.171:9000/getdetail?id=${id}`,{method:'get'})
      .then(res=> res.json())
      .then((res)=> {
        this.setState({
          data:res[0]
        })
      })

      fetch('http://101.37.172.171:9000/getbookslist',{method:'get'})
      .then((res)=>res.json())
      .then((res)=> {
        this.setState({new:res})
        console.log(res)
      })
    fetch(`http://101.37.172.171:9000/commit/get?id=${id}`,{method:'get'})
      .then(res=>res.json())
      .then((res)=> {
        console.log(res);
        this.setState({
          commits:res
        })
      });



  }

  commitChange (e) {
    this.setState({
      commit:e.target.value
    })
  }

  commitSubmit() {
    console.log('test');
    fetch(`http://101.37.172.171:9000/commit?bookId=${this.props.match.params.id}&username=${this.props.username}&commit=${this.state.commit}`,{method:'get'})
      ;



  }


  render() {
    return (
      <div className="mobile-detail" style={{float:'left',marginLeft:'5vw',borderRadius:'10px',textAlign:'center'}}>
      <div className="detail-container" style={{borderRadius:'15px'}}>
        <div className="detail-title">
        <h2>{this.state.data.bookname}</h2>
        </div>

        <img src={`http://101.37.172.171:9000/getbookslist/image?id=${this.state.data.bookId}${this.state.data.extName}`}></img>
        <div style={{borderLeft:'5px solid yellow'}}><h2 style={{backgroundColor:'#515151',lineHeight:'30px',width:'100%'}}>书籍介绍</h2></div>
        <div style={{width:'55vw',margin:'0 auto',textAlign:'left'}}><h3 className="book-detail">{this.state.data.detail}</h3></div>
        <div style={{borderLeft:'5px solid yellow'}}><h2 style={{backgroundColor:'#515151',width:'100%'}}>书籍下载</h2></div>
        <Button type="primary" icon="download" size='large' onClick={()=>{fetch(`http://101.37.172.171:9000/markDownload?id=${this.state.data.bookId}&username=${this.props.username}&bookname=${this.state.data.bookname}`,{method:'get'});window.open(this.state.data.shareLink)}}>
        下载图书
        </Button>
        <h3 style={{paddingBottom:'30px'}}>分享密码:{this.state.data.linkSecret}</h3>
      </div>

      <div className="detail-container">
      <div style={{borderLeft:'5px solid yellow'}}><h2 style={{backgroundColor:'#515151',width:'100%'}}>好书推荐</h2></div>
        <div style={{width:'100%',display:'block'}}>
          <img style={{width:'100px',height:'150px',marginLeft:'20px',float:'left'}}src="./imgs/1.jpg"/>
          <img style={{width:'100px',height:'150px',marginLeft:'20px',float:'left'}}src="./imgs/2.jpg"/>
          <img style={{width:'100px',height:'150px',marginLeft:'20px',float:'left'}}src="./imgs/3.jpg"/>
          <img style={{width:'100px',height:'150px',marginLeft:'20px',float:'left'}}src="./imgs/4.jpg"/>
          <img style={{width:'100px',height:'150px',marginLeft:'20px',float:'left'}}src="./imgs/5.jpg"/>
        </div>
        <div></div>
        <br/>
      </div>
      <div className="detail-container">
      <div>
        {this.state.new.map((item)=> (
          <Link to={`/detail/${item.bookId}`} onClick={()=> {this.props.history.push(`/detail/${item.bookId}`);window.location.reload()}} style={{textAlign:'left'}}>
          <p style={{color:'black'}}>{item.bookname}</p></Link>
        ))}
      </div>
      </div>
      <div className="detail-container" style={{height:'500px',borderRadius:'15px'}}>
        <div className="detail-title" palceHolder='说点什么吧' style={{borderRadius:'15px'}}>
          <h2>发表我的评论</h2>
        </div>
        <form>
          <textarea style={{width:'90%'}}name="commit" onChange={(e)=>this.commitChange(e)}>
          </textarea>
          <button style={{width:'100px',height:'40px',backgroundColor:'#ff5675',border:'none',borderRadius:'10px',color:'white',fontSize:'20px'}} onClick={()=>this.commitSubmit()}>提交</button>
        </form>



        <div style={{borderRadius:'10px'}} className='commit-container' style={{float:'left',marginLeft:'40px'}}>
          {this.state.commits.map((item)=>(
            <div className="commit-container">
              <span style={{fontSize:'15px',fontFamily:'黑体',textAlign:'left'}}>用户{item.username}:</span>
              <div style={{margin:'0 auto',paddingBottom:'10px',width:'200px',height:'30px',borderRadius:'10px',backgroundColor:'#019fde'}}><span style={{color:'white',fontSize:'20px',lineHeight:'30px'}}>{item.detail}</span></div>
            </div>
          ))}
        </div>
      </div>
      </div>

    )
  }

}


export default connect(function(state) {
  return {
    username:state
  }
})(Detail)
