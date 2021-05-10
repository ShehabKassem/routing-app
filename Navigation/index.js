import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import { Entypo } from '@expo/vector-icons';
import HomeStack from './Home';

const { Navigator, Screen } = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Navigator tabBarOptions={{style:{backgroundColor:'#800080',paddingVertical:5,height:55}}}>
      <Screen
        name="Home"
        component={HomeStack}
        options={{
          title:'Home',
          tabBarLabel: ({focused})=><Text style={{color:focused ? 'cyan':'white' , fontWeight:'bold'}}>Home</Text>,
          style:{color:'red'},
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={24} color='white' />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ({focused})=><Text style={{color:focused ? 'cyan':'white', fontWeight:'bold' }}>Profile</Text>,

          tabBarIcon: ({ color, size }) => (
            <Entypo name="user" size={24} color='white' />
          ),
          
        }}
      />
    </Navigator>
  );
}
