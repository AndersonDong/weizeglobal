import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import LaunchScreenButton from './LaunchScreenButton.js'
import LaunchScreenButtonSignUp from './LaunchScreenButtonSignUp.js'
import { StackNavigator } from 'react-navigation'
import LoginScreen from '../../App/Containers/LoginScreen.js'
import ThemeScreen from '../../ignite/DevScreens/ThemeScreen'

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
            <Image source={Images.logo} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
              An investment in knowledge
	      pays the best interest
            </Text>
          </View>
          <LaunchScreenButton>
            Login
          </LaunchScreenButton>
          <LaunchScreenButtonSignUp>
            SignUp
          </LaunchScreenButtonSignUp>
        </ScrollView>
      </View>
    )
  }
}
