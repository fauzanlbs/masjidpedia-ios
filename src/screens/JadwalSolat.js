import React from 'react';
import {View, Text, Image} from 'react-native';


function JadwalSolat() {
  return(
      <View style={{ flex: 1 }}>
        <View style={{alignItems:'center', justifyContent:'center'}}>
		     <Image style={{ height:230, width:380, margin:2}} source={require('../assets/bg_shubuh.png')} resizeMode="stretch"/>
		
		 	<Text style={{margin:5, fontSize:11}}> Menteng, Jakarta Pusat</Text>

	        <View style={{ height:20, width:300, borderRadius:6, margin:3, backgroundColor: 'rgba(128, 128, 128, 0.7)'}}> 
	        <Text style={{color:'#fff', textAlign:'center', fontFamily:'Bahnschrift'}}> 11 September 2019 | 11 Muharram 1441 H </Text>                    
	        </View>
	    </View>
      </View>
      
  )
}

export default JadwalSolat;