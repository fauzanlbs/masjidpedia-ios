import React from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';

const screenWidth = Dimensions.get('window').width;

function Islampedia() {
  return(
      <View style={{ flex: 1 }}>
      	
        <Image source={require('../../assets/banner_islampedia.png')} style={{alignSelf: 'stretch',borderRadius:5, height:60, width:screenWidth}} resizeMode="contain" />
       

         			<View style={{margin:10,flexDirection:'row', justifyContent:'center', alignItems:'center'}}>

							<View>
							<TouchableOpacity style={{margin:2, borderRadius:13, width:80, height:80, justifyContent:'center', alignItems:'center'}}>
							<Image style={{ height:80, width:80, margin:2}}
							        source={require('../../assets/masjidku.png')}/>
							</TouchableOpacity>
							<View>
							<Text style={{fontSize:12, fontWeight:'bold', width:50, textAlign:'center', alignSelf:'center', fontFamily:'Bahnschrift'}}> Mesjid </Text>
							</View>
							
							</View>


							<View>

							<TouchableOpacity onPress={()=>this.props.navigation.navigate('ListSurah')} style={{margin:2, borderRadius:13, width:80, height:80, justifyContent:'center', alignItems:'center'}}>
							<Image style={{ height:80, width:80, margin:2}}
							        source={require('../../assets/baca_quran.png')}/>
							</TouchableOpacity>
							<View>
							<Text style={{fontSize:12, fontWeight:'bold', width:50, textAlign:'center', alignSelf:'center', fontFamily:'Bahnschrift'}}> Qur'an </Text>
							</View>
							</View>

							<View>

							<TouchableOpacity style={{margin:2, borderRadius:13, width:80, height:80, justifyContent:'center', alignItems:'center'}}>
							<Image style={{ height:80, width:80, margin:2}}
							        source={require('../../assets/kiblat.png')}/>
							</TouchableOpacity>
							<View>
							<Text style={{fontSize:12, fontWeight:'bold', width:50, textAlign:'center', alignSelf:'center', fontFamily:'Bahnschrift'}}> Kiblat </Text>
							</View>
							</View>

							<View>

							<TouchableOpacity style={{margin:2, borderRadius:13, width:80, height:80, justifyContent:'center', alignItems:'center'}}>
							<Image style={{ height:80, width:80, margin:2}}
							        source={require('../../assets/donasi.png')}/>
							</TouchableOpacity>
							<View>
							<Text style={{fontSize:12, fontWeight:'bold', width:50, textAlign:'center', alignSelf:'center', fontFamily:'Bahnschrift'}}> Donasi </Text>
							</View>
							</View>


							

							

						

	            </View>

      </View>
      
  )
}

export default Islampedia;