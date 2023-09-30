import { StyleSheet, Styles, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import TitleBar from '../components/TitleBar';
import ActionButton from '../components/ActionButton';
import GlobalStyles from '../Styles'
import React, { useState, useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';

SplashScreen.preventAutoHideAsync();

export default function Home({ navigation }) {
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
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
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
    SplashScreen.hideAsync();


    const visits = [{
        id: 321,
        roomNumber: "18A",
        name: "Badanie pola widzenia"
    },
    {
        id: 322,
        roomNumber: "3B",
        name: "Badanie cisnienia galki ocznej"
    },
    {
        id: 323,
        roomNumber: "3A",
        name: "Badanie wzroku"
    }]
    return (
        <View style={GlobalStyles.container}>
            <TitleBar subtitle="Helth fifo" title="Twoje wizyty" hideBackBtn={true} />
            <ScrollView >
                {visits.map(visit => (
                    <TouchableOpacity key={visit.id} style={styles.visitElement} onPress={() => {

                        navigation.navigate('VisitView', {
                            visit: visit
                        });
                    }}>
                        <Text style={styles.midText}>{visit.id}: {visit.name},{visit.roomNumber}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Welcome to the Barcode Scanner App!</Text>
                <Text style={styles.paragraph}>Scan a barcode to start your job.</Text>
                {renderCamera()}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setScanned(false)}
                    disabled={scanned}
                >
                    <Text style={styles.buttonText}>Scan QR to Start your job</Text>
                </TouchableOpacity>
            </View>
            <ActionButton text="Skanuj kod wizyty" callback={() => {
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
