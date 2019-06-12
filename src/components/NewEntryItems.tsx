import * as React from 'react'
import { ICategoryItem } from '../reducers/category'
import { View, Text, FlatList, RefreshControl, StyleSheet } from 'react-native'
import Article from '../containers/Article'
import { Spinner } from 'native-base'
import { IDispatchToProps } from '../containers/NewEntryItems'
import { IAppState } from '../reducers/app'

interface IState {
  refreshing: boolean
}

interface IOwnProps {
  index: string
  url?: string
}

type IProps = IAppState & IDispatchToProps & IOwnProps

export default class NewEntryItems extends React.Component<IProps, IState> {
  constructor (props: IProps) {
    super(props)
    this.state = {
      refreshing: false
    }
  }

  componentDidMount () {
    if (!this.props.url) return
    this.props.loadHotentry(this.props.url, this.props.index)
  }

  onRefreshHandler () {
    if (!this.props.url) return
    this.props.loadHotentry(this.props.url, this.props.index)
  }

  render () {
    const status = this.props.category.items[this.props.index].status

    return (
      <View style={styles.wrap}>
        {status === 'fail' &&
          <View style={styles.error}>
            <Text style={styles.errorText}>しばらく時間を空けてから、もう一度お試しください</Text>
          </View>
        }
        <FlatList<ICategoryItem>
          style={styles.flatList}
          data={this.props.category.items[this.props.index].items}
          renderItem={({ item }) => {
            return (
              <Article
                title={item.title}
                link={item.link}
                bookmarkcount={item.bookmarkcount}
                favicon={item.favicon}
                domain={item.domain}
              />
            )
          }}
          keyExtractor={(item, index) => ('article' + index)}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefreshHandler.bind(this)}
            />
          }
          ListEmptyComponent={() => {
            if (status === 'loading') {
              return (
                <Spinner
                  color="#000"
                  size="small"
                />
              )
            } else {
              return null
            }
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1
  },
  flatList: {
    paddingTop: 8
  },
  error: {
    paddingTop: 24
  },
  errorText: {
    fontSize: 14,
    textAlign: 'center'
  }
})
