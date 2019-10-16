

import React, { Component } from 'react';
import { View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Card, CardItem,Drawer, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Item, Input } from 'native-base';
import SideBar from '../components/SideBar';
import SquareMenu from '../components/SquareMenu';
export default class DrawerExample extends Component {
  


	closeDrawer() {
        this._drawer._root.close()
    };
    openDrawer() {
        this._drawer._root.open()
    };


    render() {
        return (
            <Drawer
                ref={(ref) => { this._drawer = ref; }}
                content={<SideBar navigator={this.navigator} />}
                onClose={() => this.closeDrawer()} >
            <Container>
             
                <Header style={{backgroundColor:'#696969'}}>
                    <Left>
                        <Button transparent onPress={()=>this.openDrawer()}>
                            <Icon name='menu' style={{color:'#fff'}} />
                        </Button>
                    </Left>
                    <Body>
                        <Image source={require('../assets/logofont.png')} style={{
				        width:300,
				        height: 35}} resizeMode="contain"/>
				        
                    </Body>
                    <Right>
                    	<Button transparent>
                            <Icon name='search' style={{color:'#fff'}}/>
                        </Button>
                    </Right>
                </Header>
               
                    <Content>
                    <View>
                    <ImageBackground source={require('../assets/bg2.png')} style={{
        			 justifyContent:'center', alignItems:'center',
			        width:420,
			        height: 700}}  resizeMode="stretch">
		      			<View style={{flexDirection:'row', marginTop:50}}>
	                    <TextInput placeholder='Mesin pencari Artikel Islami ...' style={{flex:1,borderRadius:10, borderWidth:1}} />
			            <Icon name='search'/>
	                	</View>

	                	<Image source={require('../assets/masjid_terdaftar_block.png')} style={{borderRadius:5, height:50, width:420, margin:5}} />
                    </ImageBackground>
				    </View>

						
                        <View style={{ margin:7 }}>
                        	<View style={{flexDirection:'row'}}>
	                        	<TouchableOpacity style={{flex:1,margin:10, borderRadius:13}}>
							      <ImageBackground
							        style={{ height:130, width:155}}
							        source={require('../assets/bg2.png')} 
							      >

							      <Image style={{borderRadius:5, height:50, width:130, margin:5}}
							        source={require('../assets/jumlah_masjid_terdaftar.png')}/>

							      </ImageBackground>
							    </TouchableOpacity>
							    <TouchableOpacity style={{margin:10, borderRadius:13}}>
							      <ImageBackground
							        style={{ height:130, width:155}}
							        source={require('../assets/bg2.png')} 
							      >

							      <Image style={{borderRadius:5, height:50, width:130, margin:5}}
							        source={require('../assets/jumlah_masjid_terdaftar.png')}/>

							      </ImageBackground>
							    </TouchableOpacity>


                
                           	</View>



                           	<View
							  style={{
							    borderBottomColor: 'grey',
							    borderBottomWidth: 0.5,
							  }}
							/>


							<Text style={{fontWeight:'bold', fontSize:15, margin:15}}> KATEGORI </Text>

							<ScrollView horizontal style={{flexDirection:'row'}}>

							<View style={{flex:1}}>
							<TouchableOpacity style={{margin:5, borderRadius:13, backgroundColor:'#bbeaa6', width:70, height:70, justifyContent:'center', alignItems:'center'}}>
							<Image style={{ height:50, width:50, margin:5}}
							        source={require('../assets/masjidku.png')}/>
							</TouchableOpacity>
							<View>
							<Text style={{fontSize:10, fontWeight:'bold', width:50, textAlign:'center', alignSelf:'center'}}> Mesjid Terdaftar </Text>
							</View>
							
							</View>


							<View>

							<TouchableOpacity style={{margin:5, borderRadius:13, backgroundColor:'#e688a1', width:70, height:70, justifyContent:'center', alignItems:'center'}}>
							<Image style={{ height:50, width:50, margin:5}}
							        source={require('../assets/dzikir_doa.png')}/>
							</TouchableOpacity>
							<View>
							<Text style={{fontSize:10, fontWeight:'bold', width:50, textAlign:'center', alignSelf:'center'}}> Dzikir & Doa </Text>
							</View>
							</View>



							<View>

							<TouchableOpacity style={{margin:5, borderRadius:13, backgroundColor:'#bbeaa6', width:70, height:70, justifyContent:'center', alignItems:'center'}}>
							<Image style={{ height:50, width:50, margin:5}}
							        source={require('../assets/fiqh.png')}/>
							</TouchableOpacity>
							<View>
							<Text style={{fontSize:10, fontWeight:'bold', width:50, textAlign:'center', alignSelf:'center'}}> Fiqih </Text>
							</View>
							</View>


							<View>

							<TouchableOpacity style={{margin:5, borderRadius:13, backgroundColor:'#ed9a73', width:70, height:70, justifyContent:'center', alignItems:'center'}}>
							<Image style={{ height:50, width:50, margin:5}}
							        source={require('../assets/asmaul_husna.png')}/>
							</TouchableOpacity>
							<View>
							<Text style={{fontSize:10, fontWeight:'bold', width:50, textAlign:'center', alignSelf:'center'}}> Asmaul Husna </Text>
							</View>
							</View>


							<View>

							<TouchableOpacity style={{margin:5, borderRadius:13, backgroundColor:'#bbeaa6', width:70, height:70, justifyContent:'center', alignItems:'center'}}>
							<Image style={{ height:50, width:50, margin:5}}
							        source={require('../assets/baca_quran.png')}/>
							</TouchableOpacity>
							<View>
							<Text style={{fontSize:10, fontWeight:'bold', width:50, textAlign:'center', alignSelf:'center'}}> Baca Quran </Text>
							</View>
							</View>


							</ScrollView>

							<ScrollView horizontal style={{flexDirection:'row'}}>

							<View style={{flex:1}}>
							<TouchableOpacity style={{margin:5, borderRadius:13, backgroundColor:'#bbeaa6', width:70, height:70, justifyContent:'center', alignItems:'center'}}>
							<Image style={{ height:50, width:50, margin:5}}
							        source={require('../assets/adab_akhlak.png')}/>
							</TouchableOpacity>
							<View>
							<Text style={{fontSize:10, fontWeight:'bold', width:50, textAlign:'center', alignSelf:'center'}}> Adab Akhlak </Text>
							</View>
							
							</View>


							<View>

							<TouchableOpacity style={{margin:5, borderRadius:13, backgroundColor:'#e688a1', width:70, height:70, justifyContent:'center', alignItems:'center'}}>
							<Image style={{ height:50, width:50, margin:5}}
							        source={require('../assets/kiblat.png')}/>
							</TouchableOpacity>
							<View>
							<Text style={{fontSize:10, fontWeight:'bold', width:50, textAlign:'center', alignSelf:'center'}}> Kiblat </Text>
							</View>
							</View>



							<View>

							<TouchableOpacity style={{margin:5, borderRadius:13, backgroundColor:'#bbeaa6', width:70, height:70, justifyContent:'center', alignItems:'center'}}>
							<Image style={{ height:50, width:50, margin:5}}
							        source={require('../assets/donasi.png')}/>
							</TouchableOpacity>
							<View>
							<Text style={{fontSize:10, fontWeight:'bold', width:50, textAlign:'center', alignSelf:'center'}}> Donasi </Text>
							</View>
							</View>


							<View>

							<TouchableOpacity style={{margin:5, borderRadius:13, backgroundColor:'#ed9a73', width:70, height:70, justifyContent:'center', alignItems:'center'}}>
							<Image style={{ height:50, width:50, margin:5}}
							        source={require('../assets/kelola_masjid.png')}/>
							</TouchableOpacity>
							<View>
							<Text style={{fontSize:10, fontWeight:'bold', width:50, textAlign:'center', alignSelf:'center'}}> Kelola Masjid </Text>
							</View>
							</View>


							<View>

							<TouchableOpacity style={{margin:5, borderRadius:13, backgroundColor:'#bbeaa6', width:70, height:70, justifyContent:'center', alignItems:'center'}}>
							<Image style={{ height:50, width:50, margin:5}}
							        source={require('../assets/sirah.png')}/>
							</TouchableOpacity>
							<View>
							<Text style={{fontSize:10, fontWeight:'bold', width:50, textAlign:'center', alignSelf:'center'}}> Sirah </Text>
							</View>
							</View>


							</ScrollView>


							<View style={{width:400,backgroundColor:'#FFF8DC', height:200, marginTop:10}}>
							<Text style={{fontWeight:'bold', fontSize:15, margin:15}}> ENSIKLOPEDIA </Text>

							<View style={{width:Dimensions.get('window').width}}>
                        	<View style={{flexDirection:'row'}}>
	                        	<TouchableOpacity style={{flex:1,margin:10, borderRadius:13, backgroundColor:'#fff', height:50}}>
							     
							    </TouchableOpacity>
							    <TouchableOpacity style={{margin:10, borderRadius:13, backgroundColor:'#fff', height:50}}>
							     
							    </TouchableOpacity>

                
                           	</View>
                           	</View>

							</View>


                        </View>

			                    
                    </Content>

                    
                    <View>
                        <View>
                            
                        </View>
                    </View>
                
                
            </Container>
            </Drawer>
        );
    }


 }