import React, {Component} from 'react';
import {View, Text, FlatList, ScrollView, TouchableOpacity} from 'react-native';
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
        renderItem={({ item }) => (
        	<TouchableOpacity onPress={()=>this.props.navigation.navigate('DetailSurah',{no: item.number})}>
         	<Text> {item.transliteration_en + '('+item.translation_id+')'} </Text>
         	</TouchableOpacity>
        )}
        />
      </View>
      
  )
  }
  
}

export default ListSurah;