import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { WebView } from 'react-native-webview'

export default class StarMapScreen extends React.Component {
    constructor() {
        super()
        this.state = {
            latitude: '',
            longitude: ''
        }
    }

    const { longitude, latitude } = this.state;
const path = 'https://virtualsky.lco.global/embed/index.html?longitude=${longitude} &latitude= ${latutide} &constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'


render(){
    return (
        <View>
            <WebView
                scalesPageToFit={true}
                source={{ uri: path }}
                style={{ marginTop: 20, marginBottom: 20 }}
            />
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                placeholder="Enter your latitude"
                placeholderTextColor="#ffff#000000"
                onChangeText={(text) => {
                    this.setState({
                        latitude: text
                    })
                }}
            />
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                placeholder="Enter your longitude"
                placeholderTextColor="#ffff#000000"
                onChangeText={(text) => {
                    this.setState({
                        longitude: text
                    })
                }}
            />
        </View>
    )
}
