import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function TitleBar({ subtitle = "", title = "", hideBackBtn = false }) {

    const navigation = useNavigation();

    return (
        <View style={styles.titleTab}>
            {!hideBackBtn &&
                <View style={styles.iconBox}>
                    <TouchableOpacity>
                        <FontAwesomeIcon name="chevron-left" size={30} color="#333" onPress={() => {
                            navigation.goBack();
                        }} />
                    </TouchableOpacity>
                </View>
            }
            <View style={styles.textBox}>
                <View style={styles.tabInfo}>
                    <Text style={styles.tabInfoText}>{subtitle}</Text>
                </View>
                <View style={styles.mainTitle}>
                    <Text style={styles.mainTitleText}>{title}</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    titleTab: {
        marginTop: 60,
        marginBottom: 10,
        display: "flex",
        flexDirection: "row",
        alignSelf: "flex-start",
        marginLeft: 20
    },
    iconBox: {
        display: "flex",
        justifyContent: "center",
        marginRight: 20
    },
    textBox: {
        justifyContent: "center"
    },
    tabInfoText: {
        fontSize: 16,
        fontFamily: 'mrt-bold',
        color: "#BEBEBE"
    },
    mainTitleText: {
        fontSize: 32,
        fontFamily: 'mrt-bold'
    },
});
