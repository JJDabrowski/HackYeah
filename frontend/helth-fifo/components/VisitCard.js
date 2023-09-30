import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

const styles = StyleSheet.create({
   visit__container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: 350,
      padding: 10,
   },

   title: {
      fontSize: 20,
      fontWeight: 'bold',
   }
})

const VisitCard = ({ id = 'AZ321', roomNumber = 'Pojój 18A', name = 'Badaniee Pola widzenia', queueNumber = '1' }) => {
	return (
		<View style={styles.visit__container}>
			<View>
				<Text >{id}</Text>
				<Text>{queueNumber} w kolejce</Text>
			</View>
			<View>
				<Text style={styles.title}>{name}</Text>
				<Text>{roomNumber}</Text>
			</View>
			<View><FontAwesomeIcon style={styles.backBtn} name='chevron-right' size={20} color='#101010' /></View>
		</View>
	)
}

export default VisitCard
