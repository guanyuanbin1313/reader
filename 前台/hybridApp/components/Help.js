import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet,Dimensions} from 'react-native'
import {Actions} from 'react-native-router-flux';
import {Icon,Button} from '@ant-design/react-native';
const {width,height} = Dimensions.get('window');

export default class Help extends Component {
    render() {
        return (
            <View>
                <View style={styles.top}>
                    <TouchableOpacity style={{marginLeft: 10}} onPress={Actions.pop}>
                        <Icon name='left'/>
                    </TouchableOpacity>
                    <Text style={styles.class}>帮助和反馈</Text>
                </View>
                <View>
                    <Text style={{color:'grey',marginBottom:20}}>常见问题</Text>
                    <TouchableOpacity style={{marginBottom:6}}><Text>连载中/之后的章节看不到/更新太慢</Text></TouchableOpacity>
                    <TouchableOpacity style={{marginBottom:6}}><Text>章节缺失/乱序/重复</Text></TouchableOpacity>
                    <TouchableOpacity><Text>写小说能赚钱吗/如何成为小说作者</Text></TouchableOpacity>
                </View>
                <Button style={{marginTop:height*0.76
                }}>反馈历史           |           <Text style={{color:'red'}}>意见反馈</Text></Button>
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
