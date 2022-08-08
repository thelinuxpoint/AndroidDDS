import React from 'react';
import { Dimensions } from 'react-native';
import type {Node} from 'react';
import { Component } from 'react'

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet, 
    Button,
    Text,
    useColorScheme,
    View,
    InputAccessoryView, 
    TextInput
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

let width = Dimensions.get('window').width; 
let height = Dimensions.get('window').height; 

const styles = StyleSheet.create({
    baseText: {
        fontFamily: "Cochin"
    },
    titleText0: {
        fontSize: 50,
        padding:50,
        color:"white",
        fontWeight: "bold"
    },
    titleText1: {
        fontSize: 20,
        color:"white",
        textAlign:"center",
        display:"flex",
        width:width
    }
});

// The Initial Component
const StartG14 = () => {

	return (
        <View style={{
                flex:1,
                backgroundColor:"#161923",
                alignItems: "center",
                display: "flex",
                width: width,
                height:height
            }}>
            <Text style={styles.titleText0}>G14</Text>

            <Text style={styles.titleText1}>We Design, Make, Supply.</Text>

            <View style={{
                position:"absolute",
                bottom: 100
            }}>
                <Button title="Get Started"></Button>
                <Text style={{paddingTop:50}}>Build By thelinuxpoint & TEAM</Text>
            </View>
        </View>
	);

}

export default StartG14;
