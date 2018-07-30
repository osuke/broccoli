import React from 'react'
import { StyleSheet } from 'react-native'
import { Ionicons, Feather } from '@expo/vector-icons'

export default ({ name }) => {
  switch (name) {
    case 'arrow-left':
    case 'share':
    case 'compass':
    case 'message-square':
    case 'edit':
      return (
        <Feather
          name={name}
          style={styles.footerIcon}
        />
      )
    case 'ios-create-outline':
    case 'ios-share-outline':
    case 'ios-text-outline':
    case 'ios-compass-outline':
    case 'ios-menu-outline':
      return (
        <Ionicons
          name={name}
          style={styles.footerIcon}
        />
      )
    case 'ios-settings':
      return (
        <Ionicons
          name={name}
          style={styles.settingIcon}
        />
      )
    case 'ios-arrow-forward':
      return (
        <Ionicons
          name={name}
          style={styles.arrowForward}
        />
      )
    case 'ios-arrow-back':
      return (
        <Ionicons
          name={name}
          style={styles.arrowBack}
        />
      )
    case 'ios-close':
      return (
        <Ionicons
          name={name}
          style={styles.closeIcon}
        />
      )
  }
}

const styles = StyleSheet.create({
  footerIcon: {
    fontSize: 30,
  },
  closeIcon: {
    color: '#858585',
    fontSize: 40,
  },
  settingIcon: {
    color: '#858585',
    fontSize: 24,
  },
  arrowForward: {
    color: '#d6d6d6',
    fontSize: 20,
  },
  arrowBack: {
    color: '#858585',
    fontSize: 28,
  },
})