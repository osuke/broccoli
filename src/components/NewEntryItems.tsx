import * as React from 'react'
import { ICategoryItem } from '../reducers/category'
import { View, Text, FlatList, RefreshControl, StyleSheet } from 'react-native'
import Article from '../containers/Article'
import { Spinner } from 'native-base'
import { IDispatchToProps, } from '../containers/NewEntryItems'
import { ICategory, } from '../reducers/category'

interface IState {
  refreshing: boolean
  isLoading: boolean
  isSuccess: boolean
}
interface IOwnProps {
  data: ICategory
  index: string
}

type IProps = IDispatchToProps & IOwnProps


export default class NewEntryItems extends React.Component<IProps, IState> {
  constructor (props: IProps) {
    super(props)
    this.state = {
      refreshing: false,
      isLoading: true,
      isSuccess: true,
    }
  }

  componentDidMount () {
    this.props.getArticlesFromApi(this.props.data.url, this.props.index)
      .then(() => {
        this.setState({isSuccess: true})
        this.setState({isLoading: false})
      })
      .catch(() => {
        this.setState({isSuccess: false})
        this.setState({isLoading: false})
      })

  }

  onRefreshHandler () {
    this.setState({refreshing: true})
    this.props.getArticlesFromApi(this.props.data.url, this.props.index)
      .then(() => {
        this.setState({isSuccess: true})
        this.setState({refreshing: false})
      })
      .catch(() => {
        this.setState({isSuccess: false})
        this.setState({refreshing: false})
      })
  }

  render () {
    return (
      <View style={styles.wrap}>
        {!this.state.refreshing && !this.state.isSuccess &&
          <View style={styles.error}>
            <Text style={styles.errorText}>しばらく時間を空けてから、もう一度お試しください</Text>
          </View>
        }
        <FlatList<ICategoryItem>
          style={styles.flatList}
          data={this.props.data.items}
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
          keyExtractor={(item, index) => ('article' + index)}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefreshHandler.bind(this)}
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
  error: {
    paddingTop: 24,
  },
  errorText: {
    fontSize: 14,
    textAlign: 'center',
  },
})
