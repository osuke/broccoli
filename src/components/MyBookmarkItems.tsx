import * as React from 'react'
import { IBookmarkItem } from '../reducers/myBookmark'
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

interface IProps {
  login: any
  myBookmark: any
  getBookmarkArticlesFromApi: any
  showPage: any
  getSearchResultFromApi: any
  fetchBookmarkCache: any
}

interface IState {
  refreshing: boolean
  isLoading: boolean
  isSuccess: boolean
}

export default class MyBookmarkItems extends React.Component<IProps, IState> {
  constructor (props: IProps) {
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
    if (this.props.login.isLogin) {
      this.props.getBookmarkArticlesFromApi(this.props.login.userData)
        .then((val: any) => {
          this.setState({
            isLoading: false,
            isSuccess: true,
          })
        })
        .catch((err: any) => {
          this.setState({
            isSuccess: false,
            isLoading: false,
          })
        })
    }
  }

  onRefreshHandler = () => {
    this.setState({refreshing: true})
    this.props.getBookmarkArticlesFromApi(this.props.login.userData)
      .then((val: any) => {
        this.setState({isSuccess: true})
        this.setState({refreshing: false})
      })
      .catch((err: any) => {
        this.setState({isSuccess: false})
        this.setState({refreshing: false})
      })
  }

  onEndReachedHandler = () => {
    if (this.state.isLoading || this.props.myBookmark.offset > this.props.myBookmark.total) return

    this.setState({
      isLoading: true,
    })

    this.getSearchResultFromApi(
      this.props.myBookmark.keyword,
      this.props.login.userData,
      this.props.myBookmark.offset + 20,
    )
  }

  getSearchResultFromApi = (keyword: any, userData: any, offset: any) => {
    this.setState({
      isLoading: true,
    })

    this.props.getSearchResultFromApi(
      keyword,
      userData,
      offset,
    ).then((val: any) => {
      this.setState({
        isSuccess: true,
        isLoading: false,
      })
    }).catch((err: any) => {
      this.setState({
        isSuccess: false,
        isLoading: false,
      })
    })
  }

  showSpinner = (items: any) => {
    if (items.length > 0 && this.state.isLoading) {
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
          getSearchResultFromApi={this.getSearchResultFromApi}
          fetchBookmarkCache={this.props.fetchBookmarkCache}
        />
        {!this.state.isSuccess && <ErrorMessage />}
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
                if (this.state.isLoading) {
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
                if (this.state.isLoading) {
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
