import { StyleSheet, Styles, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import TitleBar from '../components/TitleBar';
import ActionButton from '../components/ActionButton';
import GlobalStyles from '../Styles'
import React, { useState, useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
import PathBar from '../components/PathBar'

SplashScreen.preventAutoHideAsync();

export default function Home({ navigation }) {

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

    function testFetch() {
        fetch('http://localhost:5000/api/v1/Patient/Visit/ScanId',
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
            .then(response => response)
            .then(json => {
                console.log(json)
                return json;
            })
            .catch(error => {
                console.error('Error ', error);
            })
    }

    useEffect(() => {
        testFetch();
    })

    return (
        <View style={GlobalStyles.container}>
            <TitleBar subtitle="Helth fifo" title="Twoje wizyty" hideBackBtn={true} />
            <PathBar></PathBar>
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
            <ActionButton text="Skanuj kod wizyty" callback={() => {
                // Dodaj wizyte pewnie lepiej
                navigation.navigate('QRView')
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
