import { StatusBar, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const responsive = Dimensions.get('window').width

const Details = ({route}) => {
    const navigation= useNavigation()
    const item = route.params.item
    console.log(item)
    function onPressA() {
        if(item.id == '3'){
          navigation.navigate('Kursi', {item})
        }else {
          
        navigation.navigate('Ar', {item})
        }
      }

  return (
    <View style={{flex : 1, backgroundColor : '#FFF7FC'}}>
        <StatusBar backgroundColor='rgb(255, 247, 252)' barStyle={'light-content'} />
        <View >
            <Image source={item.image} style={{height : responsive * 1.3, width : '100%',}}/>
        </View>
        <View style={{flex : 1, marginTop : -responsive * 0.2, backgroundColor :'#FFF7FC', borderTopLeftRadius: responsive * 0.08, borderTopRightRadius : responsive* 0.08, padding : responsive * 0.04 }}>
            <Text style={{color:'#000', fontSize: responsive * 0.05, fontWeight:'bold'}}>
                {item.title}
            </Text>
            <Text style={{color:'#000', marginTop:responsive* 0.02}}>Bahan : {item.bahan}</Text>
            <Text style={{color:'#000',}}>Ukuran (m) : {item.ukuran}</Text>
            <Text style={{color:'#000', marginTop:responsive* 0.04, fontWeight:'600'}}>Kelebihan</Text>
            {item.fitur.map((fitur, index) => (
                <Text key={index} style={{color:'#000'}}>- {fitur}</Text>
              ))} 
            <View style={{flex:1,  justifyContent:'flex-end'}}>
                <TouchableOpacity 
                onPress={onPressA}
                style={{backgroundColor : '#FFEEA9', height : responsive * 0.12, marginBottom: responsive * 0.02, borderRadius: responsive * 0.03, justifyContent:'center', alignItems:'center', elevation:.5}}>
                    <Text style={{color:'#DD761C', fontWeight:'bold'}}>Coba AR</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({})