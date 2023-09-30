import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function PathBar({ color = null }) {
    const styles = StyleSheet.create({

        text: {
            textAlign: "center",
            fontSize: 14,
            fontFamily: 'mrt-mid',
            color: "#101010",
        },
        container: {
            flexDirection: "row",
            display: "flex",
            width: "100%",
            paddingHorizontal: 20,
            flexWrap: 'nowrap',
            justifyContent: "space-between"
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.text}>MOJE WIZYTY</Text>
            <Text style={styles.text}>30 WRZEŚNIA 2023</Text>
        </View>
    )

}