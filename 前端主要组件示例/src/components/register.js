import React from 'react';
import { Input,Button } from 'antd';
import ParticlesBg from 'particles-bg';
export default function Register() {
  return(
    <div className="login-container">
    <ParticlesBg color="#ff0000" num={400} type="lines" bg={true} color='white'/>
      <form action="http://localhost:9000/register" method="post">
        <Input placeholder="请输入用户名" type="primary" name="username"></Input>
        <Input style={{margin:"1vh 0 0 0"}} placeholder="请输入密码" name="password" type="primary"></Input>
        <Input style={{margin:"1vh 0 1vh 0"}} placeholder="请输入邮箱" name="email" type="email"></Input>
        <button style={{height:'3vh',width:'40%',border:'none'}} type="submit">注册</button>
      </form>
    </div>
  )
}
