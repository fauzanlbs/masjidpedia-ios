import React from 'react';
import {View, Text} from 'react-native';


function Bantuan() {
  return(
      <View style={{ flex: 1, margin: 10 }}>
      	<View
		  style={{
		    borderBottomColor: 'black',
		    borderBottomWidth: 1, marginTop:10, marginBottom:10
		  }}
		/>
        <Text style={{ fontFamily:'Bahnschrift', fontWeight:'bold'}}>BANTUAN</Text>
        <View
		  style={{
		    borderBottomColor: 'black',
		    borderBottomWidth: 1, marginTop:10, marginBottom:10
		  }}
		/>
        <Text style={{ fontFamily:'Bahnschrift'}}>

        <Text style={{ fontFamily:'Bahnschrift', fontWeight:'bold', margin:10}}>Cara Download Aplikasi Masjidpedia</Text>{"\n"}
        1. Buka Aplikasi App Store. {"\n"}
        2. Lakukan pencarian Masjidpedia. {"\n"}
        3. Klik Masjidpedia. {"\n"}
        4. Klik Install. {"\n"}

        </Text>
      </View>
      
  )
}

export default Bantuan;