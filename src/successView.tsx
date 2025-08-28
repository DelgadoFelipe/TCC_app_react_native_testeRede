import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import { RootStackParamList } from '../navigation/types';

type NavigationType = NavigationProp<RootStackParamList>;

const SuccessView = () => {
    const navigation = useNavigation<NavigationType>();
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    return (
        <View style={{width: width, height: height, alignItems: "center", justifyContent: 'center'}}>
            <Text style={{color: '#252525', fontSize: 28}}>Sucesso!</Text>
            <TouchableOpacity style={{width: width * 0.42, height: height * 0.07, borderRadius: 20, marginTop: height * 0.05, backgroundColor: "#0048FF", alignItems: 'center', justifyContent: "center"}} onPress={() => navigation.goBack()}>
                <Text style={{textAlign: 'center', color: '#fff', fontSize: 18}}>Logoff</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SuccessView;