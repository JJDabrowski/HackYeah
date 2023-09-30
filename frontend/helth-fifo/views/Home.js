import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function HomeScreen({ navigation }) {
    return (
        <View>
            <Text>Home view</Text>
        </View >
    );
}