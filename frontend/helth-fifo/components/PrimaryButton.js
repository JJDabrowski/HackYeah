import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native'
import vector from '../assets/Vector.svg'

const screenWidth = Dimensions.get('window').width;


const PrimaryButton = ({ condition = true, callback = null, text = '', backgroundColor = null, color = null }) => {
	const styles = StyleSheet.create({
		button: {
			display: 'flex',
			alignContent: 'center',
			justifyContent: 'center',
			width: (screenWidth * 0.9),
			height: 72,
			borderRadius: 20,
			marginVertical: 20,
			backgroundColor: backgroundColor ? backgroundColor : '#0057FF',
		},
		label: {
			textAlign: 'center',
			fontSize: 18,
			fontFamily: 'mrt-bold',
			color: color ? color : '#FFF',
		},
	})

	return (
		<TouchableOpacity style={styles.button} onPress={callback}>
			<Text style={styles.label}>{text}</Text>
			{/* <img src={vector} alt="" /> */}
		</TouchableOpacity>
	)
}

export default PrimaryButton
