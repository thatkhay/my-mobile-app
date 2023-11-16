import React, { useState } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import CurrentWeather from './src/screens/CurrentWeather'
import UpcomingWeather from './src/screens/UpcomingWeather'
import City from './src/screens/City'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const App = () => {
  const [loading, setLoading] = useState(true)
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={"large"} color={"blue"} />
      </View>
    )
  }
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "lightblue",
          },
          headerStyle: {
            backgroundColor: "lightblue",
          },
          headerTitleStyle: {
           fontWeight: "bold",
           fontSize: 25,
           color: "tomato",
          },
        }}
      >
        <Tab.Screen 
          name="Current" 
          component={CurrentWeather} 
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather name={"droplet"} size={25} color={focused ? "tomato" : "black"} />
            ),
          }}
        />
        <Tab.Screen name="Upcoming" component={UpcomingWeather} 
        
         options={{
            tabBarIcon: ({ focused }) => (
              <Feather name={"clock"} size={25} color={focused ? "tomato" : "black"} />
            ),
          }}
        />
        <Tab.Screen name="City" component={City}
        
         options={{
            tabBarIcon: ({ focused }) => (
              <Feather name={"home"} size={25} color={focused ? "tomato" : "black"} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    justifyContent: "center",
  },
})

export default App
