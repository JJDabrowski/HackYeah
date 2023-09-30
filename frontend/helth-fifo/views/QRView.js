import { StyleSheet, Styles, Text, Alert, View, ScrollView, TouchableOpacity } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import TitleBar from '../components/TitleBar';
import ActionButton from '../components/ActionButton';
import GlobalStyles from '../Styles'
import React, { useState, useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';

SplashScreen.preventAutoHideAsync();

export default function QRView({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        Alert.alert('Qr kod nowy', 'Mamy nowy qr-kod', [
            {
                text: 'Dodaj',
                onPress: () => {
                    content = JSON.parse(data)
                    console.log(`Dodajemy ${content.message}`)
                    setScanned(false)
                },
                style: 'cancel',
            },
            {
                text: 'Anuluj', onPress: () => {
                    console.log(`Anuluj ${data}`)
                    setScanned(false)
                }
            },
        ]);

    };

    const renderCamera = () => {
        return (
            <View style={styles.cameraContainer}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={styles.camera}
                />
            </View>
        );
    };

    if (hasPermission === null) {
        return <View />;
    }

    if (hasPermission === false) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Camera permission not granted</Text>
            </View>
        );
    }

    function testFetch() {
        // data
        console.log("fetch")
        const url = 'https://2ef2-213-25-77-242.ngrok-free.app/api/v1/Patient/Visit/ScanId'
        fetch(url,
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    // firstParam: 'yourValue',
                    // secondParam: 'yourOtherValue',
                }
                )
            })
            .then(response => response.json())
            .then(json => {
                console.log("Response:")
                console.log(JSON.stringify(json))
                return json;
            })
            .catch(error => {
                console.error('Error ', error);
            })
    }

    SplashScreen.hideAsync();

    return (
        <View style={GlobalStyles.container}>
            <TitleBar subtitle="QR skaner" title="Dodaj kolejke" />
            <View style={styles.container}>
                {renderCamera()}
            </View>
            <ActionButton text="Skanuj kod wizyty" callback={() => {
                setScanned(false);
                // Dodaj wizyte pewnie lepiej
                // navigation.navigate('CreateWorkout')
            }}></ActionButton>
        </View >
    );
}

const styles = StyleSheet.create({
    visitElement: {
        marginHorizontal: 20,
        borderBottomColor: "#E4E4E4",
        borderBottomWidth: 4,
        paddingVertical: 6
    },
    midText: {
        fontSize: 20,
        fontFamily: 'mrt-bold',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 40,
    },
    cameraContainer: {
        width: '80%',
        aspectRatio: 1,
        overflow: 'hidden',
        borderRadius: 10,
        marginBottom: 40,
    },
    camera: {
        flex: 1,
    },
    button: {
        backgroundColor: 'blue',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },

});
