import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import {
  Text,
  ListItem,
  Thumbnail,
  Body,
} from 'native-base'
import { Actions } from 'react-native-router-flux'
import {
  BORDER_WIDTH_PRIMARY,
  BORDER_COLOR_PRIMARY,
} from '../constants/styles'

export default class FavArticle extends React.Component {
  render () {
    const userImage = `https://cdn1.www.st-hatena.com/users/sl/${this.props.creator}/profile.gif`

    return (
      <ListItem
        style={styles.listItem}
        onPress={() => {
          this.props.showPage(this.props)
          Actions.externalPage()
        }}
      >
        <View style={styles.article}>
          <View style={styles.top}>
            <Text style={styles.title}>{this.props.title}</Text>
          </View>
          <View style={styles.bottom}>
            <Thumbnail
              small
              source={{uri: userImage}}
              style={styles.thumbnail}
            />
            <Body>
              <Text style={styles.creator}>{this.props.creator}</Text>
              <Text style={styles.description}>{this.props.description[0]}</Text>
            </Body>
          </View>
        </View>
      </ListItem>
    )
  }
}

const styles = StyleSheet.create({
  listItem: {
    marginLeft: 0,
    backgroundColor: '#fff',
    borderBottomWidth: 0,
    paddingBottom: 0,
    paddingRight: 0,
  },
  article: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: 16,
    paddingBottom: 12,
    paddingRight: 12,
    borderBottomWidth: BORDER_WIDTH_PRIMARY,
    borderBottomColor: BORDER_COLOR_PRIMARY,
  },
  thumbnail: {
    alignSelf: 'flex-start',
  },
  top: {
    marginBottom: 12,
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 8,
  },
  title: {
    lineHeight: 22,
    marginLeft: 8,
  },
  creator: {
    marginBottom: 4,
    fontSize: 14,
  },
  description: {
    marginBottom: 4,
    lineHeight: 18,
    fontSize: 14,
  }
})

FavArticle.propTypes = {
  showPage: PropTypes.func.isRequired,
  creator: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired
}