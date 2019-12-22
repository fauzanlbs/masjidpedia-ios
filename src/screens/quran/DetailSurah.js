import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import dataSurah from '../../helper/en-id.pretty.json';



class DetailSurah extends Component{
constructor(props){
 super(props)
 this.state = {
 	dataList : []
 }

}

//  getData(){
// 	let no =  this.props.navigation.state.params.no
// 	let file =  `../../helper/surahs/${no}.json`
// 	const surah =  file
// 	return surah
// }



componentDidMount(){


const noSurah = this.props.navigation.state.params.no

// let surahnya = await this.getData()
// console.log('ini test', surahnya)
// let data = require(surahnya)
// let data =  import(surahnya)

let dataFilter = dataSurah.filter(dt => dt.surah_number == noSurah);

this.setState({dataList: dataFilter})
console.log('filter', noSurah, dataFilter)

		
}

render(){
  return(
      <View style={{ flex: 1 }}>
        <FlatList 
        data={this.state.dataList}
        extraData={this.state}
        renderItem={({ item, index }) => 
        	<View style={{padding:20,borderRadius:4, backgroundColor: (index % 2 == 0) ? '#ecf0f1' : '#fff'}}>
         	<Text> {item.verse_number} {"\n"}</Text> 
         	<Text style={{ fontFamily:'Amiri-Regular', fontSize:25}}> {item.text} {"\n"} </Text> 
         	<Text style={{ fontFamily:'Amiri-Regular'}}> {item.translation_id} </Text>
         	</View> 
        }
        keyExtractor={(item, index) => index.toString()}
        />
      </View>
      
  )
}
}

export default DetailSurah;