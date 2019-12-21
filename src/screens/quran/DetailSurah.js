import React, {Component} from 'react';
import {View, Text} from 'react-native';
import dataSurah from '../../helper/en-id.pretty.json';


class DetailSurah extends Component{
constructor(props){
 super(props)

}


componentDidMount(){
	
console.log('ini datanya: ',dataSurah)
		
}

render(){
  return(
      <View style={{ flex: 1 }}>
        <Text> Detail Surah </Text>
      </View>
      
  )
}
}

export default DetailSurah;