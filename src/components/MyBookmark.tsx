import * as React from 'react'
import MyBookmarkItems from '../containers/MyBookmarkItems'
import Login from './Login'

interface IProps {
  isLogin: boolean
}
const MyBookmark: React.SFC<IProps> = ({ isLogin }) => {
  if (isLogin) {
    return <MyBookmarkItems />
  } else {
    return <Login />
  }
}

export default MyBookmark
