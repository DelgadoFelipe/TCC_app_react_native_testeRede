import React, { useEffect } from 'react';
import {
    Dimensions,
    StyleSheet,
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    areaScreen: {
        width: width,
        height: height,
    },

    areaLogin: {
        width: width * 0.8,
        height: height * 0.38,
        alignSelf: 'center',
        borderRadius: 20,
    },

    buttonLogin: {
        width: width * 0.46,
        height: height * 0.08,
        backgroundColor: '#fff',
        borderWidth: width * 0.006,
        borderRadius: 20,
        borderColor: "#0048FF",
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height * 0.025
    },

    textLogin: {
        fontFamily: "Poppins-Bold",
        fontSize: 17,
        color: '#7B7B7B',
    },


})

export default styles;