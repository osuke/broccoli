import React, { Component } from 'react'
import { StyleSheet, View, Text, Modal, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
} from 'native-base'
import Comment from './Comment'
import Icon from './Icon'
import { Actions } from 'react-native-router-flux'

export default class CommentList extends Component {
  render () {
    return (
      <Container>
        <Header>
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
          <Body></Body>
          <Right />
        </Header>
        <ScrollView>
          <FlatList
            data={this.props.items}
            renderItem={({item}) => (<Comment {...item} />)}
            keyExtractor={(item, index) => ('comment' + index)}
          />
        </ScrollView>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  headerIcon: {
    fontSize: 28
  }
})
