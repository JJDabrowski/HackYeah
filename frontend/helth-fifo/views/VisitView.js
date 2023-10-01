import React, { useState, useEffect } from 'react'
import { StyleSheet, Modal, Styles, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import TitleBar from '../components/TitleBar'
import ActionButton from '../components/ActionButton'
import PrimaryButton from '../components/PrimaryButton';
import GlobalStyles from '../Styles'

const VisitView = ({ route, navigation }) => {
	const { visit } = route.params
	const [modalVisible, setModalVisible] = useState(false)

	return (
		<View style={GlobalStyles.container}>
			<Modal
				animationType='slide'
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert('Modal has been closed.')
					setModalVisible(!modalVisible)
				}}>
				<View style={styles.centeredView}>
					<View style={styles.modalContainer}>
						<Text style={styles.modalText}>Opoznic wizytę {visit.name}?</Text>
						<View style={styles.buttonsContianer}>
							<TouchableOpacity
								style={[styles.confirmButton, styles.buttonClose]}
								onPress={() => setModalVisible(false)}>
								<Text style={styles.confirmButtonText}>Opóźnij</Text>
							</TouchableOpacity>
							<TouchableOpacity style={[styles.skipButton, styles.buttonClose]} onPress={() => setModalVisible(false)}>
								<Text style={styles.skipButtonText}>Anuluj</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal>
			<TitleBar subtitle="Wizyta" title={visit.name} />
			<View style={GlobalStyles.bottomBar}>
				<PrimaryButton
					text='Opoznij wizyte'
					callback={() => {
						setModalVisible(true)
					}}></PrimaryButton>
			</View>
		</View>
	)

}

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
	},

	modalContainer: {
		// margin: 20,
		width: '90%',
		backgroundColor: 'white',
		borderRadius: 10,
		paddingVertical: 25,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		display: 'flex',
		alignContent: 'center',
		justifyContent: 'center',
	},
	buttonsContianer: {
		display: 'flex',
		flexDirection: 'column',
		gap: 20, // Set flexDirection to "row" to align buttons horizontally
		justifyContent: 'center', // Center buttons horizontally
		alignItems: 'center', // Center buttons vertically
		marginHorizontal: 20, // Adjust margin as needed
	},
	skipButton: {
		fontFamily: 'mrt-bold',
		width: 250,
		height: 60,
		justifyContent: 'center', // Wyśrodkowanie wertykalne
		alignItems: 'center', // Wyśrodkowanie poziome
		color: 'white',
		paddingHorizontal: 10,
		paddingVertical: 8,
		borderRadius: 20,
		backgroundColor: 'white',
		borderColor: 'grey',
		borderWidth: 1, // Kolor obramowania (szary)
	},
	confirmButton: {
		fontFamily: 'mrt-bold',
		width: 250,
		height: 60,
		justifyContent: 'center', // Wyśrodkowanie wertykalne
		alignItems: 'center', // Wyśrodkowanie poziome
		color: 'white',
		paddingHorizontal: 10,
		paddingVertical: 8,
		borderRadius: 20,
		backgroundColor: '#0057FF',
	},

	confirmButtonText: {
		textAlign: 'center',
		color: 'white',
		fontFamily: 'mrt-bold',
		fontSize: 18,
	},
	skipButtonText: {
		color: '#bdc3c7',
		textAlign: 'center',
		fontFamily: 'mrt-bold',
		fontSize: 18,
	},
	modalText: {
		fontSize: 18,
		padding: 20,
		fontFamily: 'mrt-bold',
		textAlign: 'center',
	},
})

export default VisitView
