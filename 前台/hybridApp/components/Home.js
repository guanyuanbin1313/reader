import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    Dimensions,
	StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
const { width,height } = Dimensions.get('window');
export default class Home extends Component {
    constructor(){
        super();
        this.state = {
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
                    <Text style={{fontSize:18}}>Reader</Text>
                </View>
                <View style={styles.tops}>
                    <View style={styles.search}>
                        <Icon color={'rgb(200,203,206)'} name='search'/>
                        <TextInput placeholderTextColor='rgb(200,203,206)'
                        placeholder='请输入您要搜索的关键字'/>
                    </View>
                    <TouchableOpacity style={styles.so}>
                        <Text style={{color:'rgb(55,154,240)'}}>搜索</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={{height:220}}>
                    <ScrollView pagingEnabled={true} indicatorStyle='white'
                    style={{indicatorStyle:'white'}} horizontal={true}
                    showsHorizontalScrollIndicator={true}>
                        <View style={styles.slide}>
                            <Image style={{width:'100%',height:'100%'}}
                            source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587039304873&di=6a10a185ba2adca03c0ea2c3b5405538&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fbb88cc02f4c23ac766b062a685d8d724495bb17da279-b1ZLJn_fw658'}}/>
                        </View>
                        <View style={styles.slide}>
                            <Image style={{width:'100%',height:'100%'}}
                            source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587039304865&di=37828ba49194596c30822e23b805e551&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F16%2F05%2F20%2F13573e9edfaac3c.jpg'}} />
                        </View>
                        <View style={styles.slide}>
                            <Image style={{width:'100%',height:'100%'}}
                            source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587039611589&di=0d5170e5e429ead9bf81b0755df7bd09&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F18%2F03%2F10%2Fd4fad1143b7fe2c05bab68dc8080b3ad.jpg'}}/>
                        </View>
                </ScrollView>
            </View>
            
            <ScrollView>
                <View style={styles.under}>
                    <View style={styles.lie}>
                        <TouchableOpacity style={styles.lie}
                        onPress={()=>{Actions.classification()}}>
                        <Text style={styles.text1}>书 籍 分 类</Text>
                    </TouchableOpacity>
                    </View>

                    <View style={styles.guess}>
                        <TouchableOpacity style={styles.guess1}>
                            <Text>猜你喜欢</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.guess1}>
                            <Text>更多</Text>
                        </TouchableOpacity>
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


                    <View style={styles.guess}>
                        <TouchableOpacity style={styles.guess1}>
                            <Text>最新上传</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.guess1}>
                            <Text>更多</Text>
                        </TouchableOpacity>
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
                

                    <View style={styles.guess}>
                        <TouchableOpacity style={styles.guess1}>
                            <Text>最热书籍</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.guess1}>
                            <Text>更多</Text>
                        </TouchableOpacity>
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
            </ScrollView>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    top:{
		height:45,
        width:'100%',
        alignItems:'center',
		flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'#19CAAD'
	},
    tops:{
		height:55,
        width:'100%',
        alignItems:'center',
		flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'rgb(255,255,255)'
	},
	search:{
		height:40,
		width:'80%',
		paddingLeft:10,
		borderRadius:20,
		alignItems:'center',
		flexDirection:'row',	
		backgroundColor:'rgb(245,245,245)'
    },
    so:{
        height:25,
        width:'12%',
        borderRadius:6,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgb(255,255,255)'
    },
    slide:{
        height:220,
        width:width,
        alignItems:'center',
        justifyContent:'center'
    },
    under:{
		height:1150,
		width:'100%',
		flexWrap:'wrap',
		flexDirection:'row',
		backgroundColor:'#f5f5f5',
		justifyContent:'space-evenly'
    },
    lie:{
        height:60,
        width:'100%',
        marginTop:10,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'#ffffff'
    },
    text1:{
        fontSize:20,
        marginLeft:30,
        color:'#333333'
    },
    guess:{
        width:'100%',
        marginTop:'8%',
        height:25,
        justifyContent:'space-between',
		flexDirection:'row',
    },
    guess1:{
        width:'15%',
        height:'100%',
        height:30,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    },
    like:{
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
});