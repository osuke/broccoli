import React from 'react'
import { StyleSheet } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
import Root from './containers/Root'
import ArticleDetail from './containers/ArticleDetail'
import OAuth from './containers/OAuth'
import OrderCategories from './containers/OrderCategories'
import BookmarkForm from './containers/BookmarkForm'
import CommentList from './containers/CommentList'
import Setting from './containers/Setting'

const App = () => (
  <Router getSceneStyle={getSceneStyle}>
    <Scene modal>
      <Scene hideNavBar>
        <Scene key="root" component={Root} hideNavBar initial />
        <Scene key="externalPage" component={ArticleDetail} />
      </Scene>
      <Scene key="setting" hideNavBar>
        <Scene key="settingList" component={Setting} hideNavBar />
        <Scene key="order" component={OrderCategories} />
      </Scene>
      <Scene key="login" component={OAuth} hideNavBar />
      <Scene key="bookmarkForm" component={BookmarkForm} hideNavBar />
      <Scene key="comment" component={CommentList} hideNavBar />
    </Scene>
  </Router>
)
export default App

const getSceneStyle = (props, computedProps) => {
  const style = {
    backgroundColor: '#fff',
  };
  return style;
}
