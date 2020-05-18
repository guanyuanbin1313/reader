import React, {Component} from 'react';
import { View, Text,TextInput,TouchableOpacity,StyleSheet,AsyncStorage, ToastAndroid, BackHandler,Dimensions } from 'react-native';
import {Icon} from '@ant-design/react-native';
import {Actions} from 'react-native-router-flux';
import Login from './Login';
import {myFetch} from "../src/index";
import {Navigator} from 'react-native-deprecated-custom-components';

export default class Logon extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            pwdA: '',
            pwdB: '',
            isloading: false
        }
    }
    userhandle = (text) => {
        this.setState({username: text})
    }
    pwdAhandle = (text)=>{
        this.setState({pwdA:text})
    }
    pwdBhandle = (text)=>{
        this.setState({pwdB:text})
    }
    logon = () => {
        if (this.state.username != '' && this.state.pwdA != '' && this.state.pwdA != ''){
            if(this.state.pwdA!=this.state.pwdB){
                ToastAndroid.show('密码不一致',ToastAndroid.TOP)
            }
            else{
                this.setState({isloading:true})
                myFetch.post('/logon',{
                    username:this.state.username,
                    pwdA:this.state.pwdA,
                    pwdB:this.state.pwdB
                }).then(res=>{
                    if(res.data.token=='1'){
                        ToastAndroid.show('账户已存在！',ToastAndroid.TOP)
                    }
                    else if(res.data.token=='2'){
                        ToastAndroid.show('注册失败！',ToastAndroid.TOP)
                    }
                    else{
                        AsyncStorage.setItem('user',JSON.stringify(res.data))
                            .then(()=> {
                                this.setState({isloading: false})
                                ToastAndroid.show('注册成功！',ToastAndroid.TOP)
                                Actions.login()
                            })
                    }
                })
            }
        }
        else{
            ToastAndroid.show('输入项不能为空！',ToastAndroid.TOP)
        }
    }


    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <View
                    style={{alignItems: 'center'}}>
                    <View
                        style={{
                            width: '80%',
                            marginRight: 10,
                            borderBottomColor: '#ccc',
                            borderBottomWidth: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingLeft: 20,
                        }}>
                        <Icon name="user" color="red"/>
                        <TextInput placeholder="用户名"
                                   onChangeText={this.userhandle}
                        />
                    </View>
                    <View
                        style={{
                            width: '80%',
                            marginRight: 10,
                            borderBottomColor: '#ccc',
                            borderBottomWidth: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingLeft: 20,
                        }}>
                        <Icon name="number" color="red"/>
                        <TextInput placeholder="密码"
                                   onChangeText={this.pwdAhandle}
                        />
                    </View>
                    <View
                        style={{
                            width: '80%',
                            marginRight: 10,
                            borderBottomColor: '#ccc',
                            borderBottomWidth: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingLeft: 20,
                        }}>
                        <Icon name="number" color="red"/>
                        <TextInput placeholder="确认密码"
                                   onChangeText={this.pwdBhandle}
                        />
                    </View>
                    <TouchableOpacity
                        style={{
                            width: '80%',
                            height: 40,
                            backgroundColor: '#ccc',
                            marginTop: 30,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={
                            this.logon
                        }
                    >
                        <Text>注册</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            marginTop: 30
                        }}
                        onPress={() => {
                            Actions.login()
                        }}
                    >
                        <Text
                            style={{
                                color: '#85929E'
                            }}
                        >
                            返回登录
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}