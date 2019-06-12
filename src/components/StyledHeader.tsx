import * as React from 'react'
import { StyleSheet } from 'react-native'
import {
  Header
} from 'native-base'
import {
  BORDER_WIDTH_PRIMARY,
  BORDER_COLOR_SECONDARY
} from '../constants/styles'

interface IProps {
  children: React.ReactNode
}

const StyledHeader: React.SFC<IProps> = ({ children }) => (
  <Header style={styles.header}>{children}</Header>
)

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    borderBottomColor: BORDER_COLOR_SECONDARY,
    borderBottomWidth: BORDER_WIDTH_PRIMARY
  }
})

export default StyledHeader
