import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions, FlatList, Image, ScrollView, TextInput} from 'react-native';

const {width} = Dimensions.get('window');
export default class Book extends Component {
    render() {
        let data = [];
        for (var i = 1; i < 13; i++) {
            data.push({
                uri: 'http://static.zongheng.com/upload/cover/66/cc/66ccb412a430d24cc2b4bb5787904212.jpeg',
                txt:'那些青春与你有关'
            })
        }
        return (
            <View>
                <FlatList
                    numColumns={3}
                    data={data}
                    renderItem={
                        ({item}) => <View style={styles.slide}>
                            <Image style={{width:'100%', height: '85%'}}
                                   source={{uri:item.uri}}></Image>
                            <Text>{item.txt}</Text>
                        </View>
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    slide: {
        backgroundColor: 'white',
        width: width * 0.25,
        height: 180,
        marginLeft: 18,
        marginTop: 40,
        left: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})