import React, { PropTypes } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Styles/LoginScreenStyles'
import ExamplesRegistry from '../Services/ExamplesRegistry'

// Note that this file (App/Components/RoundedButton) needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

// Ignore in coverage report
/* istanbul ignore next */
ExamplesRegistry.addComponentExample('Rounded Button', () =>
  <RoundedButton
    text='real buttons have curves'
    onPress={() => window.alert('Rounded Button Pressed!')}
  />
)

export default class RoundedButton extends React.Component {
  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
    children: PropTypes.string,
    navigator: PropTypes.object
  }

  getText () {
    const buttonText = this.props.text || this.props.children || ''
    return buttonText
  }

  render () {
    return (
      <TouchableOpacity style={styles.loginButton} onPress={this.props.onPress}>
        <Text style={styles.loginText}>{this.getText()}</Text>
      </TouchableOpacity>
    )
  }
}
