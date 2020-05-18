import React, { Component } from 'react'
import { View, Text,TouchableOpacity,StyleSheet} from 'react-native'
import { Actions } from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';

export default class History extends Component {
    render() {
        return (
            <View>
                <View style={styles.top}>
                    <TouchableOpacity style={{marginLeft:10}} onPress={Actions.pop}>
                        <Icon name='left'/>
                    </TouchableOpacity>
                    <Text style={styles.class}>阅读历史</Text>
                </View>
                <Text>阅读历史</Text>
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