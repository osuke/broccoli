import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import {
  Header,
} from 'native-base'

const StyledHeader = ({ children }) => (
    <Header style={styles.header}>{children}</Header>
)

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
  },
})

StyledHeader.propTypes = {
  children: PropTypes.array.isRequired
}

export default StyledHeader