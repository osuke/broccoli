import React from 'react'
import { StyleSheet, View, Text, Modal, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Comment from './Comment'

export default class CommentList extends React.Component {
  render () {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.visible}
      >
        <View
          style={styles.header}
        >
          <TouchableOpacity
            onPress={() => { this.props.closeComments() }}
            style={styles.closeBtn}
          >
            <Ionicons 
              name="md-close" 
              size={28} 
              color="#f6b02c" />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <FlatList
            data={this.props.items}
            renderItem={({item}) => (<Comment {...item} />)}
            keyExtractor={(item, index) => ('comment' + index)}
          />
        </ScrollView>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
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
