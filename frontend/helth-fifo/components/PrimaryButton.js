import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import vector from '../assets/Vector.svg'

const PrimaryButton = ({ condition = true, callback = null, text = '', backgroundColor = null, color = null }) => {
	const styles = StyleSheet.create({
		button: {
			display: 'flex',
			alignContent: 'center',
			justifyContent: 'center',
			width: 342,
			height: 82,
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
