import * as React from 'react'
import { StyleSheet } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

interface IProps {
  name: string
}
const Icon: React.SFC<IProps> = ({ name }) => {
  switch (name) {
    case 'settings':
      return (
        <MaterialCommunityIcons
          name={name}
          size={24}
          color="#6b6b6b"
        />
      )
    case 'compass-outline':
    case 'share-variant':
    case 'comment-multiple-outline':
      return (
        <MaterialCommunityIcons
          name={name}
          size={28}
          color="#6b6b6b"
        />
      )
    case 'comment-multiple-outline':
    case 'pencil-box-outline':
    case 'menu':
    case 'close':
      return (
        <MaterialCommunityIcons
          name={name}
          size={30}
          color="#6b6b6b"
        />
      )
    case 'chevron-left':
    case 'chevron-right':
      return (
        <MaterialCommunityIcons
          name={name}
          size={36}
          color="#6b6b6b"
        />
      )
    default:
      return null
  }
}

const styles = StyleSheet.create({
  footerIcon: {
    fontSize: 30,
    color: '#6b6b6b'
  },
  closeIcon: {
    color: '#858585',
    fontSize: 40
  },
  settingIcon: {
    color: '#858585',
    fontSize: 24
  },
  arrowForward: {
    color: '#d6d6d6',
    fontSize: 24
  },
  arrowBack: {
    color: '#858585',
    fontSize: 28
  }
})

export default Icon
