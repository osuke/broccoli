import * as React from 'react'
import { StyleSheet } from 'react-native'
import {
  Title,
} from 'native-base'
import {
  TITLE_COLOR_PRIMARY,
} from '../constants/styles.js'

interface IProps {
  children: React.ReactNode
}
const StyledTitle: React.SFC<IProps> = ({ children }) => (
  <Title style={styles.title as any}>{children}</Title>
)

const styles = StyleSheet.create({
  title: {
    color: TITLE_COLOR_PRIMARY,
    fontSize: 16,
  },
})

export default StyledTitle
