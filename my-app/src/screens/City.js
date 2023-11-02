import React from 'react';
import { SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import IconText from '../components/IconText';

const City = () => {
  const statusBarHeight = StatusBar.currentHeight || 0; // Use 0 as a default value if StatusBar is undefined

  return (
    <SafeAreaView style={[styles.container, { marginTop: statusBarHeight }]}>
      <ImageBackground source={require('../../assets/city-backgound.jpg')} style={styles.imageLayout}>
        <View style={styles.populationWrapper}>
        <Text style={styles.cityName}>London</Text>
        <Text style={styles.countryName}>UK</Text>
        </View>
        <View style={[styles.riseSetWrapper , styles.rowLayout]}>
        <IconText iconName={'users'} iconColor={'red'} bodyText={'8000'} bodyTextStyles={styles.populationText}/>
        </View>
        <View style={[styles.riseSetWrapper , styles.rowLayout]}>
                   <IconText iconName={'sunrise'} iconColor={'white'} bodyText={'10:46:58am'} bodyTextStyles={styles.riseSetText}/>
          
                  <IconText iconName={'sunset'} iconColor={'white'} bodyText={'17:28:15pm'} bodyTextStyles={styles.riseSetText}/>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'royalblue'
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  countryName: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  populationWrapper: {

  alignItems: 'center',
  marginTop: 30,
  },
  populationText: {
fontSize: 25,
marginLeft: 7.5,
color: 'red',

  },
  riseSetWrapper: {

justifyContent: 'space-around',
marginTop: 30,
  },
  riseSetText: {
fontSize: 20,
color: 'white',

  },
  rowLayout:{
flexDirection: 'row',
alignItems: 'center',
  },
});

export default City;
