import React from 'react';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AntiPollutionMethodsScreen from '../screens/AntiPollutionMethodsScreen';
import PollutedAreasScreen from '../screens/PollutedAreas';
import  WeatherScreen  from '../screens/WeatherScreen'

export const AppTabNavigator = createBottomTabNavigator({

  Weather : {
    screen : WeatherScreen,   
    navigationOptions:{
      tabBarLabel : "Weather"
    }
    },
  PollutedAreas: {
    screen : PollutedAreasScreen,
    navigationOptions :{
  
      tabBarLabel : "AQI feedback",
    }
  }
});