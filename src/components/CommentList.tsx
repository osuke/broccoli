import * as React from 'react'
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native'
import {
  Container,
  Left,
  Body,
  Right,
  Text,
  Button,
} from 'native-base'
import { Actions, } from 'react-native-router-flux'
import {
  BACKGROUND_COLOR_GRAY,
} from '../constants/styles'
import Comment from './Comment'
import StyledHeader from './StyledHeader'
import StyledTitle from './StyledTitle'
import Icon from './Icon'
import { IStateToProps, } from '../containers/CommentList'

type IProps = IStateToProps

const CommentList: React.SFC<IProps> = ({ items }) => {
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
      <FlatList
        style={styles.wrap}
        data={items}
        ListEmptyComponent={() => {
          if (items.length > 0) {
            return (
              <View style={styles.noResult}>
                <Text style={styles.noResultText}>コメントはありません</Text>
              </View>
            )
          } else {
            return null
          }
        }}
        renderItem={({item}) => {
          return <Comment {...item} />
        }}
        keyExtractor={(item, index) => `comment-${index}`}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: BACKGROUND_COLOR_GRAY,
  },
  noResult: {
    paddingTop: 24,
  },
  noResultText: {
    textAlign: 'center',
  },
})

export default CommentList
