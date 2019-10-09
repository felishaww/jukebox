import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Genre from "./components/Search/Genre";


class Search extends Component {
    render(){
        return (
            <SafeAreaView style={{flex:1, backgroundColor:'#121212'}}>
            
            <View style={{flex:1}}>
            <View style={{height:140}}>
            <Text style={styles.text}>
                Search
            </Text>
            <View style={{flexDirection: 'row', padding: 10, backgroundColor:'white', marginHorizontal:20}}> 
            <TextInput 
            placeholder="Artists, songs, or podcasts"
            placeholderTextColor="black"
            style={{flex:1, fontWeight: '700', backgroundColor:'white'}}/>

            </View>
            </View>

            <ScrollView style={{}}>
            
            <View style={{marginTop: 60}}>

            

            <Genre/>


            </View>
            
            
            </ScrollView>


            </View>
            
            </SafeAreaView>
        )
    }
}

export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 40,
        fontWeight: '700',
        textAlign: 'center',
        paddingTop:60,
        paddingBottom:20

    }
});