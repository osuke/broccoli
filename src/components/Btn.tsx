import * as React from 'react'
import {
  StyleSheet
} from 'react-native'
import {
  Button,
  Text,
  View
} from 'native-base'

interface IProps {
  children: React.ReactNode
  onPress: () => void
}

const Btn: React.SFC<IProps> = ({ children, onPress }) => (
  <View style={styles.btnWrap}>
    <Button
      transparent
      style={styles.btn as any}
      onPress={onPress}
    >
      <Text style={styles.btnText}>{children}</Text>
    </Button>
  </View>
)

const styles = StyleSheet.create({
  btnWrap: {
    height: 46
  },
  btn: {
    width: 196,
    borderRadius: 23,
    backgroundColor: '#3dc264',
    flex: 1,
    justifyContent: 'center'
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    marginTop: -4,
    lineHeight: 41
  }
})

export default Btn
