
import React, { Component } from 'react';
import { View, ImageBackground, Image, TouchableOpacity, ScrollView, TextInput, Text, StyleSheet } from 'react-native';
import { Drawer, Container, Header, Content, Button, Left, Right, Body, Icon } from 'native-base';
import SideBar from '../components/SideBar';
import Slideshow from 'react-native-image-slider-show';
import Api from '../api/server';
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';
import axios from 'axios';
import SquareMenu from '../components/SquareMenu'
import Carousel from '../components/Carousel'
import config from '../../config'
// import Geolocation from '@react-native-community/geolocation';


export default class Home extends Component {
  
	constructor(props){
		super(props);
		this.state={
			user:'',
			data:{},
			currentTime: `${new Date().getHours().toLocaleString()}:${new Date().getMinutes().toLocaleString()}`,
			currentDay: moment().format("DD MMMM YYYY"),
			location: '',
			jadwal: [],
			hijri:'',
			days: undefined,
			hours: undefined,
			minutes: undefined,
			seconds: undefined,
			terdekat: '',
		}

		
	}

	async componentDidMount(){
		this._getCoordinat()
		this.fetchDataSolat()

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
		client.post('/home').then((res)=> {
			const hijri = new Intl.DateTimeFormat('fr-TN-u-ca-islamic', {day: 'numeric', month: 'long',year : 'numeric'}).format(Date.now());	
			this.setState({
				data: res.data,
				hijri
			})
			console.log('ini data statenya: ', this.state.data)
			console.log('ini data hijri', this.state.hijri)
		}).catch((err)=> {
			console.log('ini errornya:', err)
		})


		// Geolocation.getCurrentPosition(info => console.log(info));

		// this.interval = setInterval(() => {
		// 	const { timeTillDate, timeFormat } = this.props;
		// 	const then = moment(this.state.terdekat, "hh:mm a");
		// 	const now = moment();
		// 	const durasi = moment.duration(then.diff(now)); 
		// 	const hours = durasi.get("hours").toString().padStart(2, '0');
		// 	const minutes = durasi.get("minutes").toString().padStart(2, '0');
		// 	const seconds = durasi.get("seconds").toString().padStart(2, '0');
		// 	this.setState({ hours, minutes, seconds });
		// }, 1000);

		
	}


	fetchLocation(lat,lon){
		let myGoogleKey = config.GOOGLE_KEY
		fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + lat + ',' + lon + '&key=' + myGoogleKey)
        .then((response) => response.json())
        .then((responseJson) => {
			// console.log('ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson));
			this.setState({
				location: responseJson.results[0]['formatted_address']
			})
			// console.log(responseJson.results[0]['formatted_address']);
			})
	}


	_getCoordinat(){
		//Get location
		navigator.geolocation.getCurrentPosition((position) => {
				// this.setState({
				// 	 latitude: position.coords.latitude,
				// 	 longitude: position.coords.longitude
				// });
				this.fetchLocation(position.coords.latitude,position.coords.longitude)
			},
			(error) => console.log( "Error get location", error.message ),
			{ enableHighAccuracy: false, timeout: 20000, maximumAge: 10000 },
		);
	}

	fetchDataSolat(){
  
		let token = config.TOKEN_SOLAT;
		this.state.latitude = '3.2219665'
		this.state.longitude = '101.7210999'
		// let url = `https://muslimsalat.com/daily.json?latitude=${this.state.latitude}&&longitute=${this.state.longitude}&&key=${token}`;
		axios.get(`https://muslimsalat.com/kualalumpur.json?key=${token}`).then(res => {
		  this.setState({
			jadwal: res.data.items[0],
		  })
		  console.log('jadwal solat home', this.state.jadwal);

		  const jadwal = [res.data.items[0]['fajr'], res.data.items[0]['dhuhr'], res.data.items[0]['asr'], res.data.items[0]['maghrib'], res.data.items[0]['isha']];
		  const sekarang = moment();
		  const terdekat = jadwal.find((item)=> {return moment(item, "hh:mm a").format('HH:mm:ss') > moment(sekarang, "hh:mm a").format('HH:mm:ss')});
		  console.log('terdekat', terdekat);
		})
		
	  }

	componentWillUnmount() {
        if(this.interval) {
			clearInterval(this.interval);
		}
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
	                    <Text style={{fontSize:45, color:'#fff'}}> {this.state.currentTime} </Text>
	                    <Text style={{color:'#fff'}}> -02:37:12 </Text>
	                    </TouchableOpacity>

		<Text style={{margin:5, fontSize:12}}>{this.state.location}</Text>

						{this.state.hijri?(
	                    <View style={{alignItems:'center', justifyContent:'center', height:30, width:300, borderRadius:6, margin:3, backgroundColor: 'rgba(128, 128, 128, 0.7)'}}> 
						 <Text style={{color:'#fff', fontFamily:'Bahnschrift'}}> {this.state.currentDay} | {this.state.hijri} </Text>  
	                    </View>
						):null
						}

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
						<View style={{justifyContent:'center'}}>
					    <TextInput style={{width:340, height:40, borderRadius:8, backgroundColor:'#fff', margin:5, padding:10,textAlign:'left', fontSize:12}} placeholderTextColor='black' placeholder="Ketik Topik Islami Yang Anda Cari ..." /> 
						<Image style={{ height:32, width:32, position:'absolute', right:11}} source={require('../assets/search.png')}/>
						</View>

					    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('MasjidTerdaftar')}} style={{flex: 1, flexDirection: 'row'}}>
					    <ImageBackground source={require('../assets/masjid_terdaftar_block_polos.png')} style={{borderRadius:5, height:60, width:340}} resizeMode="contain"> 
						<Text style={{ position:'absolute', left:0, bottom:10, margin:11}}> {this.state.data.title_masjid} </Text>
	              		<Image style={{ height:30, width:80, margin:5, bottom:10, position:'absolute', right:0}} source={require('../assets/jumlah_masjid_terdaftar.png')}/>
						 
	                	</ImageBackground>
	                	</TouchableOpacity>
 
						<View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>		
							<SquareMenu onPress={()=>this.props.navigation.navigate('ListSurah')} iconSource={require('../assets/masjidku.png')} title="Masjid"/>
							<SquareMenu onPress={()=>this.props.navigation.navigate('ListSurah')} iconSource={require('../assets/baca_quran.png')} title="Qur'an"/>
							<SquareMenu onPress={()=>this.props.navigation.navigate('Kiblat')} iconSource={require('../assets/kiblat.png')} title="Kiblat"/>
							<SquareMenu onPress={()=>this.props.navigation.navigate('Donasi')} iconSource={require('../assets/donasi.png')} title="Donasi"/>					
						</View>
	            </View>
			
        </ImageBackground>
        <View style={styles.containerPoster}>
					<View style={{flexDirection:'row',margin:3, alignItems:'center'}}>
                    <Text style={styles.titlePoster}> BERITA ISLAMI </Text>
					<TouchableOpacity onPress={()=>this.props.navigation.navigate('BeritaIslamiList')}>
                    <Text style={{fontSize:13, marginTop:5, fontFamily:'Bahnschrift'}}> Lihat Semua </Text>
					</TouchableOpacity>
                    </View>
		                   <TouchableOpacity style={{alignItems:'center', justifyContent:'center', width:350}} onPress={()=>this.props.navigation.navigate('BeritaIslamiDetail')}>
		                    <Slideshow scrollEnabled containerStyle={{marginTop:10}} position={1} arrowSize={10} titleStyle={{color:'#fff', fontSize:12, fontFamily:'Bahnschrift'}} captionStyle={{backgroundColor:'rgba(52, 52, 52, 0.4)', color:'#fff', fontFamily:'Bahnschrift', fontSize:14}} 
							      dataSource={[
							        {
								    caption: 'Ini kota di AS yang Penduduknya Mayoritas Muslim',
								    url:"https://dev.mymasjidpedia.id/media/image/gallery/Gallery-8905db13e2537fd1.jpg" },
														        { url:"https://dev.mymasjidpedia.id/media/image/gallery/Gallery-26615d9b419c42c04.jpg" },
														        { url:"https://dev.mymasjidpedia.id/media/image/gallery/Gallery-26615d89847c0c6aa.jpg" }
							    ]} resizeMode="contain" height={200} />
						  </TouchableOpacity>
						
		</View>

		{/* <Carousel data = {dummyData}/> */}


			<View style={styles.containerPoster}>
					<View style={{flexDirection:'row',margin:3, alignItems:'center'}}>
                    <Text style={styles.titlePoster}> INFO KAJIAN </Text>
					<TouchableOpacity onPress={()=>this.props.navigation.navigate('InfoKajianList')}>
                    <Text style={{fontSize:13, marginTop:5, fontFamily:'Bahnschrift'}}> Lihat Semua </Text>
					</TouchableOpacity>
                    </View>
                    	  
		                   <View  style={{alignItems:'center', justifyContent:'center', width:350, backgroundColor:'rgba(52, 52, 52, 0.4)'}}>
		                     <ScrollView horizontal={true}>
		                     <TouchableOpacity style={{backgroundColor:'#fff', margin:10, borderRadius:5, flexDirection:'row'}} onPress={()=>this.props.navigation.navigate('InfoKajianDetail')}>
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
		                    </TouchableOpacity>

		                    <TouchableOpacity style={{backgroundColor:'#fff', margin:10, borderRadius:5, flexDirection:'row'}} onPress={()=>this.props.navigation.navigate('InfoKajianDetail')}>
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
		                    </TouchableOpacity>

		                    </ScrollView>
						  </View>
						  
						
		</View>

		<View style={styles.containerPoster}>
					<View style={{flexDirection:'row',margin:3, alignItems:'center'}}>
                    <Text style={styles.titlePoster}> MUTIARA HADIST </Text>
					<TouchableOpacity onPress={()=>this.props.navigation.navigate('MutiaraHadistList')}>
                    <Text style={{fontSize:13, marginTop:5, fontFamily:'Bahnschrift'}}> Lihat Semua </Text>
					</TouchableOpacity>
                    </View>
		                   <View style={{alignItems:'center', justifyContent:'center', width:350}}>
		                    <Image style={{ height:280, width:350, margin:2}} source={{uri:'https://yufidia.com/wp-content/uploads/2019/03/HADITS-012-KOTAK-REV.png'}} resizeMode="stretch"/>
						  </View>
						
		</View>
	    <TouchableOpacity onPress={()=> {this.props.navigation.navigate('Islampedia')}}>                
		<Image source={require('../assets/banner_islampedia.png')} style={{borderRadius:5, height:60, width:350}} resizeMode="stretch" />
		</TouchableOpacity>

		<View style={styles.containerPoster}>
					<View style={{flexDirection:'row',margin:3}}>
                    <Text style={styles.titlePoster}> VIDEO KAJIAN </Text>
                    
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


 const styles = StyleSheet.create({
	 containerPoster: {
		justifyContent:'center', alignItems:'center', margin:20, marginTop:20,backgroundColor:'#fff', borderWidth:0.5,  borderRadius:5, borderColor:'grey'
	 },
	 titlePoster:{
		flex:1, fontSize:20, marginTop:5, fontFamily:'Bahnschrift', fontWeight:'bold'
	 }
 })



 const dummyData =
        [{
                title: 'Ini kota di AS yang Penduduknya Mayoritas Muslim', url: 'https://dev.mymasjidpedia.id/media/image/gallery/Gallery-8905db13e2537fd1.jpg',
                description: "Ini kota di AS yang Penduduknya Mayoritas Muslim.",
                id: 1

        },
        {
			title: 'Ini kota di AS yang Penduduknya Mayoritas Muslim', url: 'https://dev.mymasjidpedia.id/media/image/gallery/Gallery-26615d9b419c42c04.jpg',
			description: "Ini kota di AS yang Penduduknya Mayoritas Muslim.",
			id: 2

		},
        {
			title: 'Ini kota di AS yang Penduduknya Mayoritas Muslim', url: 'https://dev.mymasjidpedia.id/media/image/gallery/Gallery-26615d89847c0c6aa.jpg',
			description: "Ini kota di AS yang Penduduknya Mayoritas Muslim.",
			id: 3

		}]