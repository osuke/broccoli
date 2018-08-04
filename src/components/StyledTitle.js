import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import {
  Title,
} from 'native-base'
import {
  TITLE_COLOR_PRIMARY,
} from '../constants/styles.js'

const StyledTitle = ({ children }) => (
    <Title style={styles.title}>{children}</Title>
)

const styles = StyleSheet.create({
  title: {
    color: TITLE_COLOR_PRIMARY,
    fontSize: 16,
  },
})

StyledTitle.propTypes = {
  children: PropTypes.string.isRequired
}

export default StyledTitle