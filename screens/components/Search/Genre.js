import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from "react-native";

class Genre extends Component {

    state = {
        topGenre: [
            { id: 1, name: 'Rock', color: '#ff1744' },
            { id: 2, name: 'Pop', color: '#bcc9ab' },
            { id: 3, name: 'J-Tracks', color: '#d81b60' },
            { id: 4, name: 'Indie', color: '#6200ea' },
        ],
        genre: [
            { id: 5, name: 'Podcasts', color: '#ffab00' },
            { id: 6, name: 'New Releases', color: '#b2ebf2' },
            { id: 7, name: 'Charts', color: '#009688' },
            { id: 8, name: 'Concerts', color: '#ff5722' },
            { id: 9, name: 'Pop Indo', color: '#03a9f4' },
            { id: 10, name: 'Mood', color: '#67daff' },
            { id: 11, name: 'Chill', color: '#b2ebf2' },
            { id: 12, name: 'Decades', color: '#ffc4ff' },
            { id: 13, name: 'K-Pop', color: '#b2ff59' },
            { id: 14, name: 'Romance', color: '#ff77a9' },
            { id: 15, name: 'Focus', color: '#ce93d8' },
            { id: 16, name: 'Sleep', color: '#8aacc8' },
            { id: 17, name: 'Travel', color: '#fdd835' },
            { id: 18, name: 'Karaoke', color: '#ff8f00' },
            { id: 19, name: 'Workout', color: '#aeea00' },
            { id: 20, name: 'Electronic', color: '#64ffda' },
            { id: 21, name: 'Kids & Family', color: '#c51162' },
            { id: 22, name: 'Hip-Hop', color: '#ff9100' },
            { id: 23, name: 'Folk & Acoustic', color: '#009688' },
            { id: 24, name: 'Jazz', color: '#26c6da' },
            { id: 25, name: 'Reggae', color: '#00695c' },
            { id: 26, name: 'Trending', color: '#ff9100' },
            { id: 27, name: 'Punk', color: '#757575' },
            { id: 28, name: 'R&B', color: '#ff4081' },
            { id: 29, name: 'Metal', color: '#a4a4a4' },
            { id: 30, name: 'Party', color: '#ec407a' },
            { id: 31, name: 'Dinner', color: '#ffc400' },
            { id: 32, name: 'Gaming', color: '#ff6f00' },
            { id: 33, name: 'Classical', color: '#ba68c8' },
            { id: 34, name: 'Soul', color: '#ec407a' },
            { id: 35, name: 'TV & Movies', color: '#ad1457' },
            { id: 36, name: 'Arab', color: '#42a5f5' },
            { id: 37, name: 'Latin', color: '#ff9100' },
            { id: 38, name: 'Desi', color: '#fdd835' },
            { id: 39, name: 'Blues', color: '#80deea' },
            { id: 40, name: 'Country', color: '#8bc34a' },
            { id: 41, name: 'Funk', color: '#e91e63' },
            { id: 42, name: 'Mandopop', color: '#26c6da' },
            { id: 43, name: 'Word', color: '#ea80fc' },
            { id: 44, name: 'Comedy', color: '#f06292' },
            { id: 45, name: 'Regional Mexican', color: '#00695c' },
            { id: 46, name: 'Brazillian music', color: '#ff4081' },
        ]
    };


    render() {
        return (
            <View style={styles.container}>


                <Text style={{ fontSize: 24, fontWeight: '700', marginHorizontal: 20, color: 'white' }}>
                    Your top genre
            </Text>
                <FlatList
                    numColumns={2}
                    data={this.state.topGenre}
                    renderItem={({ item }) => (
                        <View
                            style={styles.genreBox}
                            backgroundColor={item.color}
                        >
                            <Text
                                style={styles.genreText}
                            >
                                {item.name}
                            </Text>
                        </View>
                    )}
                />

                <Text style={{ fontSize: 24, fontWeight: '700', marginHorizontal: 20, color: 'white' }}>
                    Browse all
            </Text>
                <FlatList
                    numColumns={2}
                    data={this.state.genre}
                    renderItem={({ item }) => (
                        <View
                            style={styles.genreBox}
                            backgroundColor={item.color}
                        >
                            <Text
                                style={styles.genreText}
                            >
                                {item.name}
                            </Text>
                        </View>
                    )}
                />

            </View>
        )
    }
}

export default Genre;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
    },
    genreText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
    genreBox: {
        flex: 1,
        flexWrap: 'wrap',
        margin: 10,
        paddingVertical: 40,
        paddingHorizontal: 20,
        alignItems: 'flex-start',
        borderRadius: 5
    }


});