import { StyleSheet, Styles, Text, Alert, Modal, View, ScrollView, TouchableOpacity } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import TitleBar from '../components/TitleBar';
import ActionButton from '../components/ActionButton';
import GlobalStyles from '../Styles'
import React, { useState, useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
import PrimaryButton from '../components/PrimaryButton'
import Client from '../Client'

SplashScreen.preventAutoHideAsync();

export default function QRView({ navigation }) {
    SplashScreen.hideAsync()

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setModalVisible(true)
    };

    const renderCamera = () => {
        return (
            <View style={GlobalStyles.container}>
                <View style={styles.cameraContainer}>
                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                        style={styles.camera}
                    />
                </View>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.')
                        setModalVisible(!modalVisible)
                        setScanned(true);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalContainer}>
                            {/* <Text style={styles.modalText}>Opoznic wizytę {visit.name}?</Text> */}
                            <View style={styles.buttonsContianer}>
                                <TouchableOpacity
                                    style={[styles.confirmButton, styles.buttonClose]}
                                    onPress={async () => {
                                        const result = await Client.scanId()
                                        // console.log("esult ",result)
                                        // setScanned(false);
                                        // setModalVisible(false)
                                        navigation.navigate('Home')
                                    }}>
                                    <Text style={styles.confirmButtonText}>Dodaj</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.skipButton, styles.buttonClose]}
                                    onPress={() => {
                                        setScanned(false);
                                        setModalVisible(false)
                                    }}>
                                    <Text style={styles.skipButtonText}>Anuluj</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
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

    return (
        <View style={GlobalStyles.container}>
            <TitleBar subtitle="QR skaner" title="Dodaj kolejke" />
            <View style={styles.container}>
                {renderCamera()}
            </View>
            <PrimaryButton text="Skanuj kod wizyty" callback={() => {
                setScanned(false);
                // Dodaj wizyte pewnie lepiej
                // navigation.navigate('CreateWorkout')
            }}></PrimaryButton>
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
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },

    modalContainer: {
        // margin: 20,
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
    },
    buttonsContianer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20, // Set flexDirection to "row" to align buttons horizontally
        justifyContent: 'center', // Center buttons horizontally
        alignItems: 'center', // Center buttons vertically
        marginHorizontal: 20, // Adjust margin as needed
    },
    skipButton: {
        fontFamily: 'mrt-bold',
        width: 250,
        height: 60,
        justifyContent: 'center', // Wyśrodkowanie wertykalne
        alignItems: 'center', // Wyśrodkowanie poziome
        color: 'white',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: 'white',
        borderColor: 'grey',
        borderWidth: 1, // Kolor obramowania (szary)
    },
    confirmButton: {
        fontFamily: 'mrt-bold',
        width: 250,
        height: 60,
        justifyContent: 'center', // Wyśrodkowanie wertykalne
        alignItems: 'center', // Wyśrodkowanie poziome
        color: 'white',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: '#0057FF',
    },

    confirmButtonText: {
        textAlign: 'center',
        color: 'white',
        fontFamily: 'mrt-bold',
        fontSize: 18,
    },
    skipButtonText: {
        color: '#bdc3c7',
        textAlign: 'center',
        fontFamily: 'mrt-bold',
        fontSize: 18,
    },
    modalText: {
        fontSize: 18,
        padding: 20,
        fontFamily: 'mrt-bold',
        textAlign: 'center',
    },
});
