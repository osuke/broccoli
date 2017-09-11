import React from 'react'
import { StyleSheet } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
import Root from './containers/Root'
import ModalWebview from './containers/ModalWebview'

const App = () => (
  <Router getSceneStyle={getSceneStyle}>
    <Scene key="wrap">
      <Scene key="root" component={Root} hideNavBar initial />
      <Scene key="externalPage" component={ModalWebview} navBarButtonColor="#a0a0a0" navigationBarStyle={styles.navBar} />
    </Scene>
  </Router>
)
export default App

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#fff'
  }
})

const getSceneStyle = (props, computedProps) => {
  const style = {
    backgroundColor: '#fff',
  };
  return style;
}
