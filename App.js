import React, { Component, Fragment } from "react";
import { Button, StyleSheet, TextInput, View, Text } from "react-native";

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';
import {TabNavigator, createBottomTabNavigator} from 'react-navigation-tabs';
// import Icon from 'react-native-vector-icons/Ionicons'


export class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>isinya</Text>
      </View>
    )
  }
}

export class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    )
  }
}

export class Collections extends Component {
  render() {
    return (
      <View style={{flexDirection:"row"}}>
      <View style={{backgroundColor:"red", height:50,width:50}}>
        <Text>Collections</Text>
      </View>
      <View style={{backgroundColor:"green", height:50,width:50}}>
        <Text>Collections</Text>
      </View>
      <View style={{backgroundColor:"blue", height:50,width:50}}>
        <Text>Collections</Text>
      </View>
      </View>
    )
  }
}

const Nav = createBottomTabNavigator({
  Home: {screen: Home,
  navigationOptions: {
    tabBarlabel: 'Home',
  }},
  Profile: {screen: Profile,
    navigationOptions: {
      tabBarlabel: 'profile',
    }},
  Collections: {screen: Collections,
    navigationOptions: {
      tabBarlabel: 'Collections',
    }}

}, {
  initialRouteName: 'Home',
  order: ['Home', 'Profile', 'Collections'],
  navigationOptions: {
    tabBarVisible: true
  },
  tabBarOptions: {
    activeTintColor: 'red',
    innactiveTintColor: 'grey'
  }
})

export default createAppContainer(Nav);



class App extends Component {  
    state = {    
        email: "",    
        password: ""  
    };  
    
    constructor(props) {    
        super(props);    
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleLoginPress = this.handleLoginPress.bind(this);  
    }  
    
    handleChangeEmail(text) {    
        this.setState({      
            email: text    
        });  
    }  
    
    handleChangePassword(text) {    
        this.setState({      
            password: text    
        });  
    }  

    handleLoginPress() {    
        alert(      
            `Your email: ${this.state.email}. And your password: ${
                this.state.password      
            }`    
        );  
    }  

    render() {    
        return (      
            <View style={styles.container}>        
                <TextInput          
                    onChangeText={this.handleChangeEmail}          
                    placeholder={"user@email.com"}          
                    style={styles.textInput}        
                />        
                <TextInput          
                    onChangeText={this.handleChangePassword}          
                    secureTextEntry={true}          
                    placeholder={"Your super secret password"}          
                    style={styles.textInput}        
                />        
                <Button title={"Login"} onPress={this.handleLoginPress} />      
            </View>    
        );  
    }
}

const styles = StyleSheet.create({  
    container: {    
        flex: 1,    
        backgroundColor: "#F5FCFF",    
        justifyContent: "center",    
        alignItems: "center"  
    },  
    welcome: {    
        fontSize: 20,    
        textAlign: "center",    
        margin: 10  
    },  
    textInput: {    
        borderWidth: 1,    
        borderColor: "mediumaquamarine",    
        height: 45,    
        width: 300,    
        padding: 5,    
        marginBottom: 22  
    }

});