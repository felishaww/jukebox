import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class Category extends Component {
    render(){
        return (
            <View style={{height: 360, width: 240, marginLeft: 20}}>

            <View style={{flex: 2 }}> 

            <Image source={this.props.imageUri}
               style={{flex:1, height:null, width: null, resizeMode:'cover',}}
               />


            </View>
            <View style={{flex: 1}}>
            <Text style={{flex: 1, paddingLeft: 10, paddingTop: 10, color:'white'}}>
            {this.props.name}
            </Text>
            </View>

            </View>
        )
    }
}

export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        alignItems: 'center',
        justifyContent: 'center'
    }
});