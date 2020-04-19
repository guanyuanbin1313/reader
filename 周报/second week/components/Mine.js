import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions, FlatList, Image, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';

export default class Mine extends Component {
    render() {
        return (
            <View>
            <View style={styles.top}>
                <View style={styles.head1}>
                    <View style={styles.head}>
                    
                    </View>
                    <Text style={{marginTop:20}}>我的书籍</Text>
                </View>

                <View style={styles.head2}>
                    <TouchableOpacity >
                        <Text style={{fontSize:18}}
                        onPress={()=>{Actions.login()}}
                        >点击登录</Text>
                    </TouchableOpacity>
                    <Text style={{marginTop:20}}>登录更安全，可同步阅读书籍</Text>
                </View>

            </View>

            <View style={{
                width:'100%',height:50,backgroundColor:'white',
                flexDirection:'row',alignItems:'center'
                }}>
                    <Icon name='setting'/>
                   <TouchableOpacity >
                   
                        <Text style={{fontSize:18}}
                        onPress={()=>{Actions.setting()}}
                        >设置</Text>
                    </TouchableOpacity>

            </View>
            <View style={{
                width:'100%',height:50,backgroundColor:'white',
                flexDirection:'row',alignItems:'center'
                }}>
                    <Icon name='user'/>
                   <TouchableOpacity >
                        <Text style={{fontSize:18}}
                        onPress={()=>{Actions.help()}}
                        >帮助和反馈</Text>
                    </TouchableOpacity>

            </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    top:{
        width:'100%',
        height:200,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#ffffff'
    },
    head1:{
        width:'30%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    head2:{
        width:'30%',
        height:'100%',
        justifyContent:'center',
        marginLeft:20
    },
    head:{
        width:'70%',
        height:'45%',
        backgroundColor:'black',
        borderRadius:100,
        marginLeft:20,
        marginTop:20
    }
})