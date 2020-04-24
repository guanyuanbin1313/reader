import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button }    from 'antd';
import { Input } from 'antd';
import {HashRouter,Link,Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/register';
import Upload from './components/upload.js';
import Detail from './components/detail.js';
import BooksShelf from './components/shelf.js';
import SearchResult from './components/search.js';
import Nav from './components/nav.js';
import Label from './components/label.js';
import My from './components/personal.js';
import Download  from './components/download.js';
import Myupload from './components/myupload.js';
import Welcome from './components/welcome.js';
import Bar from './components/sideBar.js';
import ParticlesBg from 'particles-bg';
const {Search} = Input;

export default class App  extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      apiResponse:""
    };
  }

  componentDidMount() {
    // console.log(this.state.apiResponse);
    const { loginSuccess } = this.props;
    console.log(localStorage.getItem('token'));
    let token = localStorage.getItem('token');
    console.log(token,"token");
    if(token) {
      fetch(`http://101.37.172.171:9000/login/token`,{method:'post',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:`token=${token}`})
        .then(res=>res.text())
        .then((res)=> {
          console.log(res);
          var a = loginSuccess(res,token);
        });
    }


  }
  searching = ()=> {
    // console.log(value);
    // console.log(this.props);
  }

  render() {

    return (
      <div className="all">

      <HashRouter>
        <Route path='/' component={Nav}/>
        <Route exact path='/' component={BooksShelf}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <Route path="/upload" component={Upload}/>
        <Route path="/detail/:id" component={Detail}/>
        <Route path="/search/:id" component={SearchResult}/>
        <Route path="/my" component={My}/>
        <Route exact path="/my" component={Welcome}/>
        <Route path='/my/download/:username' component={Download}/>
        <Route path="/my/upload/:username" component={Myupload}/>
        <Route path="/label/:name" component={Label}/>
        <Route exact path="/" component={Bar}/>
        <Route path="/detail" component={Bar}/>
        <Route path="/label" component={Bar}/>
      </HashRouter>
      </div>
    );

  }
}
