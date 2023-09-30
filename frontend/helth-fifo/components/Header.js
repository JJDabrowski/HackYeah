import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
import TurnTable from '../assets/scribble.variable.svg'

export default function Header({title = '', hideBackBtn = false }) {
	const navigation = useNavigation()

	return (
		<View style={styles.titleTab}>
			{!hideBackBtn && (
				<View style={styles.iconBox}>
					<TouchableOpacity>
						<FontAwesomeIcon
							style={styles.backBtn}
							name='chevron-left'
							size={20}
							color='#101010'
							onPress={() => {
								navigation.goBack()
							}}
						/>
					</TouchableOpacity>
				</View>
			)}
			<View style={styles.textBox}>
				<img style={styles.logo} src={TurnTable} alt='main logo' />
				<View style={styles.mainTitle}>
					<Text style={styles.mainTitleText}>{title}</Text>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	titleTab: {
      position: 'relative',
		marginTop: 60,
		marginBottom: 10,
		display: 'flex',
		flexDirection: 'row',
		
	},
	iconBox: {
		display: 'flex',
		alignSelf: 'flex-start'
	},
	textBox: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	logo: {
		marginRight: 10,
	},
   backBtn: {
      position: 'absolute',
      left: -110,
   },

	mainTitleText: {
		fontSize: 14,
		fontFamily: 'poppins-bold',
		color: '#0057FF',
	},
})
