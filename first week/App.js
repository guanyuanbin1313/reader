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
                            <Scene
                                key="one"
                                component={Home}
                                title="首页"
                                header={null}
                                initial={true}
                                icon={TabIconhome}
                            />
                            <Scene
                                key="two"
                                component={Book}
                                title="书架"
                                icon={TabIconbook}
                            />
                            <Scene
                                key="three"
                                header={null}
                                component={Mine}
                                title="我的"
                                icon={TabIconmine}
                            />
                        </Tabs>
                    </Scene>
                </Router>
            </View>
        );
    }
};

const styles = StyleSheet.create({});

export default App;
