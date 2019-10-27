

import React, { Component } from 'react';
import { View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, TextInput, Text } from 'react-native';
import { Card, CardItem,Drawer, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Item, Input } from 'native-base';
import SideBar from '../components/SideBar';
import SquareMenu from '../components/SquareMenu';
import Slideshow from 'react-native-image-slider-show';

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
       
        <View style={{alignItems:'center'}}>

        <ImageBackground source={require('../assets/bg2.png')} style={{
		 justifyContent:'center', alignItems:'center',
        width:420,
        height: 550}}  resizeMode="stretch">
		      			
	                   
			           
	                	<View style={{ alignItems:'center',flexDirection:'column', flex:1, marginTop:20}}>
	                    <View style={{ alignItems:'center',height:130, width:130, borderRadius:100, backgroundColor: 'rgba(128, 128, 128, 0.7)'}}> 
	                    <Text style={{color:'#fff', marginTop:20}}> Dzuhur </Text>
	                    <Text style={{fontSize:45, color:'#fff'}}> 12:08 </Text>
	                    <Text style={{color:'#fff'}}> -02:37:12 </Text>
	                    </View>

	                    <Text style={{margin:5, fontSize:11}}> Menteng, Jakarta Pusat</Text>

	                    <View style={{ height:20, width:300, borderRadius:6, margin:3, backgroundColor: 'rgba(128, 128, 128, 0.7)'}}> 
	                    <Text style={{color:'#fff', textAlign:'center'}}> 11 September 2019 | 11 Muharram 1441 H </Text>                    
	                    </View>

	                    <ImageBackground style={{ justifyContent:'center', alignItems:'center', margin:5,
					        width:340, height: 110}}  resizeMode="stretch"
							        source={require('../assets/masjid_terdekat_frame.png')}>
					    
					    <Image style={{ height:50, width:50, margin:10, bottom:2, position:'absolute', right:0}} source={require('../assets/refresh_masjid_terdekat.png')}/>
					    
					    </ImageBackground>

					    <TextInput style={{width:340, height:40, borderRadius:8, backgroundColor:'#fff', margin:5, textAlign:'left'}} placeholderTextColor='black' /> 


					    <ImageBackground source={require('../assets/masjid_terdaftar_block.png')} style={{borderRadius:5, height:60, width:340}} resizeMode="contain">
	              		<Image style={{ height:30, width:80, margin:5, bottom:10, position:'absolute', right:0}} source={require('../assets/jumlah_masjid_terdaftar.png')}/>
	                	</ImageBackground>



	                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>

							<View>
							<TouchableOpacity style={{margin:2, borderRadius:13, width:80, height:80, justifyContent:'center', alignItems:'center'}}>
							<Image style={{ height:80, width:80, margin:2}}
							        source={require('../assets/masjidku.png')}/>
							</TouchableOpacity>
							<View>
							<Text style={{fontSize:10, fontWeight:'bold', width:50, textAlign:'center', alignSelf:'center'}}> Mesjid-ku </Text>
							</View>
							
							</View>


							<View>

							<TouchableOpacity style={{margin:2, borderRadius:13, width:80, height:80, justifyContent:'center', alignItems:'center'}}>
							<Image style={{ height:80, width:80, margin:2}}
							        source={require('../assets/baca_quran.png')}/>
							</TouchableOpacity>
							<View>
							<Text style={{fontSize:10, fontWeight:'bold', width:50, textAlign:'center', alignSelf:'center'}}> Baca Qur'an </Text>
							</View>
							</View>

							<View>

							<TouchableOpacity style={{margin:2, borderRadius:13, width:80, height:80, justifyContent:'center', alignItems:'center'}}>
							<Image style={{ height:80, width:80, margin:2}}
							        source={require('../assets/kiblat.png')}/>
							</TouchableOpacity>
							<View>
							<Text style={{fontSize:10, fontWeight:'bold', width:50, textAlign:'center', alignSelf:'center'}}> Kiblat </Text>
							</View>
							</View>

							<View>

							<TouchableOpacity style={{margin:2, borderRadius:13, width:80, height:80, justifyContent:'center', alignItems:'center'}}>
							<Image style={{ height:80, width:80, margin:2}}
							        source={require('../assets/donasi.png')}/>
							</TouchableOpacity>
							<View>
							<Text style={{fontSize:10, fontWeight:'bold', width:50, textAlign:'center', alignSelf:'center'}}> Donasi </Text>
							</View>
							</View>


							</View>

							

						

	            </View>

	                	
					
        </ImageBackground>
        <View style={{ustifyContent:'center', alignItems:'center', margin:5, marginTop:20, backgroundColor:'#fff'}}>
					<View style={{flexDirection:'row'}}>
                    <Text style={{flex:1, fontSize:12}}> BERITA ISLAMI </Text>
                    <Text style={{fontSize:10}}> Lihat Semua Artikel </Text>
                    </View>
					                   <View style={{alignItems:'center', justifyContent:'center', width:350}}>
					                    <Slideshow containerStyle={{marginTop:10}} position={1} arrowSize={1}
										      dataSource={[
										        { title: 'title 1',
											    caption: 'caption 1',url:'http://placeimg.com/640/480/animals' },
																	        { title: 'title 1',
											    caption: 'caption 2',url:'http://placeimg.com/640/480/animals' },
																	        { title: 'title 1',
											    caption: 'caption 3',url:'http://placeimg.com/640/480/animals' }
										    ]} resizeMode="contain" height={130} />
									  </View>
						
						</View>
         				<View style={{backgroundColor:'#fff', alignItems:'flex-start'}}>
						<Text style={{textAlign:'left'}}>INFO KAJIAN</Text>
						</View>

						<View style={{marginTop:5, backgroundColor:'#fff', alignItems:'flex-start'}}>
						<Text style={{textAlign:'left'}}>MUTIARA HADIST</Text>
						</View>

	                    
					<Image source={require('../assets/banner_islampedia.png')} style={{borderRadius:5, height:60, width:350}} resizeMode="stretch" />
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