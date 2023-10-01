import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

const styles = StyleSheet.create({
	visitContainer: {
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

const VisitCard = ({ visit }) => {
	return (
		<View style={styles.visitContainer}>
			<View>
				<Text >{visit.number}</Text>
				<Text>{visit.queue} w kolejce</Text>
			</View>
			<View>
				<Text style={styles.title}>{visit.name}</Text>
				<Text>{visit.room}</Text>
			</View>
			<View><FontAwesomeIcon style={styles.backBtn} name='chevron-right' size={20} color='#101010' /></View>
		</View>
	)
}

export default VisitCard
