import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import {
  Title,
} from 'native-base'

const StyledTitle = ({ children }) => (
    <Title style={styles.title}>{children}</Title>
)

const styles = StyleSheet.create({
  title: {
    color: '#6b6b6b',
    fontSize: 16,
  },
})

StyledTitle.propTypes = {
  children: PropTypes.string.isRequired
}

export default StyledTitle