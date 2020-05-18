import React, { Component } from 'react'
import { View, Text,TextInput,TouchableOpacity,StyleSheet,AsyncStorage, ToastAndroid, BackHandler,Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {Icon} from '@ant-design/react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
import {myFetch} from "../src/index";
import Home from './Home';
import Logon from './Logon';
const {height} = Dimensions.get('window');
export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            pwd: '',
            isloading: false
        }
    }

    userhandle = (text) => {
        this.setState({username: text})
    }
    pwdhandle = (text) => {
        this.setState({pwd: text})
    }

    login = () => {
        if (this.state.username != '' && this.state.pwd != '') {
            this.setState({isloading: true});
            myFetch.post('/login', {
                username: this.state.username,
                pwd: this.state.pwd
            }).then(res => {
                if (res.data.token == '1') {
                    ToastAndroid.show('账户不存在！', ToastAndroid.TOP)
                }
                else if (res.data.token == '2') {
                    ToastAndroid.show('连接失败！', ToastAndroid.TOP)
                } else {
                    AsyncStorage.setItem('user', JSON.stringify(res.data))
                        .then(() => {
                            this.setState({isloading: false})
                            ToastAndroid.show('登陆成功！', ToastAndroid.TOP)
                            Actions.one()
                        })
                }
            })
        } else {
            ToastAndroid.show('输入不能为空！', ToastAndroid.TOP)
        }
    }
    componentDidMount() {
        if (Platform.OS === 'android'){
            BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    onBackAndroid = () => {
        //禁用返回键
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            //最近2秒内按过back键，可以退出应用。
            // return false;
            BackHandler.exitApp();//直接退出APP
        }else{
            this.lastBackPressed = Date.now();
            ToastAndroid.show('再按一次退出应用', 1000);//提示
            return true;
        }
    }


    render() {
        return (
            <View>
                <View style={styles.top}>
                    <TouchableOpacity style={{marginLeft: 10}} onPress={Actions.pop}>
                        <Icon name='left'/>
                    </TouchableOpacity>
                    <Text style={styles.class}>返回</Text>
                </View>
                <View style={{justifyContent: 'center',marginTop:0.2*height}}>
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
                                       onChangeText={this.pwdhandle}
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
                            onPress={this.login}
                        >
                            <Text>登录</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: '80%',
                                height: 40,
                                backgroundColor: '#7FB3D5',
                                marginTop: 30,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onPress={() => Actions.logon()}
                        >
                            <Text>注册</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    top: {
        width: '100%',
        height: 50,
        backgroundColor: 'rgb(255,255,255)',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center'
    },
    class: {
        fontSize: 18,
        marginLeft: 10
    }
})
