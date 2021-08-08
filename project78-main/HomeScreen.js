import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground
                    source={require('../assets/stars.gif')}
                    style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Stellar App!</Text>
                    </View>
                    <Image source={require('../assets/main-icon.png')} 
                        style={{height=80, width=80, justifyContent="center", alignItems="center", marginTop=10}} />
                    <TouchableOpacity
                        style={styles.routeCard}
                        onPress={() => {
                            this.props.navigation.navigate('SpaceCraftScreen');
                        }}>
                        <Text style={styles.routeText}>Space Crafts</Text>
                        <Image
                            source={require('../assets/space_crafts.png')}
                            style={styles.iconImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.routeCard}
                        onPress={() => {
                            this.props.navigation.navigate('DailyPicScreen');
                        }}>
                        <Text style={styles.routeText}>Daily Pictures</Text>
                        <Image
                            source={require('../assets/daily_pictures.png')}
                            style={styles.iconImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.routeCard}
                        onPress={() => {
                            this.props.navigation.navigate('StarMapScreen');
                        }}>
                        <Text style={styles.routeText}>Star Map</Text>
                        <Image
                            source={require('../assets/star_map.png')}
                            style={styles.iconImage}
                        />
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 45,
        fontWeight: 'bold',
        color: 'white',
    },
    container: {
        flex: 1,
    },
    droidSafeArea: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    titleBar: {
        flex: 0.15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white',
    },
    routeText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'pink',
        marginTop: 75,
        paddingLeft: 30,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    iconImage: {
        position: 'absolute',
        height: 200,
        width: 200,
        resizeMode: 'contain',
        right: 20,
        top: -80,
    },
});