import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import GlobalStyles from '../Styles';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
	visitContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: (screenWidth * 0.9),
		overflow: "hidden",
		padding: 10,
		flex: 6,
		flexDirection: 'column',

	},
	title: {
		flex: 4,
		fontSize: 18,
		fontWeight: 'bold',
		maxWidth: (screenWidth * 0.6)
	},
	leftPanel: {
		flex: 2,
	},
	rightPanel: {
		flex: 4,
	},
	queueInfo: {
		flex: 6,
	},
	firstRow: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	secondRow: {
		flex: 1,
		width: "100%",
	},
	numberInfo: {
		paddingHorizontal: 14,
		paddingVertical: 15,
		borderColor: '#eee',
		borderWidth: 2,
		textAlign: "center",
		display: "flex",
		alignContent: "center",
		justifyContent: "center",
		width: 80,
		borderRadius: 20,
	},
	textYourTurn: {
		color: "#e74c3c",
		fontFamily: 'mrt-bold'
	}
})

const VisitCard = ({ visit }) => {
	return (
		<View style={styles.visitContainer}>
			<View style={styles.firstRow}>
				<View style={styles.leftPanel}>
					<View style={styles.numberInfo}>
						<Text style={GlobalStyles.centerText}>{visit.number}</Text>
					</View>

				</View>

				<View style={styles.rightPanel}>
					<Text style={styles.title}>{visit.name}</Text>
					<Text >Pokój {visit.room}</Text>
				</View>
			</View>
			<View style={styles.secondRow}>
				<View style={styles.queueInfo}>
					{visit.queue < 1 ?
						<Text style={styles.textYourTurn}>Twoja kolej!</Text> :
						<Text style={GlobalStyles.textLeft}>{visit.queue} w kolejce</Text>}
				</View>
			</View>

		</View>
	)
}

export default VisitCard
