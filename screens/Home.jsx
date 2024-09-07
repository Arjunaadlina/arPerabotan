import { StatusBar, StyleSheet, Text, View, Dimensions, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const responsive = Dimensions.get('window').width

const Home = () => {

  const navigation = useNavigation()

  const data = [
    {
      id : '1',
      title : 'Meja Rias',
      bahan : 'Kayu Jati',
      ukuran : '1 x 1.8',
      fitur  : ['Kayu Jati', 'Terdapat 3 Laci', 'Garansi 7 Bulan'],
      image : require('../assets/images/dipan.jpeg'),
      model3d : require('../assets/models/dipan3.glb'),
      texture : require('../assets/models/materialdipan.png'),
      position : [0, 0, -0.4],
      scale : [0.1, 0.1, 0.1],
      rotation : [0, 0, 0]
    },
    {
      id : '2',
      title : 'Kursi Kayu',
      bahan : 'Kayu Mahoni',
      ukuran : '50 x 1.2',
      fitur  : ['Kayu Mahoni','Anti Rayap', 'Garansi 3 Bulan'],
      image : require('../assets/images/kursi2.jpg'),
      model3d : require('../assets/models/kursii.glb'),
      texture : require('../assets/models/kursi.png'),
      position : [0, 0, -0.6],
      scale : [0.1, 0.1, 0.1],
      rotation : [0, 130, 0]
    },
    {
      id : '3',
      title : 'Kursi Modern',
      bahan : 'Kayu Mahoni',
      ukuran : '50 x 1.2',
      fitur  : ['Kayu Mahoni','Anti Rayap', 'Garansi 3 Bulan'],
      image : require('../assets/images/image.png'),
      position : [0, 0, -0.6],
      scale : [0.1, 0.1, 0.1],
      rotation : [0, 130, 0]
    },
  ]

  function onPress(item) {
    
    navigation.navigate('Detail', {item})
  }

  return (
    <View style={{flex:1, backgroundColor : '#FFF7FC', padding : responsive * 0.04}}>
      <StatusBar backgroundColor={'#FFF7FC'} barStyle={'dark-content'}/>
      <Text style={styles.title}>Daftar Produk (Arjuna115)</Text>
      <View>
        <FlatList 
          data={data}
          keyExtractor={(item)=> item.id}
          numColumns={2}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.containerItems} onPress={()=> navigation.navigate('Detail', {item})}>
            
              <Image source={item.image} style={styles.itemImage} />
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={{color:'#000', fontSize : responsive * 0.02}}>Bahan : {item.bahan}</Text>
              <Text style={{color:'#000', fontSize : responsive * 0.02}}>Ukuran : {item.ukuran}</Text>
              {/* <Text>{item.bahan}</Text>
              <Text>{item.ukuran}</Text>
              {item.fitur.map((fitur, index) => (
                <Text key={index}>{fitur}</Text>
              ))} */}
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  title : {
    color:'#000',
    fontWeight : '600',
    fontSize : responsive * 0.04,
    marginBottom: responsive * 0.02
  },
  containerItems : {
    height : responsive * 0.58,
    width : responsive * 0.42,
    margin: responsive * 0.02,
    padding: responsive * 0.02,
    paddingBottom : responsive * 0.03,
    borderRadius: 10,
    backgroundColor: '#FFF',
    elevation : 3
  },
  itemImage: {
    width: '100%',
    height: '75%',
    resizeMode: 'cover',
    borderRadius: 5,
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: responsive * 0.035,
    marginVertical: responsive * 0.01,
    color:'#000'
  }
})
