import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Platform,
    StatusBar,
    ImageBackground,
    Image,
    FlatList,
    Dimensions,
} from 'react-native';
import axios from 'axios'

export default class DailyPicScreen extends React.Component {

    constructor() {
        super()
        this.state = {
            apod: ''
        }
    }

    getAPOD = () => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=fd45yYwpu4WpnwXsTTIxjiOE1iAcX8nIXz6ViUBC')
            .then(
                this.setState({
                    apod: response.data
                })
                    .catch(error => {
                        alert(error.message)
                    })
            )
    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground
                    source={require('../project78-main/Screens/daily_pictures.png')} style={styles.backgroundImage}>
                    <Text style={styles.routeText}>Astronomy Picture of the day</Text>
                    <Text style={styles.titleText}>{this.state.apod.text}</Text>
                    <TouchableOpacity style={styles.listContainer}
                        onPress={() => {
                            Linking.openURL(this.state.apod.url).catch(err => console.error("Couldn't Load Page", err))
                        }}>
                        <View style={styles.iconContainer}>
                            <Image source={require('../project78-main/play-video.png')} style={{
                                width: 50, height: 50
                            }} />
                        </View>
                    </TouchableOpacity>

                    <Text style={styles.explanationText}>{this.state.apod.explanation}</Text>

                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    droidSafeArea: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    titleText: {
        fontSize: 45,
        fontWeight: 'bold',
        color: 'white',
    },
    routeText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 75,
        paddingLeft: 30,
    },
    listContainer: {
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        borderRadius: 10,
        padding: 10,
    },
    iconContainer: {
        position: 'absolute',
        height: 200,
        width: 200,
        resizeMode: 'contain',
        right: 20,
        top: -80,
    },
    explanationText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 75,
        paddingLeft: 30,
    },
})