import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import {
  Header,
} from 'native-base'
import {
  BORDER_WIDTH_PRIMARY,
  BORDER_COLOR_SECONDARY,
} from '../constants/styles.js'

const StyledHeader = ({ children }) => (
    <Header style={styles.header}>{children}</Header>
)

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    borderBottomColor: BORDER_COLOR_SECONDARY,
    borderBottomWidth: BORDER_WIDTH_PRIMARY,
  },
})

StyledHeader.propTypes = {
  children: PropTypes.array.isRequired
}

export default StyledHeader