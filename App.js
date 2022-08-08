/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Dimensions } from 'react-native';
// import type {Node} from 'react';
// import { Router, Scene } from 'react-native-router-flux'
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

import StartG14 from './components/StartG14.js';


let width = Dimensions.get('window').width; 
let height = Dimensions.get('window').height; 

const App =  () => {
    
    return (
        <>
            <StartG14/>
        </>
    );

};

export default App;



