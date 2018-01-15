import React from 'react'
import { StyleSheet } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
import Root from './containers/Root'
import ArticleDetail from './containers/ArticleDetail'
import OAuth from './containers/OAuth'
import OrderCategories from './containers/OrderCategories'

const App = () => (
  <Router getSceneStyle={getSceneStyle}>
    <Scene key="wrap">
      <Scene key="root" component={Root} hideNavBar initial />
      <Scene key="externalPage" component={ArticleDetail} navBarButtonColor="#f6b02c" navigationBarStyle={styles.navBar} />
      <Scene key="login" component={OAuth} navBarButtonColor="#f6b02c" navigationBarStyle={styles.navBar} />
      <Scene key="order" component={OrderCategories} navBarButtonColor="#f6b02c" navigationBarStyle={styles.navBar} />
    </Scene>
  </Router>
)
export default App

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#fafafa',
  }
})

const getSceneStyle = (props, computedProps) => {
  const style = {
    backgroundColor: '#fff',
  };
  return style;
}
