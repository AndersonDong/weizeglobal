import React from 'react'
import { View, Modal } from 'react-native'
import DebugConfig from '../../App/Config/DebugConfig'
import RoundedButton from '../../App/Components/RoundedButton'
import PresentationScreen from './PresentationScreen'
import LoginScreen from '../../App/Containers/LoginScreen.js'

export default class DevscreensButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  render () {
    if (DebugConfig.showDevScreens) {
      return (
        <View>
          <RoundedButton onPress={this.toggleModal}>
            Log In
          </RoundedButton>
          <Modal
            visible={this.state.showModal}
            onRequestClose={this.toggleModal}>
            <LoginScreen screenProps={{ toggle: this.toggleModal }} />
          </Modal>
        </View>
      )
    } else {
      return <View />
    }
  }
}
