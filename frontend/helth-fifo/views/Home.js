import { StyleSheet, Styles, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import TitleBar from '../components/TitleBar'
import ActionButton from '../components/ActionButton'
import GlobalStyles from '../Styles'
import React, { useState, useEffect, useCallback } from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { Camera } from 'expo-camera'
import PathBar from '../components/PathBar'
import PrimaryButton from '../components/PrimaryButton'
import Header from '../components/Header'
import VisitCard from '../components/VisitCard'
import Client from '../Client'
// import Storage from '../Storage'

SplashScreen.preventAutoHideAsync()

export default function Home({ navigation }) {
    const [isLoaded] = useState(true);

    SplashScreen.hideAsync()

    let visits = [{
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

    const loadVisits = useCallback(async () => {
        // await Storage.reset()
        // const visits = await Storage.getVisits()
        console.log("loadVisits")
        // setWorkouts(visits)
        // if (isLoaded) {
        //     await SplashScreen.hideAsync();
        // }
    });

    useEffect(() => {
        navigation.addListener('focus', async () => {
            console.log("Fetch visits from apii")
            let result = await Client.getDetails();
            console.log(result)
            // loadVisits();
        });
        // loadVisits();
    }, [isLoaded]);


    return (
        <View style={GlobalStyles.container}>
            <Header title="Twoje wizyty" hideBackBtn={true} />
            <PathBar></PathBar>
            {visits.length < 1 ? <View>
                <Text> Brak wizyt, zeskanuj kod QR</Text>
            </View> : null}
            <ScrollView >
                {visits.map(visit => (

                    <TouchableOpacity key={visit.id} style={styles.visitElement} onPress={() => {

                        navigation.navigate('VisitView', {
                            visit: visit
                        });
                    }}>
                        <VisitCard></VisitCard>
                        {/* <Text style={styles.midText}>{visit.id}: {visit.name},{visit.roomNumber}</Text> */}
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <View style={GlobalStyles.bottomBar}>
                <PrimaryButton text="Skanuj kod wizyty" callback={() => {
                    // Dodaj wizyte pewnie lepiej
                    navigation.navigate('QRView')
                }}></PrimaryButton>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    visitElement: {
        marginHorizontal: 20,
        borderBottomColor: '#E4E4E4',
        borderBottomWidth: 4,
        paddingVertical: 6,
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
