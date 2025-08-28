import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    Keyboard,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Dimensions,
    StyleSheet,
} from 'react-native';
import styles from '../styles/styles.js';
import { TextInput } from 'react-native-paper';
import { NavigationProp, useFocusEffect, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types.js';

// Credenciais para o login
// Email: fedelgadoo86@gmail.com
// Senha: 12345678

type User = {
    email: string,
    password: string,
}

type NavigationType = NavigationProp<RootStackParamList>;

const LoginView = () => {
    const urlApi = 'https://project.sferra.com.br/api';
    const navigation = useNavigation<NavigationType>();
    
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    useFocusEffect(
        useCallback(() => {
            setEmail('');
            setPwd('');
        }, [])
    )

    const logon = async() => {
        try {
            const jsonUser: User = {
            email: email,
            password: pwd
        }

            setLoading(true);
            const response = await fetch(`${urlApi}/login`, {
                method: 'POST',
                headers: {'Content-Type': 'Application/json'},
                body: JSON.stringify(jsonUser)
            })

            const responseData = await response.json();

            if (responseData.status == 'success') {
                setLoading(false);
                navigation.navigate("successView");
            }
            else {
                console.log('Erro em logon: ' + responseData.status)
            }
        }
        catch(err) {
            console.error('Erro em logon: ' + err)
        }
    }

    return (
        <KeyboardAvoidingView style={[styles.areaScreen, {justifyContent: 'center', alignItems: 'center'}]}>
            <TouchableWithoutFeedback>
                <View style={styles.areaLogin}>
                    <TextInput
                        mode="outlined" 
                        label="Usuário"
                        autoFocus
                        placeholder="Informe seu usuário"
                        value={email}
                        onChangeText={text => setEmail(text)}
                        theme={{ colors: { primary: "#0048FF" } }}
                        disabled={loading}
                    />

                    <TextInput
                        mode="outlined" 
                        label="Senha"
                        placeholder="Informe sua senha"
                        style={{marginTop: 10}}
                        value={pwd}
                        onChangeText={text => setPwd(text)}
                        theme={{ colors: { primary: "#0048FF" } }}
                        disabled={loading}
                    />

                    {(loading) ? (
                        <TouchableOpacity style={[styles.buttonLogin, {backgroundColor: '#0048FF', borderColor: '#fff'}]} onPress={() => logon()}>
                            <Text style={[styles.textLogin, {color: '#fff', fontSize: 20}]}>...</Text>
                        </TouchableOpacity>  
                    ):(
                        <TouchableOpacity style={[styles.buttonLogin, {backgroundColor: '#fff'}]} onPress={() => logon()}>
                            <Text style={styles.textLogin}>Log In</Text>
                        </TouchableOpacity>  
                    )}                  
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}


export default LoginView;

