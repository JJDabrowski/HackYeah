import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ActionButton({ condition = true, callback = null, text = "", backgroundColor = null, color = null }) {
    const styles = StyleSheet.create({
        button: {
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            width: 240,
            height: 50,
            borderRadius: 20,
            marginVertical: 20,
            backgroundColor: backgroundColor ? backgroundColor : "#9b59b6",
        },
        label: {
            textAlign: "center",
            fontSize: 18,
            fontFamily: 'mrt-bold',
            color: color ? color : "#FFF",
        },
    });

    return condition ? (
        <TouchableOpacity style={styles.button} onPress={callback}>
            <Text style={styles.label}> {text} </Text>
        </TouchableOpacity>
    ) : null;

}