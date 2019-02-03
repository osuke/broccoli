import * as React from 'react'
import { IBookmarkItem, } from '../reducers/myBookmark'
import {
  StyleSheet,
  View,
  FlatList,
  RefreshControl,
} from 'react-native'
import { 
  Spinner ,
} from 'native-base'
import SearchInput from './SearchInput'
import ErrorMessage from './ErrorMessage'
import Article from '../containers/Article'
import { IStateToProps, IDispatchToProps, IMergeProps, } from '../containers/MyBookmarkItems'

type IProps = IStateToProps & IDispatchToProps

interface IState {
  refreshing: boolean
  isLoading: boolean
  isSuccess: boolean
}

export default class MyBookmarkItems extends React.Component<IMergeProps, IState> {
  constructor (props: IMergeProps) {
    super(props)
    this.state = {
      refreshing: false,
      isLoading: false,
      isSuccess: true,
    }
  }

  componentDidMount () {
    this.setState({
      isLoading: true,
    })
    if (this.props.login.isLogin && this.props.login.userData) {
      this.props.loadMyBookmark()
    }
  }

  onRefreshHandler = () => {
    if (!this.props.login.isLogin || !this.props.login.userData) return
    this.props.loadMyBookmark()
  }

  onEndReachedHandler = () => {
    if (this.props.myBookmark.offset > this.props.myBookmark.total) return

    this.props.getSearchResultFromApi(
      this.props.myBookmark.keyword,
      this.props.myBookmark.offset + 20,
    )
  }

  showSpinner = (items: any) => {
    if (items.length > 0 && this.props.myBookmark.status === 'loading') {
      return (
        <Spinner
          color="#000"
          size="small"
        />
      )
    } else {
      return null
    }
  }

  render () {
    return (
      <View style={styles.wrap}>
        <SearchInput
          userData={this.props.login.userData}
          getSearchResultFromApi={this.props.getSearchResultFromApi}
          fetchBookmarkCache={this.props.fetchBookmarkCache}
        />
        {this.props.myBookmark.status === 'fail' && <ErrorMessage />}
        <View style={styles.wrap}>
          {this.props.myBookmark.type === 'LATEST' ? (
            <FlatList<IBookmarkItem>
              style={styles.flatList}
              ref="flatlist"
              data={this.props.myBookmark.items.latest}
              renderItem={({item}) => {
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
              keyExtractor={(item, index) => ('bookmarkArticle' + index)}
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this.onRefreshHandler}
                />
              }
              ListEmptyComponent={() => {
                if (this.props.myBookmark.items.latest.length === 0 && this.props.myBookmark.status === 'loading') {
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
          ) : (
            <FlatList<IBookmarkItem>
              style={styles.flatList}
              ref="flatlist"
              data={this.props.myBookmark.items.searchResult}
              renderItem={({item}) => {
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
              keyExtractor={(item, index) => ('bookmarkArticle' + index)}
              onEndReached={this.onEndReachedHandler}
              onEndReachedThreshold={0}
              ListFooterComponent={() => this.showSpinner(this.props.myBookmark.items.searchResult)}
              ListEmptyComponent={() => {
                if (this.props.myBookmark.status === 'loading') {
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
          )}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  flatList: {
    paddingTop: 8,
  },
})
