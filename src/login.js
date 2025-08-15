import React, { useEffect, useLayoutEffect, useState } from 'react';
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
import styles from '../styles/styles';
import { TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setPwd, setLoginId } from '../redux/loginSlice';

const LoginView = () => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const user = useSelector(state => state.login.user);
    const pwd = useSelector(state => state.login.pwd);
    const loginId = useSelector(state => state.login.loginId);

    return (
        <KeyboardAvoidingView style={[styles.areaScreen, {justifyContent: 'center', alignItems: 'center'}]}>
            <TouchableWithoutFeedback>
                <View style={styles.areaLogin}>
                    <TextInput
                        mode="outlined" 
                        label="Usuário"
                        autoFocus
                        placeholder="Informe seu usuário"
                        style={styles.inputLogin}
                        left={<TextInput.Icon icon="account"/>}
                        value={user}
                        onChangeText={text => dispatch(setUser({text}))}
                        contentStyle={styles.contentTextLogin}
                        theme={{ colors: { primary: "#0048FF" } }}
                        disabled={loading}
                    />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}


export default LoginView;

