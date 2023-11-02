import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const RowText = ({}) => {
  return (
    <View style={styles.containerStyles}>
        <Text style={styles.messageOneStyles}>{messageOne}</Text>
    <Text style={styles.messageTwoStyles}>{messageTwo}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default RowText