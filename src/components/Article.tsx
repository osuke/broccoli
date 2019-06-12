import * as React from 'react'
import {
  StyleSheet,
  Image
} from 'react-native'
import {
  Text,
  ListItem,
  View
} from 'native-base'
import {
  BORDER_WIDTH_PRIMARY,
  BORDER_COLOR_PRIMARY
} from '../constants/styles'

interface IProps {
  showPage: (link: string, title: string) => void
  title: string
  link: string
  bookmarkcount: number
  favicon: string
  domain: string
}

export default class Article extends React.Component<IProps> {
  render () {
    return (
      <ListItem
        onPress={() => {
          this.props.showPage(this.props.link, this.props.title)
        }}
        style={styles.listItem}
      >
        <View style={styles.body}>
          <View>
            <Text style={styles.title}>{this.props.title}</Text>
          </View>
          <View style={styles.siteInfo}>
            <Image
              style={styles.favicon}
              source={{ uri: this.props.favicon }}
            />
            <Text note>{this.props.domain}</Text>
          </View>
          <View>
            <Text note>{this.props.bookmarkcount} users</Text>
          </View>
        </View>
      </ListItem>
    )
  }
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#fff',
    marginLeft: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    borderBottomWidth: 0
  },
  title: {
    marginBottom: 6,
    lineHeight: 22
  },
  body: {
    flex: 1,
    borderBottomWidth: BORDER_WIDTH_PRIMARY,
    borderBottomColor: BORDER_COLOR_PRIMARY,
    paddingTop: 9,
    paddingRight: 12,
    paddingBottom: 12,
    marginLeft: 16
  },
  siteInfo: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5
  },
  favicon: {
    width: 16,
    height: 16,
    marginTop: 1,
    marginRight: 6
  }
})
