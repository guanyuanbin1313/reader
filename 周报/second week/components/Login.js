import React, { Component } from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux';

export default class Login extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={Actions.pop}>
                        <Text>返回</Text>
                </TouchableOpacity>
                <Text>登录</Text>

            </View>
        )
    }
}
