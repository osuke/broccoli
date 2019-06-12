import * as React from 'react'
import {
  StyleSheet,
  Alert
} from 'react-native'
import {
  Button,
  Text
} from 'native-base'

interface IProps {
  tag: string
  index: number
  deleteTag: (index: number) => void
}

const Tag: React.SFC<IProps> = ({ tag, index, deleteTag }) => (
  <Button
    style={styles.tag as any}
    onPress={() => {
      Alert.alert(
        'タグの削除',
        '実行しますか？',
        [
          { text: 'OK', onPress: () => { deleteTag(index) } },
          { text: 'CANCEL' }
        ]
      )
    }}
  >
    <Text style={styles.tagText}>{tag}</Text>
  </Button>
)

const styles = StyleSheet.create({
  tag: {
    borderRadius: 23,
    height: 30,
    backgroundColor: '#dbdbdb',
    marginRight: 8
  },
  tagText: {
    lineHeight: 16,
    color: '#6b6b6b',
    fontSize: 16
  }
})

export default Tag
