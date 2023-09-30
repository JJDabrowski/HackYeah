import React from 'react'
import TitleBar from '../components/TitleBar'
import { StyleSheet, Styles, Text, View, ScrollView, TouchableOpacity } from 'react-native';

const PostponeView = ({ route, navigation }) => {
    //   const { visit } = route.params

    return (
        <View>
            <TitleBar subtitle={"Opoznij"} title="opoznij wizte" />
        </View>

    )
}

export default PostponeView