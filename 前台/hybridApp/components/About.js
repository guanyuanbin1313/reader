import React, { Component } from 'react'
import { View, Text,TouchableOpacity,StyleSheet} from 'react-native'
import { Actions } from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';

export default class About extends Component {
    render() {
        return (
            <View>
                <View style={styles.top}>
                    <TouchableOpacity style={{marginLeft:10}} onPress={Actions.pop}>
                        <Icon name='left'/>
                    </TouchableOpacity>
                    <Text style={styles.class}>关于reader</Text>
                </View>
                <Text>
                    reader电子书意在为用户提供下载及在线阅读功能，用户也可以提交上传图书
                    请求，通过审核后用户可以下载，从而方便用户的下载需求
                </Text>
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