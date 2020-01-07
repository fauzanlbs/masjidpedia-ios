import React from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity, ImageBackground} from 'react-native';

const screenWidth = Dimensions.get('window').width;

function Islampedia() {
  return(
      <View style={{justifyContent:'center', alignSelf:'center', alignItems:'center'}}>
      	<ImageBackground source={require('../../assets/bg.png')} style={{ flex:1,
        width: null,
            height: null}}  resizeMode="cover">

        <Image source={require('../../assets/banner_islampedia.png')} style={{margin: 10,alignSelf: 'center',borderRadius:5, height:60, width:screenWidth}} resizeMode="cover" />

         			<View style={{flexDirection:'row',justifyContent: 'space-between', margin:10}}>

							<View>
							<TouchableOpacity style={{margin:10}}>
							<Image style={{ height:100, width:100, margin:2}}
							        source={require('../../assets/icon_hadits.png')}/>
							</TouchableOpacity>
							<View>
							<Text style={{fontSize:12, fontWeight:'bold', width:50, textAlign:'center', alignSelf:'center', fontFamily:'Bahnschrift'}}> Hadist </Text>
							</View>
							
							</View>


							<View>

							<TouchableOpacity style={{margin:10}}>
							<Image style={{ height:100, width:100, margin:2}}
							        source={require('../../assets/fiqh.png')}/>
							</TouchableOpacity>
							<View>
							<Text style={{fontSize:12, fontWeight:'bold', width:50, textAlign:'center', alignSelf:'center', fontFamily:'Bahnschrift'}}> Fiqih </Text>
							</View>
							</View>

							<View>

							<TouchableOpacity style={{margin:10}}>
							<Image style={{ height:100, width:100, margin:2}}
							        source={require('../../assets/asmaul_husna.png')}/>
							</TouchableOpacity>
							<View>
							<Text style={{fontSize:12, fontWeight:'bold', width:50, textAlign:'center', alignSelf:'center', fontFamily:'Bahnschrift'}}> Asmaul Husna </Text>
							</View>
							</View>
	

	               </View>


	               <View style={{flexDirection:'row',justifyContent: 'space-between', margin:10}}>

							<View>
							<TouchableOpacity style={{margin:10}}>
							<Image style={{ height:100, width:100, margin:2}}
							        source={require('../../assets/dzikir_doa.png')}/>
							</TouchableOpacity>
							<View>
							<Text style={{fontSize:12, fontWeight:'bold', width:50, textAlign:'center', alignSelf:'center', fontFamily:'Bahnschrift'}}> Dzikir & Doa </Text>
							</View>
							
							</View>


							<View>

							<TouchableOpacity style={{margin:10}}>
							<Image style={{ height:100, width:100, margin:2}}
							        source={require('../../assets/sirah.png')}/>
							</TouchableOpacity>
							<View>
							<Text style={{fontSize:12, fontWeight:'bold', width:50, textAlign:'center', alignSelf:'center', fontFamily:'Bahnschrift'}}> Sirah </Text>
							</View>
							</View>

							<View>

							<TouchableOpacity style={{margin:10}}>
							<Image style={{ height:100, width:100, margin:2}}
							        source={require('../../assets/adab_akhlak.png')}/>
							</TouchableOpacity>
							<View>
							<Text style={{fontSize:12, fontWeight:'bold', width:50, textAlign:'center', alignSelf:'center', fontFamily:'Bahnschrift'}}> Adab Akhlak </Text>
							</View>
							</View>
	

	               </View>


	                <View style={{flexDirection:'row',justifyContent: 'space-between', margin:10}}>

							<View>
							<TouchableOpacity style={{margin:10}}>
							<Image style={{ height:100, width:100, margin:2}}
							        source={require('../../assets/kelola_masjid.png')}/>
							</TouchableOpacity>
							<View>
							<Text style={{fontSize:12, fontWeight:'bold', width:50, textAlign:'center', alignSelf:'center', fontFamily:'Bahnschrift'}}> Kelola Masjid </Text>
							</View>
							
							</View>


							
	

	               </View>
	      </ImageBackground>
      </View>
      
  )
}

export default Islampedia;