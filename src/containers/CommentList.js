import { connect } from 'react-redux'
import CommentList from '../components/CommentList'

const mapStateToProps = state => {
  return {
    items: getCommentItems(state.commentList.items)
  }
}

const getCommentItems = items => {
  let comments = []

  items.map(item => {
    if (item.comment.length > 0) {
      comments.push(item)
    }
  })

  return comments
}

export default connect(mapStateToProps, null)(CommentList)