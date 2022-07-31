/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import type {Node} from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet, 
    Button,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



const App: () => Node = () => {
    
    return (
        <View style={{
                flex:1,
                backgroundColor:"#161923",
                alignItems: "center",
            }}>
            <Text style={styles.titleText0}>G14</Text>
            <Text style={styles.titleText1}>welcome to the advanced</Text>

            <View style={{
                position:"absolute",
                bottom: 100

            }}>
                <Button title="Get Started"></Button>
            </View>
        </View>
    );
    
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText0: {
    fontSize: 50,
    padding:100,
    color:"white",
    fontWeight: "bold"
  },
  titleText1: {
    fontSize: 20,
    padding:100,
    color:"white",
  }
});


export default App;
