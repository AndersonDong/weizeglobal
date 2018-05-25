import React, { PropTypes, Image } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Styles/RoundedButtonStyles'
import ExamplesRegistry from '../Services/ExamplesRegistry'
import { Images } from '../Themes'


// Note that this file (App/Components/RoundedButton) needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

export default class SocialButton extends React.Component {
  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
    children: PropTypes.string,
    navigator: PropTypes.object
  }

  getText () {
    const buttonText = this.props.text || this.props.children || ''
    return buttonText.toUpperCase()
  }

  render () {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Image source={Images.facebook} />
      </TouchableOpacity>
    )
  }
}
