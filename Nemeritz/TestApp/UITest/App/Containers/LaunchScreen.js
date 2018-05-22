import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import { StackNavigator } from 'react-navigation'
import LoginScreen from '../../App/Containers/LoginScreen.js'
import RoundedButton from '../../App/Components/RoundedButton'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends React.Component {

  openLogin = () => {
    this.props.navigation.navigate('LoginScreen')
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.WEIZE} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
              Welcome to Weize Global
            </Text>
          </View>
          <RoundedButton onPress={this.openLogin}>
            Log In
          </RoundedButton>
          <RoundedButton onPress={this.openLogin}>
            Sign Up
          </RoundedButton>
        </ScrollView>
      </View>
    )
  }
}

const App = StackNavigator({
    LoginScreen: { screen: LoginScreen}
})
