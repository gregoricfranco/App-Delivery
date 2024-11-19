import React, { useEffect, useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View, ScrollView, Button, Alert } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { useNavigation } from '@react-navigation/native';


export default function Login() {
    const [istAuthenticated, setIsAuthenticated] = useState(false);
    const navigation = useNavigation();

    async function verificaseAparelhoSuporta() {
        const isCompativel = await LocalAuthentication.hasHardwareAsync();
        console.log(isCompativel)
        const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
        console.log(types.map(type => LocalAuthentication.AuthenticationType[type]));

    }

    async function handleAuthentication() {
        const isBiometria = await LocalAuthentication.isEnrolledAsync();
        console.log(isBiometria);
        if (!isBiometria) {
            return Alert.alert('Login', 'Nenhum....');
        }

        const auth = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Loginn',
            fallbackLabel: 'Login nao foi possivel'
        });

        if (auth.success) {
            setIsAuthenticated(true);

        } else {
            Alert.alert('Login', 'Autenticação falhou.');
        }

        setIsAuthenticated(auth.success);
    }

    useEffect(() => {
        verificaseAparelhoSuporta();
    }, []);

    return (
        <View>
            <View className=' justify-center items-center bg-gray-100'>
                <Text className="bg-gray-600 mt-5"> Usuário conectado: {istAuthenticated ? 'sim' : 'n˜åo'}</Text>
                <Text className='text-2xl font-bold mb-6'>Login</Text>
                <Button title='Logar' onPress={handleAuthentication} />
            </View>

        </View >
    );
}