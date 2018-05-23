import React from 'react'
import { View, Modal } from 'react-native'
import DebugConfig from '../../App/Config/DebugConfig'
import LoginButton from '../../App/Containers/LoginButton'
import LaunchScreen from '../../App/Containers/LaunchScreen'

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
          <LoginButton onPress={this.toggleModal}>
            Cancel
          </LoginButton>
          <Modal
            visible={this.state.showModal}
            onRequestClose={this.toggleModal}>
            <LaunchScreen screenProps={{ toggle: this.toggleModal }} />
          </Modal>
        </View>
      )
    } else {
      return <View />
    }
  }
}
