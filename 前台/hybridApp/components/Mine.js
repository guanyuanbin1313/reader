import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    FlatList,
    Image,
    ScrollView,
    TextInput,
    TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Icon} from '@ant-design/react-native';
import ImagePicker from 'react-native-image-picker';

export default class Mine extends Component {

    cameraAction = () => {
        const options = {
            title: '',
            cancelButtonTitle: '取消',
            takePhotoButtonTitle: '拍照',
            chooseFromLibraryButtonTitle: '选择照片',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            }
        };


        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = {uri: response.uri};

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                    avatarSource: source
                });
            }
        });
    }

    render() {
        return (
            <View>
                <View style={styles.top}>
                    <View style={styles.head1}>
                        <TouchableOpacity onPress={()=>this.cameraAction()}
                                          style={styles.head}
                        >
                            <View style={styles.head}>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.head2}>
                        <TouchableOpacity>
                            <Text style={{fontSize: 18}}
                                  onPress={() => {
                                      Actions.login()
                                  }}
                            >点击登录</Text>
                        </TouchableOpacity>
                        <Text style={{marginTop: 20}}>登录更安全，可同步阅读书籍</Text>
                    </View>

                </View>

                <View style={{
                    width: '100%', height: 50, backgroundColor: 'white',
                    flexDirection: 'row', alignItems: 'center',marginTop:20
                }}>
                    <Icon name='book' color="#EB984E"/>
                    <TouchableOpacity>

                        <Text style={{fontSize: 18}}
                              onPress={() => {
                                  Actions.history()
                              }}
                        >阅读历史</Text>
                    </TouchableOpacity>

                </View>
                <View style={{
                    width: '100%', height: 50, backgroundColor: 'white',
                    flexDirection: 'row', alignItems: 'center',marginTop:2
                }}>
                    <Icon name='about' color="#EB984E"/>
                    <TouchableOpacity>

                        <Text style={{fontSize: 18}}
                              onPress={() => {
                                  Actions.about()
                              }}
                        >关于reader</Text>
                    </TouchableOpacity>

                </View>
                <View style={{
                    width: '100%', height: 50, backgroundColor: 'white',
                    flexDirection: 'row', alignItems: 'center',marginTop:2
                }}>
                    <Icon name='setting' color="#EB984E"/>
                    <TouchableOpacity>

                        <Text style={{fontSize: 18}}
                              onPress={() => {
                                  Actions.setting()
                              }}
                        >设置</Text>
                    </TouchableOpacity>

                </View>
                <View style={{
                    width: '100%', height: 50, backgroundColor: 'white',
                    flexDirection: 'row', alignItems: 'center',marginTop:2
                }}>
                    <Icon name='user' color="#EB984E"/>
                    <TouchableOpacity>
                        <Text style={{fontSize: 18}}
                              onPress={() => {
                                  Actions.help()
                              }}
                        >帮助和反馈</Text>
                    </TouchableOpacity>

                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    top: {
        width: '100%',
        height: 200,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    head1: {
        width: '30%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    head2: {
        width: '30%',
        height: '100%',
        justifyContent: 'center',
        marginLeft: 20
    },
    head: {
        width: '60%',
        height: '50%',
        backgroundColor: '#7F8C8D',
        borderRadius: 100,
        marginLeft: 20,
        marginTop: 20
    }
})