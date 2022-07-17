import { StyleSheet, Image } from 'react-native';
import React from 'react';
import SevapButton from './screens/sevapbutton';
import Profile from './screens/profile';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Applist from './screens/applist.js';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarPosition="bottom"
        screenOptions={{
          headerShown: false,
          swipeEnabled: true,
          tabBarStyle: { height: 0 },
        }}
        initialRouteName="Profile"
      >
        <Tab.Screen name="Applist" component={Applist} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Sevap" component={SevapButton} />
      </Tab.Navigator>
      <Image
        style={styles.cloud}
        source={require('./public/cloud-compressed.png')}
      />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  cloud: {
    position: 'absolute',
    width: 600,
    height: 150,
    bottom: 0,
    right: -100,
  },
});
