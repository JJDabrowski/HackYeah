import React, { useState, useEffect } from 'react';
import { StyleSheet, Modal, Styles, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import TitleBar from '../components/TitleBar'
import ActionButton from '../components/ActionButton';
import GlobalStyles from '../Styles'

const VisitView = ({ route, navigation }) => {
  const { visit } = route.params
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={GlobalStyles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Opoznic wizyte {visit.name}?</Text>
            <View style={styles.buttonsContianer}>
              <TouchableOpacity
                style={[styles.confirmButton, styles.buttonClose]}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.confirmButtonText}>Opóźnij</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.skipButton, styles.buttonClose]}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.skipButtonText}>Anuluj</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <TitleBar subtitle={visit.name} title="Twoje sdf" />
      <View style={GlobalStyles.bottomBar}>
        <ActionButton text="Opoznij wizyte" callback={() => {
          setModalVisible(true)
          // navigation.navigate('PostponeView')
        }}></ActionButton>
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
    width: "90%",
    height: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    // padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    display: "flex",
    alignContent: "center",
    justifyContent: "center"
  },
  buttonsContianer: {
    display: "flex",
    flexDirection: "row", // Set flexDirection to "row" to align buttons horizontally
    justifyContent: "center", // Center buttons horizontally
    alignItems: "center", // Center buttons vertically
    marginHorizontal: 20, // Adjust margin as needed
  },
  skipButton: {
    textAlign: "center",
    fontFamily: "mrt-bold",
    width: 100,
    // backgroundColor: '#bdc3c7',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 20,
  },
  confirmButton: {

    fontFamily: "mrt-bold",
    width: 100,
    textAlign: "center",
    // backgroundColor: '#e67e22',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 20,
  },
  confirmButtonText: {
    textAlign: "center",
    color: '#e67e22',
    fontFamily: "mrt-bold",
    fontSize: 18,
  },
  skipButtonText: {
    color: '#bdc3c7',
    textAlign: "center",
    fontFamily: "mrt-bold",
    fontSize: 18,
  },
  modalText: {
    fontSize: 18,
    padding: 20,
    fontFamily: 'mrt-bold',
    textAlign: 'center',
  },
});

export default VisitView