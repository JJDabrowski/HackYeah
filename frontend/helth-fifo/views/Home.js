import { StyleSheet, Styles, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import TitleBar from '../components/TitleBar';
import ActionButton from '../components/ActionButton';
import GlobalStyles from '../Styles'
import React, { useState, useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
import PathBar from '../components/PathBar'
import PrimaryButton from '../components/PrimaryButton';
import Header from '../components/Header';

SplashScreen.preventAutoHideAsync();

export default function Home({ navigation }) {

    SplashScreen.hideAsync();

    const visits = [{
        id: "AZ321",
        roomNumber: "18A",
        name: "Badanie pola widzenia"
    },
    {
        id: "AZ322",
        roomNumber: "3B",
        name: "Badanie cisnienia galki ocznej"
    },
    {
        id: "AZ323",
        roomNumber: "3A",
        name: "Badanie wzroku"
    }]

    useEffect(() => {
        // testFetch();
    })

    return (
        <View style={GlobalStyles.container}>
            <Header title="Twoje wizyty" hideBackBtn={true} />
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
            <PrimaryButton text="Skanuj kod wizyty" callback={() => {
                // Dodaj wizyte pewnie lepiej
                navigation.navigate('QRView')
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
});
