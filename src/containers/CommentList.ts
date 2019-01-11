import { connect } from 'react-redux'
import { IAppState, } from '../reducers/app'
import { ICommentState, } from '../reducers/commentList'
import { IBookmark, } from '../actions/commentList'
import CommentList from '../components/CommentList'

export type IStateToProps = ICommentState

const mapStateToProps = (state: IAppState): IStateToProps => {
  return {
    items: getCommentItems(state.commentList.items)
  }
}

const getCommentItems = (items: IBookmark[]) => {
  let comments: IBookmark[] = []

  items.map(item => {
    if (item.comment.length > 0) {
      comments.push(item)
    }
  })

  return comments
}

export default connect(mapStateToProps, null)(CommentList)