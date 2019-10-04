import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class Search extends Component {
    render(){
        return (
            <View style={styles.container}>
            <Text>Search</Text>
          </View>
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
    }
});