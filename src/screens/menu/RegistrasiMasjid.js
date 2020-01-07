import React from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
const screenWidth = Dimensions.get('window').width;

function RegistrasiMasjid() {
  return(
      <View style={{ flex: 1 }}>
 
        <TouchableOpacity style={{alignItems:'center', justifyContent:'center'}}>
		   <Image style={{ height:280, width:screenWidth, margin:2}} source={{uri:'https://f0.pngfuel.com/png/1020/392/grey-and-blue-arrow-illustration-png-clip-art.png'}} resizeMode="stretch"/>
		</TouchableOpacity>
      </View>
      
  )
}

export default RegistrasiMasjid;