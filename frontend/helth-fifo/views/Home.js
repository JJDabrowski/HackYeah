import { StyleSheet, Styles, Image, Text, View, ScrollView, TouchableOpacity } from 'react-native'
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
import Storage from '../Storage'

SplashScreen.preventAutoHideAsync()

export default function Home({ navigation }) {
    const [isLoaded] = useState(true);
    const [visits, setVisits] = useState([]);
    const [isRunning, setIsRunning] = React.useState(false);

    SplashScreen.hideAsync()

    useEffect(() => {
        navigation.addListener('focus', async () => {
            console.log("Fetch visits from API")
            let visits = await Client.getDetails();
            visits[0] = 0
            visits = visits.filter(visit => (visit.queue >= 0))
            visits.sort((a, b) => (a.queue - b.queue));
            setVisits(visits);
            await Storage.setVisits(visits)
        });
        setIsRunning(true)
    }, [isLoaded]);


    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(async () => {
                console.log("Running")
                console.log("Fetch visits from API")
                let visits = await Client.getDetails();
                visits[0] = 0
                visits = visits.filter(visit => (visit.queue >= 0))
                visits.sort((a, b) => (a.queue - b.queue));
                setVisits(visits);
                await Storage.setVisits(visits)
            }, 10000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    return (
        <View style={GlobalStyles.container}>
            {/* <Header title="Twoje wizyty" hideBackBtn={true} /> */}
            <TitleBar subtitle="1 Października 2023" title="Wizyty" hideBackBtn={true} />
            {visits.length < 1 ? <View style={styles.emptyListImageContainer}>
                <Image style={styles.emptyListImage} source={require('../assets/test.png')} />
                <Text style={styles.noVisitInfo}> Brak wizyt, zeskanuj kod QR</Text>
            </View> : null}
            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={false}>
                {visits.map(visit => visit.queue >= 0 ? (
                    <TouchableOpacity key={visit.number} style={styles.visitElement} onPress={() => {
                        navigation.navigate('VisitView', {
                            visit: visit
                        });
                    }}>
                        <VisitCard visit={visit}></VisitCard>
                    </TouchableOpacity>
                ) : null)}
            </ScrollView>

            <View style={GlobalStyles.bottomBar}>
                <PrimaryButton text="Dodaj wizytę" callback={() => {
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
        borderBottomWidth: 2,
        paddingVertical: 6,
    },
    noVisitInfo: {
        marginTop: 20,
        fontSize: 18,
        fontFamily: 'mrt-mid',
    },
    emptyListImageContainer: {
        height: 400,
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center"
    },
    emptyListImage: {
        width: 100,
        height: 120,

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
        overflow: "hidden"
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
