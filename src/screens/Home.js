

import React, { Component } from 'react';
import { View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Card, CardItem,Drawer, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Item, Input } from 'native-base';
import SideBar from '../components/SideBar';
import SquareMenu from '../components/SquareMenu';
export default class DrawerExample extends Component {
  


	closeDrawer() {
        this._drawer._root.close()
    };
    openDrawer() {
        this._drawer._root.open()
    };


    render() {
        return (
            <Drawer
                ref={(ref) => { this._drawer = ref; }}
                content={<SideBar navigator={this.navigator} />}
                onClose={() => this.closeDrawer()} >
            <Container>
             
                <Header style={{backgroundColor:'#696969'}}>
                    <Left>
                        <Button transparent onPress={()=>this.openDrawer()}>
                            <Icon name='menu' style={{color:'gold'}} />
                        </Button>
                    </Left>
                    <Body>
                        <Image source={require('../assets/logofont.png')} style={{
				        width:300,
				        height: 35}} resizeMode="contain"/>
				        
                    </Body>
                    <Right>
                    	<Button transparent>
                            <Icon name='search' style={{color:'gold'}}/>
                        </Button>
                    </Right>
                </Header>
               
                    <Content>
                    <View>
                    <ImageBackground source={require('../assets/bg2.png')} style={{
        			 justifyContent:'center', alignItems:'center',
			        width:420,
			        height: 700}}  resizeMode="stretch">
		      			<View style={{top:5}}>
	                   
			           
	                	<View style={{justifyContent:'center', alignItems:'center'}}>
	                    <View style={{height:130, width:130, borderRadius:100, backgroundColor: 'rgba(128, 128, 128, 0.6)'}}> 
	                    <Text style={{color:'#fff'}}> Dzuhur </Text>
	                    <Text style={{fontSize:20}}> 12:08 </Text>
	                    <Text style={{color:'#fff'}}> -02:37:12 </Text>
	                    </View>

	                    <Text> Menteng, Jakarta Pusat</Text>

	                    <View style={{height:50, width:300, borderRadius:30, backgroundColor: 'rgba(128, 128, 128, 0.6)'}}> 
	                    <Text style={{color:'#fff'}}> 11 September 2019 | 11 Muharram 1441 H </Text>                    
	                    </View>

	                    </View>

	                	<ImageBackground source={require('../assets/masjid_terdaftar_block.png')} style={{borderRadius:5, height:70, width:400, margin:5}} resizeMode="contain">
	                				<ImageBackground style={{borderRadius:5, height:30, width:130, margin:8, alignSelf:'flex-end'}} resizeMode="contain"
							        source={require('../assets/jumlah_masjid_terdaftar.png')}>
							        <Text style={{alignSelf:'flex-end', fontWeight:'bold', margin:14, fontSize:11}}>1565</Text>
							        </ImageBackground>
	                	</ImageBackground>

	                	<View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>

							<View>
							<TouchableOpacity style={{margin:5, borderRadius:13, width:80, height:80, justifyContent:'center', alignItems:'center'}}>
							<Image style={{ height:80, width:80, margin:5}}
							        source={require('../assets/masjidku.png')}/>
							</TouchableOpacity>
							<View>
							<Text style={{fontSize:10, fontWeight:'bold', width:50, textAlign:'center', alignSelf:'center'}}> Mesjid-ku </Text>
							</View>
							
							</View>


							<View>

							<TouchableOpacity style={{margin:5, borderRadius:13, width:80, height:80, justifyContent:'center', alignItems:'center'}}>
							<Image style={{ height:80, width:80, margin:5}}
							        source={require('../assets/baca_quran.png')}/>
							</TouchableOpacity>
							<View>
							<Text style={{fontSize:10, fontWeight:'bold', width:50, textAlign:'center', alignSelf:'center'}}> Baca Qur'an </Text>
							</View>
							</View>

							<View>

							<TouchableOpacity style={{margin:5, borderRadius:13, width:80, height:80, justifyContent:'center', alignItems:'center'}}>
							<Image style={{ height:80, width:80, margin:5}}
							        source={require('../assets/kiblat.png')}/>
							</TouchableOpacity>
							<View>
							<Text style={{fontSize:10, fontWeight:'bold', width:50, textAlign:'center', alignSelf:'center'}}> Kiblat </Text>
							</View>
							</View>

							<View>

							<TouchableOpacity style={{margin:5, borderRadius:13, width:80, height:80, justifyContent:'center', alignItems:'center'}}>
							<Image style={{ height:80, width:80, margin:5}}
							        source={require('../assets/donasi.png')}/>
							</TouchableOpacity>
							<View>
							<Text style={{fontSize:10, fontWeight:'bold', width:50, textAlign:'center', alignSelf:'center'}}> Donasi </Text>
							</View>
							</View>


							</View>
						</View>
                    </ImageBackground>
				    


							<View style={{width:400,backgroundColor:'#FFF8DC', height:200, marginTop:10}}>
							<Text style={{fontWeight:'bold', fontSize:15, margin:15}}> ENSIKLOPEDIA </Text>

							<View style={{width:Dimensions.get('window').width}}>
                        	<View style={{flexDirection:'row'}}>
	                        	<TouchableOpacity style={{flex:1,margin:10, borderRadius:13, backgroundColor:'#fff', height:50}}>
							     
							    </TouchableOpacity>
							    <TouchableOpacity style={{margin:10, borderRadius:13, backgroundColor:'#fff', height:50}}>
							     
							    </TouchableOpacity>

                
                           	</View>
                           	</View>

							</View>


                        </View>

			                    
                    </Content>

                    
                    <View>
                        <View>
                            
                        </View>
                    </View>
                
                
            </Container>
            </Drawer>
        );
    }


 }