

import React, { Component } from 'react';
import { View, ImageBackground, Dimensions, Image, TouchableOpacity } from 'react-native';
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
                        <Title style={{color:'#fff',fontWeight:'bold'}}>MASJIDPEDIA</Title>
                    </Body>
                    <Right>
                    	<Button transparent>
                            <Icon name='search' style={{color:'#fff'}}/>
                        </Button>
                    </Right>
                </Header>
               
                    <Content>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Image source={require('../assets/bg2.png')} style={{
        			
			        width:420,
			        height: 200,
			        left: 0,
			        top: 0}} imageStyle={{width: 420}} >
			        </Image>
			        </View>
                        <View>
                            <Item regular style={{borderRadius:10}}>
				            <Input placeholder='Mesin pencari Artikel Islami ...' />
				            <Icon name='search'/>
				          </Item>
                        </View>


                        <View style={{ margin:7 }}>
                        	<View style={{flexDirection:'row'}}>
	                        	<TouchableOpacity style={{flex:1,padding:10, borderRadius:13}}>
							      <ImageBackground
							        style={{ height:130, width:180, borderRadius:10}}
							        source={require('../assets/bg2.png')} 
							      >

							      <Image style={{borderRadius:5, height:50, width:130, margin:5}}
							        source={require('../assets/jumlah_masjid_terdaftar.png')}/>

							      </ImageBackground>
							    </TouchableOpacity>
							    <TouchableOpacity style={{padding:10, borderRadius:13}}>
							      <ImageBackground
							        style={{ height:130, width:180, borderRadius:10}}
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

							<View style={{flexDirection:'row'}}>

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


							</View>

							<View style={{flexDirection:'row'}}>

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