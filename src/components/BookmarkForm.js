import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Modal } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class BookmarkForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { text: '' }
  }

  render () {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.bookmark.visible}
      >
        <View
          style={styles.header}
        >
          <TouchableOpacity
            onPress={this.props.closeBookmark}
            style={styles.closeBtn}
          >
            <Ionicons 
              name="md-close" 
              size={28} 
              color="#f6b02c" />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.comment}
            onChangeText={(text) => { this.setState({text})}}
            value={this.state.text}
          />

          <TouchableOpacity
            onPress={() => {
              this.props.saveBookmark(this.props.login, this.props.webview.url, this.state.text)
            }}
          >
            <Text>ブックマークする</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  comment: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 100
  },
  header: {
    height: 65,
    backgroundColor: '#fafafa',
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 1
  },
  closeBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 16,
    marginTop: 28
  }
})
