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
})

export default styles;