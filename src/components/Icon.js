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
    case 'ios-arrow-back':
    case 'ios-compass-outline':
    case 'ios-close':
      return (
        <Ionicons
          name={name}
          style={styles.footerIcon}
        />
      )
  }
}

const styles = StyleSheet.create({
  footerIcon: {
    fontSize: 30
  }
})
