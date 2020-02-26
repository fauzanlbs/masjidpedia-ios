import React from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';


function MasjidTerdaftar() {
  return(
      <View style={{ flex: 1 }}>
        <View style={{backgroundColor:'gray', alignSelf: 'stretch', padding:7}}> 
        <Text style={{color:'#FFF'}}> LIST MASJID TERDAFTAR</Text>
        </View>

        <View style={{backgroundColor:'lightgrey', alignSelf: 'stretch', padding:7}}> 
        <View style={{border:1,borderRadius:3}}> 
        <TextInput style={{width:340, height:40, borderRadius:8, backgroundColor:'#fff', margin:5, padding:10,textAlign:'left', color:'grey'}} placeholder="Tulis nama kota atau nama masjid ..." /> 
        </View>
        </View>

        <View style={{backgroundColor:'#F5F5F5'}}>
        <TouchableOpacity style={{alignSelf: 'stretch', border:1, height:40, borderRadius:3, backgroundColor:'#fff', margin:5, justifyContent:'center'}}>
          <Text style={{alignContent: 'center'}}>Masjid Agung</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignSelf: 'stretch', border:1, height:40, borderRadius:3, backgroundColor:'#fff', margin:5}}>
          <Text>Masjid Bersejarah</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignSelf: 'stretch', border:1, height:40, borderRadius:3, backgroundColor:'#fff', margin:5}}>
          <Text>Masjid Besar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignSelf: 'stretch', border:1, height:40, borderRadius:3, backgroundColor:'#fff', margin:5}}>
          <Text>Masjid Jami</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignSelf: 'stretch', border:1, height:40, borderRadius:3, backgroundColor:'#fff', margin:5}}>
          <Text>Masjid di Tempat Publik</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignSelf: 'stretch', border:1, height:40, borderRadius:3, backgroundColor:'#fff', margin:5}}>
          <Text>Masjid Raya</Text>
        </TouchableOpacity>
        </View>
        
      </View>
      
  )
}

export default MasjidTerdaftar;