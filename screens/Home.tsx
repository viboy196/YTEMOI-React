import react, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

export default function Home() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image
                style={styles.layoutHeader}
                source={require('../assets/layoutHeader.png')}
            />

            <StatusBar style="auto" />
        </View>
    );
}

const shadow = {
    shadowColor: '#0c0c0c',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 8,
    shadowOffset: {
        width: 0,
        height: 4
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    layoutHeader: {
        position: 'absolute',
        top: -15,
        width: '100%',
        height: '50%',
        borderRadius: 30,
    },
    layoutLogin: {
        position: 'absolute',
        top: '15%',
        width: 350,
        height: 450,
        borderRadius: 30,
        backgroundColor: '#fff',
        alignSelf: 'center',
        elevation: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    form: {
        marginTop: 20,
        marginHorizontal: 30,
    }
    ,
    formInput: {
        marginTop: 50,
    }
    ,
    titleLogin: {

        fontSize: 36,
        fontWeight: 'bold',
    },
    titleInput: {
        marginHorizontal: 10,
    },
    layoutInputPhone: {
        marginVertical: 10,
        width: 295,
        height: 85,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    inputPhone: {
        width: 290,
        height: 60,
        borderRadius: 30,
        padding: 20,
        backgroundColor: '#fff',
        borderColor: '#ABABAB',
        borderWidth: 1,
        color: '#007BFF',
    },
    buttonLogin: {

        width: 200,
        height: 60,
        backgroundColor: '#007BFF',
        borderRadius: 30,
        marginHorizontal: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonLoginTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '400',
    },
    textChange: {
        position: 'absolute',
        bottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textPress: {
        color: '#007BFF',
    },
});
