import React from 'react';
import '../App.css';
import { Button } from 'antd';
export default class Shelf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            new: [1, 2],
        }
    }
    showDetail = (e) => {
        console.log(e.target.src);
        var idString = e.target.src;
        var id = idString.slice(idString.indexOf('=') + 1, idString.lastIndexOf('.'))
        console.log(id);
        this.props.history.push(`/detail/${id}`);
    }
    componentDidMount() {
        fetch('http://101.37.172.171:9000/getbookslist', { method: 'get' })
            .then((res) => res.json())
            .then((res) => {
                this.setState({ new: res })
                console.log(res)
            })
    }

    render() {
        return ( <
            div className = 'mobile-container' >
            <
            div className = "shelf-container" >
            <
            div className = "recently" >
            <
            div className = "detail-title"
            style = {
                { position: 'relative' } } >
            <h2 style = {
                { marginLeft: '20px', color: 'white' } } > 最新上传 < /h2> <
            Button style = {
                { position: 'absolute', right: '10px', top: '12px' } }
            type = "primary"
            href = "/#/upload" > 上传 < /Button> </div>
            <div className = "shelf" > {
                this.state.new.map((item) => ( <
                    div className = "book"
                    style = {
                        { position: 'relative' } } >
                    <
                    img onClick = { this.showDetail.bind(this) }
                    src = { `http://101.37.172.171:9000/getbookslist/image?id=${item.bookId}${item.extName}` }
                    /> <
                    p > { item.bookName } < /p> <
                    div style = {
                        { position: 'absolute', left: '5px', top: '5px' } } > < a href = { `http://localhost:3000/#/label/${item.label}` }
                    style = {
                        { fontSize: '20px', width: '300px', height: '30px', color: 'white', backgroundColor: 'black', opacity: '0.5' } } > { item.label } < /a></div >
                    <
                    /div>
                ))
            } <
            /div> <
            /div> <
            /div> {
                /**
                      <div className="shelf-container" style={{width:'20vw',float:'right'}}>
                        <div className="recently" style={{width:'20vw'}}>
                        <div className="detail-title">
                          <h2 style={{marginLeft:'20px',color:'white'}}>标签</h2>
                        </div>
                        <div className="shelf" style={{width:'20vw',height:'300px'}}>
                        {
                          ['文学','社科','财经','少儿','科技'].map((item)=>(
                            <Button style={{width:'15vw',margin:'0 auto'}} type="primary">{item}</Button>
                          ))

                        }
                        </div>
                        </div>
                      </div>
                    */
            }

            <
            /div>
        )
    }





}
