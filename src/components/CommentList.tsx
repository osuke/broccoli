import * as React from 'react'
import {
  View,
  StyleSheet,
  FlatList
} from 'react-native'
import {
  Container,
  Left,
  Body,
  Right,
  Text,
  Button,
  Spinner
} from 'native-base'
import { Actions } from 'react-native-router-flux'
import {
  BACKGROUND_COLOR_GRAY
} from '../constants/styles'
import Comment from './Comment'
import StyledHeader from './StyledHeader'
import StyledTitle from './StyledTitle'
import Icon from './Icon'
import { IStateToProps, IDispatchToProps } from '../containers/CommentList'

type IProps = IStateToProps & IDispatchToProps

export default class CommentList extends React.Component<IProps, {}> {
  componentWillUnmount () {
    this.props.hideComments()
  }

  render () {
    const { items } = this.props
    console.log(items)

    return (
      <Container>
        <StyledHeader>
          <Left>
            <Button
              transparent
              onPress={Actions.pop}
            >
              <Icon
                name="close"
              />
            </Button>
          </Left>
          <Body>
            <StyledTitle>コメント</StyledTitle>
          </Body>
          <Right />
        </StyledHeader>
        {items ? (
          <FlatList
            style={styles.wrap}
            data={items}
            ListEmptyComponent={() => {
              return (
                <View style={styles.noResult}>
                  <Text style={styles.noResultText}>コメントはありません</Text>
                </View>
              )
            }}
            renderItem={({ item }) => {
              return <Comment {...item} />
            }}
            keyExtractor={(item, index) => `comment-${index}`}
          />
        ) : (
          <Spinner
            color="#000"
            size="small"
          />
        )}
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: BACKGROUND_COLOR_GRAY
  },
  noResult: {
    paddingTop: 24
  },
  noResultText: {
    textAlign: 'center'
  }
})
