import * as React from 'react'
import {
  StyleSheet,
  Keyboard,
} from 'react-native'
import { 
  Item,
  Input,
} from 'native-base'
import { BACKGROUND_COLOR_GRAY } from '../constants/styles'

interface IProps {
  userData: any
  getSearchResultFromApi: any
  fetchBookmarkCache: any
}

interface IState {
  text: string
}

export default class SearchInput extends React.Component<IProps, IState> {
  constructor (props: IProps) {
    super(props)
  
    this.state = {
      text: '',
    }
  }

  searchBookmark = (): void => {
    if (this.state.text.length > 0) {
      this.props.getSearchResultFromApi(this.state.text, this.props.userData, 0)
    }
  }

  onChangeTextHandler = (text: string): void => {
    this.setState({
      text
    })

    if (text.length < 1) {
      this.props.fetchBookmarkCache()
      Keyboard.dismiss()
    }
  }

  render () {
    return (
       <Item
         style={styles.item as any}
       >
         <Input
           style={styles.input}
           placeholder="検索"
           value={this.state.text}
           onChangeText={this.onChangeTextHandler}
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
