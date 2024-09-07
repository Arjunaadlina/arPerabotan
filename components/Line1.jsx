import { StyleSheet,Dimensions, View } from 'react-native'
import React from 'react'

const responsive = Dimensions.get('window').width

const Line1 = () => {
  return (
    <View>
      <View style={{height : responsive * 0.1, width : responsive *0.1, borderBottomWidth : 2, borderLeftWidth : 2,borderBottomLeftRadius: responsive, position : 'absolute', top: responsive * 0.3, left : responsive * 0.18, borderColor : '#aaa'}}/>
      <View style={{height : responsive * 0.1, width : responsive *0.15, borderTopWidth : 2, position : 'absolute', top: responsive * 0.4, left : responsive * 0.32, borderColor : '#aaa'}}/>
      <View style={{height : responsive * 0.06, width : responsive *0.15, borderTopWidth : 2, position : 'absolute', top: responsive * 0.4, left : responsive * 0.52, borderRightWidth : 2, borderTopRightRadius : responsive , borderColor : '#aaa'}}/>
    </View>
  )
}

export default Line1

const styles = StyleSheet.create({})