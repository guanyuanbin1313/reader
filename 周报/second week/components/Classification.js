import React, { Component } from 'react'
import { View, Text, TouchableOpacity,StyleSheet, Image} from 'react-native'
import { Actions } from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';

export default class Classification extends Component {
    constructor(){
        super();
        this.state = {
            tab:[
                1,2,3,4,5
            ],
            book:[
                {
                    uri:'http://static.zongheng.com/upload/cover/shucheng/0/4750812.jpg',
                    bookname:'红楼梦',
                    bookauthor:'曹雪芹',
                    class:'xx分类佳作',
                    introduction:'中国四大名著之一'
                }]
        }
	}
    render() {
        return (
            <View>
                <View style={styles.top}>
                    <TouchableOpacity style={{marginLeft:10}} onPress={Actions.pop}>
                        <Icon name='left'/>
                    </TouchableOpacity>
                    <Text style={styles.class}>书籍分类</Text>
                </View>

                <View style={styles.middle}>
                    {
                        this.state.tab.map((item)=>(
                        <Text style={styles.text1}>{item}</Text>
                        ))
                    }
                </View>

                <View style={styles.like}>
                        {
                            this.state.book.map((item,index)=>(
                                <View style={styles.books}>
                                    <View style={{width:'30%',height:'100%'}}>
                                        <View style={{
                                            justifyContent:"center",
                                            marginLeft:'10%',
                                            height:'20%',width:'100%'}}>
                                            <Text>{item.class}</Text>
                                        </View>
                                        <View style={styles.img}>
                                            <Image style={{width:'100%',height:'100%'}}
                                            source={{uri:item.uri}}></Image>
                                        </View>
                                    </View>
                                    <View style={{ width:'70%',height:'100%'}}>
                                        <Text style={styles.wordd}>书名：{item.bookname}</Text>
                                        <Text style={styles.wordd}>简介：{item.introduction}</Text>
                                        <Text style={styles.wordd}>作者：{item.bookauthor}</Text>
                                    </View>
                                </View>
                            ))
                        }
                    </View>
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    top:{
        width:'100%',
        height:50,
        backgroundColor:'rgb(255,255,255)',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        alignContent:'center'
    },
    class:{
        fontSize:18,
        marginLeft:10
    },
    middle:{
		height:50,
		marginTop:2,
		width:'100%',
		flexWrap:'wrap',
		flexDirection:'row',
		backgroundColor:'white',
		justifyContent:'space-evenly'
	},
	text1:{
		fontSize:15,
		marginTop:15,
		color:'#f68b8b'
    },
    like:{
        marginTop:10,
        height:180,
        width:'100%',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'#ffffff'
    },
    books:{
        width:'100%',
        height:'100%',
        justifyContent:'space-around',
        flexDirection:'row',
    },
    img:{
        width:'100%',
        height:'80%',
    },
    wordd:{
        marginTop:'6%',
        fontSize:17,
        marginLeft:10,
    },
})