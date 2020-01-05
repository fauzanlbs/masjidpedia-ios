

import React, { Component } from 'react';
import { View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, TextInput, Text } from 'react-native';
import { Card, CardItem,Drawer, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Item, Input } from 'native-base';
import SideBar from '../components/SideBar';
import SquareMenu from '../components/SquareMenu';
import Slideshow from 'react-native-image-slider-show';
import Api from '../api/server';
import AsyncStorage from '@react-native-community/async-storage';

export default class Home extends Component {
  
	constructor(props){
		super(props);
		this.state={
			user:'',
			data:{}
		}
	}

	async componentDidMount(){

		let api = new Api();
		await api.create();
		let client = api.getClient();
		let token = await AsyncStorage.getItem('api_token');
		let userStorage = await AsyncStorage.getItem('user');
		let user = JSON.parse(userStorage);
		let email = user.customer_email
		this.setState({
			user: email
		})
		// console.log('ini usernya', JSON.parse(user));
		client.post('/home').then((res)=> {
			this.setState({
				data: res.data
			})
			console.log('ini data statenya: ', this.state.data)
		}).catch((err)=> {
			console.log('ini errornya:', err)
		})
	}

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
                content={<SideBar user={this.state.user} myNavigation={this.props.navigation} />}
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
	                    <TouchableOpacity onPress={()=> {this.props.navigation.navigate('JadwalSolat')}} style={{ alignItems:'center',height:130, width:130, borderRadius:100, backgroundColor: 'rgba(128, 128, 128, 0.7)'}}> 
	                    <Text style={{color:'#fff', marginTop:20}}> Dzuhur </Text>
	                    <Text style={{fontSize:45, color:'#fff'}}> 12:08 </Text>
	                    <Text style={{color:'#fff'}}> -02:37:12 </Text>
	                    </TouchableOpacity>

	                    <Text style={{margin:5, fontSize:12}}> Menteng, Jakarta Pusat</Text>

	                    <View style={{alignItems:'center', justifyContent:'center', height:20, width:300, borderRadius:6, margin:3, backgroundColor: 'rgba(128, 128, 128, 0.7)'}}> 
	                    <Text style={{color:'#fff', textAlign:'center', fontFamily:'Bahnschrift'}}> 11 September 2019 | 11 Muharram 1441 H </Text>                    
	                    </View>

	                    <ImageBackground style={{ justifyContent:'center', alignItems:'center', margin:5,
					        width:340, height: 110}}  resizeMode="stretch"
							        source={require('../assets/masjid_terdekat_frame.png')}>
						
							
								  <View style={{flexDirection:'row', top:13}}>
							      <Text style={{flex:1, marginLeft:5, marginRight:5, marginTop:5 , fontFamily:'Bahnschrift', fontSize:19, fontWeight:'bold'}}> Masjid Abu Bakar </Text>
							      <Image style={{ height:23, width:23, position:'absolute', right:78}} source={require('../assets/direction_masjid_terdekat.png')}/>
							      </View>

							      <View style={{flexDirection:'row', top:22}}>
							      <Text style={{flex:1,marginLeft:5, marginRight:5, marginTop:5 , fontFamily:'Bahnschrift', fontSize:19, fontWeight:'bold'}}> Masjid Al Hijriah </Text>
							      <Image style={{ height:23, width:23, position:'absolute', right:78}} source={require('../assets/direction_masjid_terdekat.png')}/>
							      </View>
					   		

					    <Image style={{ height:50, width:50, margin:10, bottom:2, position:'absolute', right:0}} source={require('../assets/refresh_masjid_terdekat.png')}/>
					    
					    </ImageBackground>

					    <TextInput style={{width:340, height:40, borderRadius:8, backgroundColor:'#fff', margin:5, textAlign:'left'}} placeholderTextColor='black' /> 
					    {/*<Text>{this.state.data.title_masjid}</Text>*/}

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
							<Text style={{fontSize:12, fontWeight:'bold', width:50, textAlign:'center', alignSelf:'center', fontFamily:'Bahnschrift'}}> Mesjid-ku </Text>
							</View>
							
							</View>


							<View>

							<TouchableOpacity onPress={()=>this.props.navigation.navigate('ListSurah')} style={{margin:2, borderRadius:13, width:80, height:80, justifyContent:'center', alignItems:'center'}}>
							<Image style={{ height:80, width:80, margin:2}}
							        source={require('../assets/baca_quran.png')}/>
							</TouchableOpacity>
							<View>
							<Text style={{fontSize:12, fontWeight:'bold', width:50, textAlign:'center', alignSelf:'center', fontFamily:'Bahnschrift'}}> Qur'an </Text>
							</View>
							</View>

							<View>

							<TouchableOpacity style={{margin:2, borderRadius:13, width:80, height:80, justifyContent:'center', alignItems:'center'}}>
							<Image style={{ height:80, width:80, margin:2}}
							        source={require('../assets/kiblat.png')}/>
							</TouchableOpacity>
							<View>
							<Text style={{fontSize:12, fontWeight:'bold', width:50, textAlign:'center', alignSelf:'center', fontFamily:'Bahnschrift'}}> Kiblat </Text>
							</View>
							</View>

							<View>

							<TouchableOpacity style={{margin:2, borderRadius:13, width:80, height:80, justifyContent:'center', alignItems:'center'}}>
							<Image style={{ height:80, width:80, margin:2}}
							        source={require('../assets/donasi.png')}/>
							</TouchableOpacity>
							<View>
							<Text style={{fontSize:12, fontWeight:'bold', width:50, textAlign:'center', alignSelf:'center', fontFamily:'Bahnschrift'}}> Donasi </Text>
							</View>
							</View>


							</View>

							

						

	            </View>

	                	
					
        </ImageBackground>
        <View style={{justifyContent:'center', alignItems:'center', margin:20, marginTop:20,backgroundColor:'#fff', borderWidth:0.5,  borderRadius:5}}>
					<View style={{flexDirection:'row',margin:3}}>
                    <Text style={{flex:1, fontSize:20, marginTop:5, fontFamily:'Bahnschrift', fontWeight:'bold'}}> BERITA ISLAMI </Text>
                    <Text style={{fontSize:13, marginTop:5, fontFamily:'Bahnschrift'}}> Lihat Semua </Text>
                    </View>
		                   <View style={{alignItems:'center', justifyContent:'center', width:350}}>
		                    <Slideshow scrollEnabled containerStyle={{marginTop:10}} position={1} arrowSize={1} titleStyle={{color:'#fff', fontSize:12, fontFamily:'Bahnschrift'}} captionStyle={{backgroundColor:'rgba(52, 52, 52, 0.4)', color:'#fff', fontFamily:'Bahnschrift', fontSize:14}} 
							      dataSource={[
							        {
								    caption: 'Ini kota di AS yang Penduduknya Mayoritas Muslim',
								    url:'http://placeimg.com/640/480/nature' },
														        { url:'http://placeimg.com/640/480/nature' },
														        { url:'http://placeimg.com/640/480/nature' }
							    ]} resizeMode="contain" height={200} />
						  </View>
						
		</View>


			<View style={{justifyContent:'center', alignItems:'center', margin:20, marginTop:20,backgroundColor:'#fff', borderWidth:0.5,  borderRadius:5}}>
					<View style={{flexDirection:'row',margin:3}}>
                    <Text style={{flex:1, fontSize:20, marginTop:5, fontFamily:'Bahnschrift', fontWeight:'bold'}}> INFO KAJIAN </Text>
                    <Text style={{fontSize:13, marginTop:5, fontFamily:'Bahnschrift'}}> Lihat Semua </Text>
                    </View>
                    	  
		                   <View  style={{alignItems:'center', justifyContent:'center', width:350, backgroundColor:'rgba(52, 52, 52, 0.4)'}}>
		                     <ScrollView horizontal={true}>
		                     <View style={{backgroundColor:'#fff', margin:10, borderRadius:5, flexDirection:'row'}}>
			                    <View style={{marginLeft:5, marginRight:5, justifyContent:'center', alignItems:'center'}}>
	                            <Text style={{marginLeft:5, marginRight:5, marginTop:5 , fontFamily:'Bahnschrift', fontSize:16}}> Minggu </Text>
	                            <Text style={{marginLeft:5, marginRight:5,  fontFamily:'Bahnschrift', fontSize:40, color:'orange'}}> 17 </Text>
	                            <Text style={{marginLeft:5, marginRight:5,  fontFamily:'Bahnschrift', fontSize:16}}> November </Text>
	                            </View>
	                            <View style={{marginLeft:5, marginRight:5}}>
	                            <Text style={{marginLeft:5, marginRight:5, marginTop:5 , fontFamily:'Bahnschrift', fontSize:16}}> Masjid Darussalam </Text>
	                            <Text style={{marginLeft:5, marginRight:5, marginTop:5 , fontFamily:'Bahnschrift', fontSize:19, fontWeight:'bold'}}> Ustad Syafiq Basalamah </Text>
	                            <Text style={{marginLeft:5, marginRight:5, marginTop:5 , fontFamily:'Bahnschrift', fontSize:16}}> Bekasi </Text>
	                            </View>
		                    </View>

		                    <View style={{backgroundColor:'#fff', margin:10, borderRadius:5, flexDirection:'row'}}>
			                    <View style={{marginLeft:5, marginRight:5, justifyContent:'center', alignItems:'center'}}>
	                            <Text style={{marginLeft:5, marginRight:5, marginTop:5 , fontFamily:'Bahnschrift', fontSize:16}}> Minggu </Text>
	                            <Text style={{marginLeft:5, marginRight:5,  fontFamily:'Bahnschrift', fontSize:40, color:'orange'}}> 21 </Text>
	                            <Text style={{marginLeft:5, marginRight:5,  fontFamily:'Bahnschrift', fontSize:16}}> November </Text>
	                            </View>
	                            <View style={{marginLeft:5, marginRight:5}}>
	                            <Text style={{marginLeft:5, marginRight:5, marginTop:5 , fontFamily:'Bahnschrift', fontSize:16}}> Masjid An Nur </Text>
	                            <Text style={{marginLeft:5, marginRight:5, marginTop:5 , fontFamily:'Bahnschrift', fontSize:19, fontWeight:'bold'}}> Ustad Maududi Abdullah </Text>
	                            <Text style={{marginLeft:5, marginRight:5, marginTop:5 , fontFamily:'Bahnschrift', fontSize:16}}> Bogor </Text>
	                            </View>
		                    </View>

		                    </ScrollView>
						  </View>
						  
						
		</View>

			<View style={{justifyContent:'center', alignItems:'center', margin:20, marginTop:20,backgroundColor:'#fff', borderWidth:0.5,  borderRadius:5}}>
					<View style={{flexDirection:'row',margin:3}}>
                    <Text style={{flex:1, fontSize:20, marginTop:5, fontFamily:'Bahnschrift', fontWeight:'bold'}}> MUTIARA HADIST </Text>
                    <Text style={{fontSize:13, marginTop:5, fontFamily:'Bahnschrift'}}> Lihat Semua </Text>
                    </View>
		                   <View style={{alignItems:'center', justifyContent:'center', width:350}}>
		                    <Image style={{ height:280, width:350, margin:2}} source={{uri:'https://yufidia.com/wp-content/uploads/2019/03/HADITS-012-KOTAK-REV.png'}} resizeMode="stretch"/>
						  </View>
						
		</View>
	    <TouchableOpacity onPress={()=> {this.props.navigation.navigate('Islampedia')}}>                
		<Image source={require('../assets/banner_islampedia.png')} style={{borderRadius:5, height:60, width:350}} resizeMode="stretch" />
		</TouchableOpacity>

		<View style={{justifyContent:'center', alignItems:'center', margin:20, marginTop:20,backgroundColor:'#fff', borderWidth:0.5,  borderRadius:5}}>
					<View style={{flexDirection:'row',margin:3}}>
                    <Text style={{flex:1, fontSize:20, marginTop:5, fontFamily:'Bahnschrift', fontWeight:'bold'}}> VIDEO KAJIAN </Text>
                    
                    </View>
		                   <View style={{alignItems:'center', justifyContent:'center', width:350}}>
		                    <Image style={{ height:280, width:350, margin:2}} source={{uri:'https://i.ytimg.com/vi/smtmRhZ9fos/sddefault.jpg'}} resizeMode="stretch"/>
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