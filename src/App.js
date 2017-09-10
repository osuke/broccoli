import React from 'react'
import { StyleSheet } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
import Root from './containers/Root'
import ModalWebview from './containers/ModalWebview'

const App = () => (
  <Router>
    <Scene key="wrap">
      <Scene key="root" component={Root} hideNavBar initial />
      <Scene key="externalPage" component={ModalWebview} navBarButtonColor="#a0a0a0" sceneStyle={styles.scene} navigationBarStyle={styles.navBar} />
    </Scene>
  </Router>
)
export default App

const styles = StyleSheet.create({
  scene: {
    backgroundColor: '#fff'
  },
  navBar: {
    backgroundColor: '#fff'
  }
})
