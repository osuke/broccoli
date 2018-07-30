import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, FlatList } from 'react-native'
import {
  Container,
  Left,
  Body,
  Right,
  Button,
} from 'native-base'
import Comment from './Comment'
import StyledHeader from './StyledHeader'
import StyledTitle from './StyledTitle'
import Icon from './Icon'
import { Actions } from 'react-native-router-flux'

export default class CommentList extends Component {
  render () {
    return (
      <Container>
        <StyledHeader>
          <Left>
            <Button
              transparent
              onPress={() => {
                Actions.pop()
              }}
            >
              <Icon
                name="ios-close"
              />
            </Button>
          </Left>
          <Body>
            <StyledTitle>コメント</StyledTitle>
          </Body>
          <Right />
        </StyledHeader>
        <FlatList
          data={this.props.items}
          renderItem={({item}) => (<Comment {...item} />)}
          keyExtractor={(item, index) => ('comment' + index)}
        />
      </Container>
    )
  }
}

CommentList.propTypes = {
  items: PropTypes.array.isRequired
}
