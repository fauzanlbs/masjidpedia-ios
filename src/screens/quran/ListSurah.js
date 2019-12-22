import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import listSurahJson from '../../helper/surahs.pretty.json'


class ListSurah extends Component{

constructor(props){
	super(props)
	
}
  


  render(){
  		return(
      <View style={{ flex: 1 }}>
        <FlatList 
        data={listSurahJson}
        extraData={this.state}
        renderItem={({ item, index }) => (
        	<TouchableOpacity style={{backgroundColor:'lightgrey', borderWidth:0.1, elevation:1, padding:5, borderRadius:4, backgroundColor: (index % 2 == 0) ? '#ecf0f1' : '#fff'}} onPress={()=>this.props.navigation.navigate('DetailSurah',{no: item.number})}>
         	<Text style={{ fontFamily:'Amiri-Regular'}}> {item.transliteration_en + '('+item.translation_id+')'} </Text>
         	</TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        />
      </View>
      
  )
  }
  
}

export default ListSurah;