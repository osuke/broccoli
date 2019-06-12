import * as React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

interface IProps {
  text?: string
}

const ErrorMessage: React.SFC<IProps> = ({ text }) => (
  <View style={styles.error}>
    <Text style={styles.errorText}>{ text ? text : 'しばらく時間を空けてから、もう一度お試しください'}</Text>
  </View>
)

const styles = StyleSheet.create({
  error: {
    paddingTop: 24
  },
  errorText: {
    fontSize: 14,
    textAlign: 'center'
  }
})

export default ErrorMessage
