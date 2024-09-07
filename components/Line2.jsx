import { StyleSheet,Dimensions, View } from 'react-native'
import React from 'react'

const responsive = Dimensions.get('window').width

const Line2 = () => {
  return (
    <View>
      <View style={{height : responsive * 0.1, width : responsive *0.1, borderBottomWidth : 2, borderRightWidth : 2,borderBottomRightRadius: responsive * 0.08, position : 'absolute', top: responsive * 0.68, left : responsive * 0.635, borderColor : '#aaa'}}/>
      <View style={{height : responsive * 0.1, width : responsive *0.15, borderTopWidth : 2, position : 'absolute', top: responsive * 0.775, left : responsive * 0.45, borderColor : '#aaa'}}/>
      <View style={{height : responsive * 0.1, width : responsive *0.15, borderTopWidth : 2, borderLeftWidth:2,position : 'absolute', top: responsive * 0.775, left : responsive * 0.26, borderColor : '#aaa', borderTopLeftRadius: responsive}}/>
      <View style={{height : responsive * 0.2, width : responsive *0.09, borderBottomWidth : 2, borderLeftWidth:2,position : 'absolute', top: responsive * 0.92, left : responsive * 0.26, borderColor : '#aaa', borderBottomLeftRadius: responsive }}/>
    </View>
  )
}

export default Line2

const styles = StyleSheet.create({})