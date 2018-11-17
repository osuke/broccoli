import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
} from 'react-native'
import { 
  Item,
  Input,
} from 'native-base'
import { BACKGROUND_COLOR_GRAY } from '../constants/styles'

export default class SearchInput extends Component {
  constructor (props) {
    super(props)
  
    this.state = {
      text: '',
      offset: 0,
    }
  }

  searchBookmark = () => {
    if (this.state.text.length > 0) {
      this.props.getSearchResultFromApi(this.state.text, this.props.login.userData)
    } else {
      this.props.getBookmarkArticlesFromApi(this.props.login.userData)
    }
  }

  render () {
    return (
       <Item
         style={styles.item}
       >
         <Input
           style={styles.input}
           placeholder="検索"
           value={this.state.text}
           onChangeText={text => {
             this.setState({
               text
             })
           }}
           onSubmitEditing={this.searchBookmark}
         />
       </Item>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 12,
  },
  input: {
    height: 40,
    backgroundColor: BACKGROUND_COLOR_GRAY,
    borderRadius: 20,
    paddingLeft: 12,
    paddingRight: 12,
  },
})

SearchInput.propTypes = {
  login: PropTypes.object.isRequired,
  getBookmarkArticlesFromApi: PropTypes.func.isRequired,
  getSearchResultFromApi: PropTypes.func.isRequired,
}