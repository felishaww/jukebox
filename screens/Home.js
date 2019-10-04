import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image
} from "react-native";
import Category from './components/Home/category';


class Home extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>

                <ScrollView
                    scrollEventThrottle={16}
                    showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 1, paddingTop: 20 }}>
                        <Text style={styles.text}>
                            Made for you
                         </Text>

                        <View style={{ height: 360, paddingTop: 20 }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                                <Category imageUri={require
                                    ('../assets/top2018.png')}
                                    name="Your Top Songs 2018" />
                                <Category imageUri={require
                                    ('../assets/dm1.png')}
                                    name="Daily Mix 1" />
                                <Category imageUri={require
                                    ('../assets/dm2.png')}
                                    name="Daily Mix 2" />
                                <Category imageUri={require
                                    ('../assets/dm3.png')}
                                    name="Daily Mix 3" />
                                <Category imageUri={require
                                    ('../assets/dm4.png')}
                                    name="Daily Mix 4" />
                                <Category imageUri={require
                                    ('../assets/dm5.png')}
                                    name="Daily Mix 5" />
                                <Category imageUri={require
                                    ('../assets/dm6.png')}
                                    name="Daily Mix 6" />
                                <Category imageUri={require
                                    ('../assets/discoverWeekly.png')}
                                    name="Discover Weekly" />
                                <Category imageUri={require
                                    ('../assets/releaseRadar.png')}
                                    name="Release Rada" />
                                <Category imageUri={require
                                    ('../assets/tasteBreakers.png')}
                                    name="Taste breakers" />
                            </ScrollView>
                        </View>

                        <Text style={styles.text}>
                            Uniquely yours
                         </Text>

                        <View style={{ height: 360, paddingTop: 20 }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                                <Category imageUri={require
                                    ('../assets/onRepeat.png')}
                                    name="On Repeat" />
                                <Category imageUri={require
                                    ('../assets/repeatRewind.png')}
                                    name="Repeat Rewind" />

                            </ScrollView>
                        </View>

                        <Text style={styles.text}>
                            Popular playlists
                         </Text>

                        <View style={{ height: 360, paddingTop: 20 }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}>

                                <Category imageUri={require
                                    ('../assets/pp1.png')}
                                    name="Top Hits Indonesia" />
                                <Category imageUri={require
                                    ('../assets/pp2.png')}
                                    name="Today's Top Hits" />
                                <Category imageUri={require
                                    ('../assets/pp3.png')}
                                    name="Generasi Galau" />
                                <Category imageUri={require
                                    ('../assets/pp4.png')}
                                    name="IndieNesia" />
                                <Category imageUri={require
                                    ('../assets/pp5.png')}
                                    name="This is BTS" />
                                <Category imageUri={require
                                    ('../assets/pp6.png')}
                                    name="Lagi Viral" />

                            </ScrollView>
                        </View>



                        <Text style={styles.text}>
                            Keep the vibe going
                         </Text>

                        <View style={{ height: 360, paddingTop: 20 }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}>

                                <Category imageUri={require
                                    ('../assets/pl1.png')}
                                    name="00s Rock Anthems" />
                                <Category imageUri={require
                                    ('../assets/pl2.png')}
                                    name="Rock Party" />
                                <Category imageUri={require
                                    ('../assets/pl3.png')}
                                    name="Soft Rock" />
                                <Category imageUri={require
                                    ('../assets/pl4.png')}
                                    name="Metal Ballads" />
                                <Category imageUri={require
                                    ('../assets/pl5.png')}
                                    name="Pop Punk Powerhouses" />
                                <Category imageUri={require
                                    ('../assets/pl6.png')}
                                    name="Power Ballads" />
                                <Category imageUri={require
                                    ('../assets/pl7.png')}
                                    name="Songs We Rocked Out To" />

                            </ScrollView>
                        </View>
                    </View>


                </ScrollView>

            </SafeAreaView>
        )
    }
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        // alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 24,
        fontWeight: '700',
        paddingHorizontal: 20,
        alignItems: 'flex-start'
    }
});