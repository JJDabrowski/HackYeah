import { StyleSheet, Styles, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import TitleBar from '../components/TitleBar';
import ActionButton from '../components/ActionButton';
import GlobalStyles from '../Styles'

SplashScreen.preventAutoHideAsync();

export default function Home({ navigation }) {

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
                        // Go to visit view
                        // navigation.navigate('visitView', {
                        //     visit: visit
                        // });
                    }}>
                        <Text style={styles.midText}>{visit.id}: {visit.name},{visit.roomNumber}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
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
});
