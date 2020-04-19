/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Router, Scene, Tabs} from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    BackHandler,
    ToastAndroid
} from 'react-native';
import Home from './components/Home';
import Book from './components/Book';
import Mine from './components/Mine';
import Classification from './components/Classification';
import Setting from './components/setting';
import Help from './components/Help';
import Login from './components/Login';

const {width} = Dimensions.get('window');

const TabIconhome = ({focused, title}) => {
    return (
        <View>
            <Text
                style={{color: focused ? 'rgb(242,48,48)' : 'grey'}}
            >
            </Text>
        </View>
    );
};
const TabIconbook = ({focused, title}) => {
    return (
        <View>
            <Text
                style={{color: focused ? 'rgb(242,48,48)' : 'grey'}}
            >
            </Text>
        </View>
    );
};
const TabIconmine = ({focused, title}) => {
    return (
        <View>
            <Text
                style={{color: focused ? 'rgb(242,48,48)' : 'grey'}}
            >
            </Text>
        </View>
    );
};

class App extends Component {
    componentDidMount() {
        setTimeout(SplashScreen.hide,2000);

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
            <View style={{flex: 1}}>
                <StatusBar
                    backgroundColor={'red'}
                    barStyle="light-content"
                />
                <Router>
                    {/*Router里只能放一个组件*/}
                    {/* 将全部的跳转页面都放在Root下面 */}
                    <Scene key="root">
                        {/* key 就是给页面的标签,供Actions使用 */}
                        {/* component 设置关联的页面 */}
                        {/* title 就是给页面标题 */}
                        {/* initial 就是设置默认页面*/}
                        <Tabs
                            key='tabbar'
                            swipeEnabled={true}
                            wrap={false}
                            hideNavBar
                            activeTintColor="rgb(242,48,48)"
                            inactiveTintColor="grey"
                            tabBarStyle={{backgroundColor: 'white'}}
                        >

                            <Scene key="one" title="首页">
                                <Scene hideNavBar key='one' component={Home} header={null}
                                initial={true} icon={TabIconhome}/>
                                <Scene title="书籍分类" hideNavBar hideTabBar 
                                key='classification' component={Classification}/>
                            </Scene>

                            <Scene
                                key="two"
                                component={Book}
                                title="书架"
                                icon={TabIconbook}
                            />

                            <Scene key="three" title="我的">
                                <Scene hideNavBar key='three' component={Mine} header={null}
                                icon={TabIconmine}/>
                                <Scene title="设置" hideNavBar hideTabBar 
                                key='setting' component={Setting}/>
                                <Scene title="帮助" hideNavBar hideTabBar 
                                key='help' component={Help}/>
                                <Scene title="登录" hideNavBar hideTabBar 
                                key='login' component={Login}/>
                            </Scene>

                        </Tabs>
                    </Scene>
                </Router>
            </View>
        );
    }
};

const styles = StyleSheet.create({});

export default App;
