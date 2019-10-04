import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import {createAppContainer} from 'react-navigation';
import Home from './screens/Home';
import Search from './screens/Search';
import Library from './screens/Library';


class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>App.js</Text>
      </View>
    )
  }
}

const Nav =  createBottomTabNavigator({
  Home: {screen: Home,
      navigationOptions: {
        tabBarlabel: 'Home',
      }},
      Search: {screen: Search,
        navigationOptions: {
          tabBarlabel: 'Search',
        }},
      Library: {screen: Library,
        navigationOptions: {
          tabBarlabel: 'Library',
        }}
    
    }, {
      initialRouteName: 'Home',
      order: ['Home', 'Search', 'Library'],
      navigationOptions: {
        tabBarVisible: true
      },
      tabBarOptions: {
        activeTintColor: '#a5d6a7',
        innactiveTintColor: 'grey',
        style: {
          backgroundColor: '#212121',
          borderTopWidth: 0,
          shadowOffset: { width: 5, height: 3 },
          shadowColor: 'black',
          shadowOpacity: 0.5,
          elevation: 5
        }
      }
    })

    export default createAppContainer(Nav);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: 'center',
    justifyContent: 'center'
  }
});