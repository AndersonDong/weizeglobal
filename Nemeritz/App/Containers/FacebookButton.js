import React from 'react'
import { View, Modal } from 'react-native'
import DebugConfig from '../../App/Config/DebugConfig'
import SocialButton from '../../App/Components/SocialButton'
import SignUpScreen from '../../App/Containers/SignUpScreen'

export default class FacebookButton extends React.Component {
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
          <SocialButton onPress={this.toggleModal}>
          </SocialButton>
          <Modal
            visible={this.state.showModal}
            onRequestClose={this.toggleModal}>
            <SignUpScreen screenProps={{ toggle: this.toggleModal }} />
          </Modal>
        </View>
      )
    } else {
      return <View />
    }
  }
}
