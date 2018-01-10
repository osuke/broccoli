import React from 'react'
import { StyleSheet, View, TouchableOpacity, TextInput, Modal } from 'react-native'
import { Container, Button, Text } from 'native-base'
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
        <Container style={styles.container}>
          <TextInput
            style={styles.comment}
            onChangeText={(text) => { this.setState({text})}}
            value={this.state.text}
          />
          <Button
            style={styles.addButton}
            onPress={() => {
              this.props.saveBookmark(this.props.login, this.props.webview.url, this.state.text)
            }}
            block>
            <Text style={styles.addButtonText}>ブックマークする</Text>
          </Button>
        </Container>
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
    marginBottom: 16,
    borderColor: '#e5e5e5',
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
  },
  addButton: {
    backgroundColor: '#f6b02c'
  },
  addButtonText: {
    color: '#fff'
  }
})
