import { connect } from 'react-redux'
import { IAppState } from '../reducers/app'
import { ThunkDispatch } from 'redux-thunk'
import { ICommentState } from '../reducers/commentList'
import { IBookmark, hideComments } from '../actions/commentList'
import CommentList from '../components/CommentList'

export type IStateToProps = ICommentState

const mapStateToProps = (state: IAppState): IStateToProps => {
  return {
    items: getCommentItems(state.commentList.items)
  }
}

export interface IDispatchToProps {
  hideComments: () => void
}

const mapDispatchToProps = (dispatch: ThunkDispatch<IAppState, undefined, any>): IDispatchToProps => {
  return {
    hideComments: () => { dispatch(hideComments()) }
  }
}
const getCommentItems = (items?: IBookmark[]) => {
  if (items) {
    let comments: IBookmark[] = []

    items.map(item => {
      if (item.comment.length > 0) {
        comments.push(item)
      }
    })
    return comments
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)
