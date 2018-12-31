import * as React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

const ErrorMessage: React.SFC<{}> = () => (
  <View style={styles.error}>
    <Text style={styles.errorText}>しばらく時間を空けてから、もう一度お試しください</Text>
  </View>
)

const styles = StyleSheet.create({
  error: {
    paddingTop: 24,
  },
  errorText: {
    fontSize: 14,
    textAlign: 'center',
  },
})

export default ErrorMessage
