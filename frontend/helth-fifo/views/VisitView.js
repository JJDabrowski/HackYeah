import React from 'react'
import { StyleSheet, Styles, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import TitleBar from '../components/TitleBar'
import ActionButton from '../components/ActionButton';
import GlobalStyles from '../Styles'

const VisitView = ({ route, navigation }) => {
  const { visit } = route.params

  return (
    <View style={GlobalStyles.container}>
      <TitleBar subtitle={visit.name} title="Twoje sdf" />
      <View style={GlobalStyles.bottomBar}>
        <ActionButton text="Opoznij wizyte" callback={() => {
          navigation.navigate('PostponeView')
        }}></ActionButton>
      </View>

    </View>

  )
}

export default VisitView