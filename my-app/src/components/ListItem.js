import React from 'react'
import { View, Text, StyleSheet, StatusBar } from'react-native' 
import  { Feather } from '@expo/vector-icons'

const ListItem = (props) => {
  const { dt_txt, min, max , condition } = props
  return (
   <View style={styles.item}>
    <Feather name={'sun'} size={50} color={'white'} />
    <Text style={styles.date}> {dt_txt} </Text>
    <Text style={styles.temp}> {min} </Text>
    <Text style={styles.temp}> {max} </Text>
</View>
  )
}
const styles = StyleSheet.create({
    item: {
   padding: 20,
   marginVertical: 8,
   marginHorizontal: 16,
   flexDirection: 'row',
   justifyContent:'space-around',
   alignItems: 'center',
   borderWidth: 5,
   backgroundColor: 'pink',  
},
temp: {
color: 'white',
fontSize: 20,
},
container: {
    flex: 1,
   marginTop: StatusBar.currentHeight || 0,
   backgroundColor: 'royalblue' ,
},
image: {
flex: 1,
},
})
export default ListItem